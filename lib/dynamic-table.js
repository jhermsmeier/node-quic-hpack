var Queue = require( 'double-ended-queue' )

/**
 * DynamicTable
 * @constructor
 * @param {Number} capacity
 * @return {DynamicTable}
 */
function DynamicTable( capacity ) {
  
  if( !(this instanceof DynamicTable) )
    return new DynamicTable( capacity )
  
  this.data = new Queue( capacity )
  
}

/**
 * DynamicTable prototype
 * @type {Object}
 */
DynamicTable.prototype = {
  
  constructor: DynamicTable,
  
  get length() {
    return this.data.length
  },
  
  get: function( index ) {
    if( index > this.data.length )
      throw new Error( 'Index ' + index + ' out of bounds [1,' + this.length + ']' )
    return this.data.get( index - 1 )
  },
  
  set: function( index, value ) {
    // TODO
  },
  
}

// Exports
module.exports = DynamicTable
