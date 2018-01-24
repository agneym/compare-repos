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
    "url": "/02d2d6fa04b9047ae43a.bundle.js",
    "revision": "33a2c78f1ae11b70dee6105a4c686f48"
  },
  {
    "url": "/index.html",
    "revision": "5e169157cc8991814949d124d4d44244"
  },
  {
    "url": "/styles.css",
    "revision": "421f551a2282ee0d7cc2bec16dd87cfc"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
