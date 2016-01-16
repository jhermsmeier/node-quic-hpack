/**
 * HPACK
 * @constructor
 * @param {Object} options
 * @return {HPACK}
 */
function HPACK( options ) {
  
  if( !(this instanceof HPACK) )
    return new HPACK( options )
  
  this.options = options || {}
  
  this.staticTable = new HPACK.StaticTable( this.options.map )
  this.dynamicTable = new HPACK.DynamicTable( this.options.tableSize )
  
  // TODO
  this.codec = null
  
}

/**
 * Static Table
 * @constructor
 * @type {Function}
 */
HPACK.StaticTable = require( './static-table' )

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
    // TODO
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
  
  encode: function( headers ) {
    // TODO
    for( var k in input ) {
      output[k] = this.codec.encode( k, input[k] )
    }
  },
  
  /**
   * Decodes a header block into header fields
   * @param {Buffer} headerBlock
   * @return {Object} headers
   */
  decode: function( headerBlock ) {
    // TODO
    for( var k in input ) {
      output[k] = this.codec.decode( input[k] )
    }
  },
  
}

// Exports
module.exports = HPACK
