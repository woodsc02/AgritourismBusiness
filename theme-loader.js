(function() {
  var season = localStorage.getItem('hcf_active_season') || 'fall';
  var palette = window.SEASONS && window.SEASONS[season] ? window.SEASONS[season] : window.SEASONS && window.SEASONS.fall;
  if (!palette) {
    return;
  }
  var root = document.documentElement;
  Object.entries(palette.colors).forEach(function(entry) {
    root.style.setProperty(entry[0], entry[1]);
  });
})();
