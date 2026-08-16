/* 텐아르 오프라인 PWA 서비스워커 (v102) — 앱파일을 캐시해 인터넷 없이 동작 */
const CACHE='tenar-offline-v102';
const CORE=['./tonghab.html','./chungchi.html','./graph.html',
 './tonghab.webmanifest','./chungchi.webmanifest','./graph.webmanifest',
 './tonghab-180.png','./chungchi-180.png','./graph-180.png',
 './tonghab-192.png','./chungchi-192.png','./graph-192.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE).catch(()=>{})));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>k!==CACHE?caches.delete(k):null))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(hit=>{
    if(hit)return hit;
    return fetch(e.request).then(resp=>{
      try{var u=new URL(e.request.url);if(resp&&resp.ok&&u.origin===location.origin){var cl=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}}catch(_){}
      return resp;
    }).catch(()=>caches.match(e.request));
  }));
});
