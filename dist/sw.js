importScripts('workbox-sw.prod.v2.1.3.js');

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
    "url": "/73ae641fa8e364ba0567.bundle.js",
    "revision": "ead26f21dea447ecba361ef0fba7b6c3"
  },
  {
    "url": "/index.html",
    "revision": "0552dca45f5457c28fc04fb0ed002065"
  },
  {
    "url": "/styles.css",
    "revision": "fa715b462d13c804023717d028d84e67"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
