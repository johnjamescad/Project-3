function createCO2EmissionPlot() {
  var trace = {
    x: CO2EmissionData.map(data => data.Year),
    y: CO2EmissionData.map(data => data.Value),
    mode: 'lines+markers',
    name: 'CO2 Emissions',
    line: {
      color: '#F1948A'
    },
    marker: {
      size: 10,
      color: '#922B21'
    }
  };

  var data = [trace];

  var layout = {
    title: {
      text: 'Global CO2 Emissions',
      font: {
        family: 'Jost',
        size: 24
      }
    },
    xaxis: {
      title: {
        text: 'Year',
        font: {
          family: 'Jost',
          size: 18
        }
      }
    },
    yaxis: {
      title: {
        text: 'CO2 Emissions (Million Tonnes)',
        font: {
          family: 'Jost',
          size: 18
        }
      }
    }
  };

  var CO2EmissionPlot = document.getElementById('CO2EmissionPlot');
  Plotly.newPlot(CO2EmissionPlot, data, layout);
  var graphDiv = getGraphDiv();

  Plotly.newPlot(graphDiv, data, layout);
}

createCO2EmissionPlot();
