/**
 * HPACK
 * @constructor
 * @param {Object} options
 * @return {HPACK}
 */
function HPACK( options ) {

  if( !(this instanceof HPACK) )
    return new HPACK( options )

  options = options || {}

  this.staticTable = new HPACK.StaticTable( options.map )
  this.dynamicTable = new HPACK.DynamicTable(
    ( options.tableSize || HPACK.DEFAULT_TABLE_SIZE ) - this.staticTable.length
  )

  this.codec = typeof options.codec !== 'function' ?
    options.codec || new HPACK.Codec( this, options ) :
    new options.codec( this, options )

}

/**
 * Default header table size
 * @type {Number}
 */
HPACK.DEFAULT_TABLE_SIZE = 4096

HPACK.StaticTable = require( './static-table' )
HPACK.DynamicTable = require( './dynamic-table' )
HPACK.Codec = require( './codec' )

/**
 * HPACK prototype
 * @type {Object}
 */
HPACK.prototype = {

  constructor: HPACK,

  get tableSize() {
    return this.staticTable.length +
      this.dynamicTable.length
  },

  set tableSize( value ) {
    value = value - this.staticTable.length
    this.dynamicTable.length = value
  },

  get: function( index ) {
    if( index <= this.staticTable.length ) {
      return this.staticTable.get( index )
    } else if( index <= this.tableSize ) {
      return this.dynamicTable.get( index )
    } else {
      throw new Error( 'Index ' + index + ' out of bounds [1,' + this.tableSize + ']' )
    }
  },

  set: function( index, value ) {
    if( index <= this.staticTable.length ) {
      return this.staticTable.set( index, value )
    } else if( index <= this.tableSize ) {
      return this.dynamicTable.set( index, value )
    } else {
      throw new Error( 'Index ' + index + ' out of bounds [1,' + this.tableSize + ']' )
    }
  },

  encode: function( headers ) {
    return this.codec.encode( headers )
  },

  /**
   * Decodes a header block into header fields
   * @param {Buffer} headerBlock
   * @return {Object} headers
   */
  decode: function( headerBlock ) {
    return this.codec.decode( headerBlock )
  },

}

// Exports
module.exports = HPACK
