var fs = require( 'fs' )
var path = require( 'path' )

const SOURCE_DIR = path.join( __dirname, '..', 'hpack-test-case' )
const TEST_DATA_DIR = path.join( __dirname, '..', 'test/interop/data' )

function getDataDirs() {
  return fs.readdirSync( SOURCE_DIR )
    .filter( function( dir ) {
      return !/^\./.test( dir ) &&
        dir !== 'util' &&
        dir !== 'raw-data' &&
        fs.statSync( path.join( SOURCE_DIR, dir ) ).isDirectory()
    })
    .map( function( dir ) {
      return path.join( SOURCE_DIR, dir )
    })
}

function getStories( dir ) {
  return fs.readdirSync( dir )
    .filter( function( file ) {
      return /\.json$/.test( file )
    })
    .map( function( file ) {
      return path.join( dir, file )
    })
}

function processStory( dir, storyFile, index ) {
  
  var story = require( storyFile )
  
  story.cases = story.cases.map( function( req ) {
    req.wire = req.wire.toUpperCase()
    req.headers = req.headers.reduce( function( headers, field ) {
      for( var k in field ) {
        headers.push( k, field[ k ] )
      }
      return headers
    }, [])
    return req
  })
  
  var dirname = path.join( TEST_DATA_DIR, path.basename( dir ) )
  var filepath = path.join( dirname, 'story-' + ( ( index < 10 ) ? '0' + index : index ) + '.json' )
  
  try { fs.mkdirSync( dirname ) } catch( error ) {
    if( error && error.code !== 'EEXIST' )
      throw error
  }
  
  fs.writeFileSync( filepath, JSON.stringify( story, null, 2 ) )
  
  console.log( path.relative( TEST_DATA_DIR, filepath ) )
  
  return story
  
}

fs.mkdir( TEST_DATA_DIR, function( error ) {
  
  if( error && error.code !== 'EEXIST' )
    throw error
  
  getDataDirs().map( function( dir ) {
    getStories( dir ).map( processStory.bind( null, dir ) )
  })
  
})
