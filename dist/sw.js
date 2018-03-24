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
    "url": "cd4ccd57d05b2c92a998.bundle.js",
    "revision": "917cfaea3c54010ca94bc5393e469801"
  },
  {
    "url": "google065258b64befa39f.html",
    "revision": "7b108c0f4c44d0d07879c25e2a977087"
  },
  {
    "url": "index.html",
    "revision": "0914dfe5d8b294a3d28e5fcbfebd769b"
  },
  {
    "url": "styles.css",
    "revision": "fa715b462d13c804023717d028d84e67"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
