(function() {
  function applyPalette(season) {
    var palette = window.SEASONS && window.SEASONS[season] ? window.SEASONS[season] : window.SEASONS && window.SEASONS.fall;
    if (!palette) {
      return;
    }
    var root = document.documentElement;
    Object.entries(palette.colors).forEach(function(entry) {
      root.style.setProperty(entry[0], entry[1]);
    });
  }

  function fetchSeasonFile() {
    var url = 'season.json?t=' + Date.now();
    fetch(url, { cache: 'no-store' })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Could not load season.json');
        }
        return response.json();
      })
      .then(function(data) {
        var season = data && data.active ? data.active : 'fall';
        applyPalette(season);
      })
      .catch(function() {
        applyPalette('fall');
      });
  }

  fetchSeasonFile();
})();
