var Queue = require( 'double-ended-queue' )

/**
 * StaticTable
 * @constructor
 * @param {Array} map[Object<name,value>]
 * @return {StaticTable}
 */
function StaticTable( map ) {
  
  if( !(this instanceof StaticTable) )
    return new StaticTable( map )
  
  this.data = new Queue( map || StaticTable.map )
  
}

/**
 * Map of header fields specified in RFC 7541
 * @type {Array}
 */
StaticTable.map = require( './static-map' )

/**
 * StaticTable prototype
 * @type {Object}
 */
StaticTable.prototype = {
  
  constructor: StaticTable,
  
  get length() {
    return this.data.length
  },
  
  get: function( index ) {
    if( index > this.data.length )
      throw new Error( 'Index ' + index + ' out of bounds [1,' + this.length + ']' )
    return this.data.get( index - 1 )
  },
  
  set: function( index, value ) {
    return this.get( index ).value = value
  },
  
}

// Exports
module.exports = StaticTable
