/**
 * Codec
 * @return {Codec}
 */
function Codec( hpack, options ) {

  if( !(this instanceof Codec) )
    return new Codec( hpack, options )

  options = options || {}

  this.hpack = hpack

}

/**
 * Codec prototype
 * @type {Object}
 */
Codec.prototype = {

  constructor: Codec,

  encode: function( headers ) {
    return headers
  },

  decode: function( headerBlock ) {
    return headerBlock
  },

}

// Exports
module.exports = Codec
