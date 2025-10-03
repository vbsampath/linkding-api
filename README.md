# linkding-api

Linkding REST API

This module contains Javascript wrapper classes which simplify the use of the Linkding REST API provided by [Linkding.link](https://linkding.link/api/)

[![NPM](https://nodei.co/npm/linkding-api.png?downloads=true&downloadRank=true)](https://nodei.co/npm/linkding-api/) [![NPM](https://nodei.co/npm-dl/linkding-api.png?months=6&height=1)](https://nodei.co/npm/linkding-api/)

Linkding Info

* [Website](https://linkding.link/)
* [Documentation](https://linkding.link/installation/)
* [REST API](https://linkding.link/api/)
* [Source](https://github.com/sissbruecker/linkding)

## Setup

Get the user token from the Linkding instance

Settings -> Admin -> Token -> Add Token

Get the token for your respective user and make sure you give necessary permissions

## Usage

Initializing Linkding Instance

```javascript
import { Linkding } from "linkding-api"

const serverUrl = "http://linkding.dale"
const token = "94b13a59b9ecf002db1a85XXXXXXXXXXX"
let linkding = new Linkding(serverUrl, token)
```

### Bundle

```javascript
// Bundle
let bundleInstance = linkding.getBundleInstance();

// Get all bundles
let bundles = await bundleInstance.getBundles()
console.log(bundles)

// Create bundle
let bundleDataCreate = {
    "name": `Exten ${Math.random()}`,
    "search": "search terms",
    "any_tags": "tag1 tag2",
    "all_tags": "required-tag",
    "excluded_tags": "excluded-tag",
    "order": 7
}
let createBundle = await bundleInstance.createBundle(bundleDataCreate)
console.log(createBundle)
```

### Bookmark

```javascript
// Get bookmark instance
let bookmarkInstance = linkding.getBookmarkInstance()

// Get bookmark
let bookmark = await bookmarkInstance.getBookmark(182)
console.log(bookmark)

// Get bundles with options
let bookmarkOptions = {
    // q, // Filters results using a search phrase using the same logic as through the UI
    limit: 3, // Limits the max. number of results. Default is 100.
    // offset, // Index from which to start returning results
    // modified_since, // Filter results to only include bookmarks modified after the specified date (format: ISO 8601, e.g. “2025-01-01T00:00:00Z”)
    // added_since, // Filter results to only include bookmarks added after the specified date (format: ISO 8601, e.g. “2025-05-29T00:00:00Z”)
    // bundle, // Filter results by bundle id to only include bookmarks matched by a given bundle
}
let bookmarksWithOptions = await bookmarkInstance.getBookmarks(bookmarkOptions)
console.log(bookmarksWithOptions)

// Create bookmark
let bookmarkDataCreate = {
  "url": "https://example.com",
  "title": `Example title ${Math.random()}`,
  "description": `Example description ${Math.random()}`,
  "notes": "Example notes",
  "is_archived": false,
  "unread": false,
  "shared": false,
  "tag_names": [
    "tag1",
    "tag2"
  ]
}
let bookmarkCreate = await bookmarkInstance.createBookmark(bookmarkDataCreate)
console.log(bookmarkCreate)
```

## Examples

For complete client implementation please follow [linkding-client](https://github.com/vbsampath/linkding-client)

## License

Licensed under [GNU](./LICENSE.md)
