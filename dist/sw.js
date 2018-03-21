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
    "url": "d374150aa8e68ac69a59.bundle.js",
    "revision": "4887241958d60e18eec73d3860615b88"
  },
  {
    "url": "index.html",
    "revision": "8fbf8f02be156066d09cb12678de4ffd"
  },
  {
    "url": "styles.css",
    "revision": "fa715b462d13c804023717d028d84e67"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
