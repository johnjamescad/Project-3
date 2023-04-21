var seaLevelBtn = document.getElementById('seaLevelBtn');
seaLevelBtn.addEventListener('click', function() {
  var seaLevelPlot = document.getElementById('seaLevelPlot');
  seaLevelPlot.style.display = 'block';
  var temperaturePlot = document.getElementById('temperaturePlot');
  temperaturePlot.style.display = 'none';
  var precipitationPlot = document.getElementById('precipitationPlot');
  precipitationPlot.style.display = 'none';
  var co2EmissionPlot = document.getElementById('co2EmissionPlot');
  co2EmissionPlot.style.display = 'none';
});
