# HPACK Header Compression
[![npm](https://img.shields.io/npm/v/quic-hpack.svg?style=flat-square)](https://npmjs.com/package/quic-hpack)
[![npm downloads](https://img.shields.io/npm/dm/quic-hpack.svg?style=flat-square)](https://npmjs.com/package/quic-hpack)
[![build status](https://img.shields.io/travis/jhermsmeier/node-quic-hpack.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-quic-hpack)

## Install via [npm](https://npmjs.com)

```sh
npm install --save quic-hpack
```

## Usage

```js
var HPACK = require( 'quic-hpack' )
```

## Terminology

- **Header Field:**
A name-value pair.

- **Dynamic Table:**
A table that associates stored header fields with index values.
This table is dynamic and specific to an encoding or decoding context.

- **Static Table:**
A table that statically associates header fields that occur frequently with index values.
This table is ordered, read-only, always accessible,
and it may be shared amongst all encoding or decoding contexts.

- **Header List:**
An ordered collection of header fields that are encoded jointly and can contain duplicate header fields.
A complete list of header fields contained in an HTTP/2 header block is a header list.

- **Header Field Representation:**
A header field can be represented in encoded form either as a literal or as an index.

- **Header Block:**
An ordered list of header field representations, which,
when decoded, yields a complete header list.

## References

- [RFC 7541: HPACK: Header Compression for HTTP/2](https://tools.ietf.org/html/rfc7541)
- [HPACK Test Cases](https://github.com/http2jp/hpack-test-case/)

## Testing

There are two sets of tests:

1. The libs unit tests, run them with `npm test`
2. Interoperability tests, which need to be prepared prior to running them the first time
  - `npm run test:fetch` downloads the [hpack-test-case](https://github.com/http2jp/hpack-test-case) repository
  - `npm run test:generate` generates test data in the `test/interop` directory
  - `npm run test:update` updates the hpack-test-case repository
  - `npm run test:interop` run the interop tests

For details about all available scripts, either run `npm run` or check the `package.json`
