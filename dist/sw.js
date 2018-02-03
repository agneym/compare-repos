importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/f6db727bf47338dc2cf9.bundle.js",
    "revision": "8b10789a73d1fd5fc7881705b3e1deaf"
  },
  {
    "url": "/index.html",
    "revision": "8e65078b720e5e03abcb0074b802a83a"
  },
  {
    "url": "/styles.css",
    "revision": "c5a5dcfbb149188fc542195ba5461173"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
