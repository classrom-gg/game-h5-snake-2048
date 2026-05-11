
(function() {
  var _gp = {
    _ready: false, _listeners: {},
    init: function(cfg, cb) { this._ready = true; cb && cb(null); },
    on: function(ev, cb) { (this._listeners[ev] = this._listeners[ev] || []).push(cb); },
    off: function(ev, cb) { if (!this._listeners[ev]) return; this._listeners[ev] = this._listeners[ev].filter(f => f !== cb); },
    _emit: function(ev, d) { (this._listeners[ev] || []).forEach(function(f) { f(d); }); },
    player: {
      getId: function() { return 'offline_player'; }, getName: function() { return 'Player'; },
      getScore: function() { return 0; }, setScore: function() {}, addScore: function() {},
      isLoggedIn: function() { return false; }, isStub: function() { return true; },
      sync: function() { return Promise.resolve(); }, fetch: function() { return Promise.resolve(); },
      hasCredentials: function() { return false; },
    },
    payments: {
      has: function() { return false; },
      fetchProducts: function() { return Promise.resolve({ products: [], playerPurchases: [] }); },
      purchase: function() { return Promise.resolve({ success: false }); },
      consume: function() { return Promise.resolve({ success: false }); },
      isAvailable: function() { return false; }, isSubscriptionsAvailable: function() { return false; },
    },
    ads: {
      showFullscreen: function() { return Promise.resolve(); }, showRewarded: function() { return Promise.resolve(); },
      closeFullscreen: function() {}, closeSticky: function() {}, showSticky: function() {}, showPreloader: function() {},
      isFullscreenAvailable: function() { return false; }, isRewardedAvailable: function() { return false; }, isStickyAvailable: function() { return false; },
    },
    leaderboard: { fetch: function() { return Promise.resolve({ players: [] }); }, open: function() { return Promise.resolve(); }, fetchPlayerRating: function() { return Promise.resolve({ player: { position: 0 } }); } },
    achievements: { fetch: function() { return Promise.resolve({ achievements: [] }); }, unlock: function() { return Promise.resolve({ success: false }); }, setProgress: function() { return Promise.resolve({ success: false }); } },
    gamesCollections: { open: function() {}, fetch: function() { return Promise.resolve([]); } },
    fullscreen: { open: function() {}, close: function() {}, toggle: function() {} },
    socials: { share: function() { return Promise.resolve(); }, post: function() { return Promise.resolve(); } },
    channels: { openChat: function() {}, sendMessage: function() {} },
    documents: { open: function() {}, fetch: function() {} },
    files: { upload: function() { return Promise.resolve(); }, uploadUrl: function() { return Promise.resolve(); }, loadContent: function() { return Promise.resolve(); } },
    variables: { fetch: function() { return Promise.resolve({}); }, get: function() { return null; } },
    experiments: { has: function() { return false; } },
    players: { fetch: function() { return Promise.resolve({ players: [] }); } },
    isReady: function() { return this._ready; }, isDev: function() { return true; },
    Platform: function() { return 'unknown'; },
    Game: { start: function() {}, pause: function() {}, resume: function() {} },
    trigger: function(name) { this._emit(name, null); },
  };
  _gp.init({ projectId: 'stub', publicToken: 'stub' }, function() {});
  window.PlayGamaBridge = _gp;
  if (typeof window.onPlayGamaBridgeInit === 'function') { window.onPlayGamaBridgeInit(_gp); }
})();
