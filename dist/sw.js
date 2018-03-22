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
    "url": "/f43f4a46b07afbe86d05.bundle.js",
    "revision": "23cd70ac5201b549d4a21f5aa1127579"
  },
  {
    "url": "/index.html",
    "revision": "192e32c60db44e5b414d54372ca0b1cf"
  },
  {
    "url": "/styles.css",
    "revision": "fa715b462d13c804023717d028d84e67"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
