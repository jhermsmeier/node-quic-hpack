/**
 * Map of header fields specified in RFC 7541
 * @type {Array}
 */
module.exports = [
  { name: ':authority', value: '' }, // 1
  { name: ':method', value: 'GET' }, // 2
  { name: ':method', value: 'POST' }, // 3
  { name: ':path', value: '/' }, // 4
  { name: ':path', value: '/index.html' }, // 5
  { name: ':scheme', value: 'http' }, // 6
  { name: ':scheme', value: 'https' }, // 7
  { name: ':status', value: '200' }, // 8
  { name: ':status', value: '204' }, // 9
  { name: ':status', value: '206' }, // 10
  { name: ':status', value: '304' }, // 11
  { name: ':status', value: '400' }, // 12
  { name: ':status', value: '404' }, // 13
  { name: ':status', value: '500' }, // 14
  { name: 'accept-charset', value: '' }, // 15
  { name: 'accept-encoding', value: 'gzip, deflate' }, // 16
  { name: 'accept-language', value: '' }, // 17
  { name: 'accept-ranges', value: '' }, // 18
  { name: 'accept', value: '' }, // 19
  { name: 'access-control-allow-origin', value: '' }, // 20
  { name: 'age', value: '' }, // 21
  { name: 'allow', value: '' }, // 22
  { name: 'authorization', value: '' }, // 23
  { name: 'cache-control', value: '' }, // 24
  { name: 'content-disposition', value: '' }, // 25
  { name: 'content-encoding', value: '' }, // 26
  { name: 'content-language', value: '' }, // 27
  { name: 'content-length', value: '' }, // 28
  { name: 'content-location', value: '' }, // 29
  { name: 'content-range', value: '' }, // 30
  { name: 'content-type', value: '' }, // 31
  { name: 'cookie', value: '' }, // 32
  { name: 'date', value: '' }, // 33
  { name: 'etag', value: '' }, // 34
  { name: 'expect', value: '' }, // 35
  { name: 'expires', value: '' }, // 36
  { name: 'from', value: '' }, // 37
  { name: 'host', value: '' }, // 38
  { name: 'if-match', value: '' }, // 39
  { name: 'if-modified-since', value: '' }, // 40
  { name: 'if-none-match', value: '' }, // 41
  { name: 'if-range', value: '' }, // 42
  { name: 'if-unmodified-since', value: '' }, // 43
  { name: 'last-modified', value: '' }, // 44
  { name: 'link', value: '' }, // 45
  { name: 'location', value: '' }, // 46
  { name: 'max-forwards', value: '' }, // 47
  { name: 'proxy-authenticate', value: '' }, // 48
  { name: 'proxy-authorization', value: '' }, // 49
  { name: 'range', value: '' }, // 50
  { name: 'referer', value: '' }, // 51
  { name: 'refresh', value: '' }, // 52
  { name: 'retry-after', value: '' }, // 53
  { name: 'server', value: '' }, // 54
  { name: 'set-cookie', value: '' }, // 55
  { name: 'strict-transport-security', value: '' }, // 56
  { name: 'transfer-encoding', value: '' }, // 57
  { name: 'user-agent', value: '' }, // 58
  { name: 'vary', value: '' }, // 59
  { name: 'via', value: '' }, // 60
  { name: 'www-authenticate', value: '' }, // 61
]
