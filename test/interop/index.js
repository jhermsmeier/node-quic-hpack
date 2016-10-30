var HPACK = require( '../..' )
var assert = require( 'assert' )
var path = require( 'path' )
var fs = require( 'fs' )

const DATA_DIR = path.join( __dirname, 'data' )

function createTestSuite( file ) {
  suite( path.basename( file ).replace( '.json', '' ), function() {

    var story = require( file )
    var hpack = null

    // Make sure we have an untainted instance for each story run
    suiteSetup( function() {
      hpack = new HPACK()
    })

    // Create a test for each case (request)
    story.cases.forEach( function( req ) {
      test( 'case ' + req.seqno, function storyCase() {

        // Check for or set header table size
        if( req.header_table_size ) {
          if( req.seqno === 0 ) {
            hpack.tableSize = req.header_table_size
          }
          assert.equal(
            hpack.tableSize,
            req.header_table_size,
            'Header table size should be ' + req.header_table_size
          )
        }

        var wire = new Buffer( req.wire, 'hex' )

        // Encoder
        assert.deepEqual( hpack.encode( req.headers ), wire )
        // Decoder
        assert.deepEqual( hpack.decode( wire ), req.headers )

      })
    })

    // Null story data, to allow for GC
    suiteTeardown( function() {
      hpack = void 0
      story = void 0
      require.cache[ file ] = void 0
      delete require.cache[ file ]
    })

  })
}

suite( 'HPACK Interop', function() {

  this.bail( true )

  var ls = fs.readdirSync( DATA_DIR ).filter( function( dir ) {
    return fs.statSync( path.join( DATA_DIR, dir ) ).isDirectory()
  })

  ls.map( function( dirname ) {
    suite( dirname, function() {
      var dir = path.join( DATA_DIR, dirname )
      var ls = fs.readdirSync( dir ).filter( function( filename ) {
        return /\.json$/.test( filename )
      })
      .map( function( filename ) {
        createTestSuite( path.join( dir, filename ) )
      })
    })
  })

})
