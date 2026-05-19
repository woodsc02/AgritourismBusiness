(function () {
  const now = new Date();
  const month = now.getMonth() + 1;
  let season = 'offseason';

  if (month >= 4 && month <= 5) {
    season = 'spring';
  } else if (month >= 6 && month <= 8) {
    season = 'summer';
  } else if (month >= 9 && month <= 10) {
    season = 'fall';
  }

  document.body.dataset.season = season;
  window.currentSeason = season;
})();
