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

  var marker2020 = {
    x: [2020],
    y: [CO2EmissionData.find(data => data.Year === 2020).Value],
    mode: 'markers',
    name: '2020 (Pandemic)',
    marker: {
      size: 15,
      color: '#922B21',
      symbol: 'circle-open'
    }
  };

  var data = [trace, marker2020];


  var layout = {
    title: {
      text: 'Global CO2 Emissions',
      font: {
        family: 'Jost',
        size: 24,
        color: '#000000' 

      }
    },
    plot_bgcolor: '#f8f8f8',
    paper_bgcolor: '#f8f8f8',
    showlegend: true,
    xaxis: {
      title: {
        text: 'Year',
        font: {
          family: 'Jost',
          size: 18,
          color: '#000000' 

        }
      }
    },
    yaxis: {
      title: {
        text: 'CO2 Emissions (Million Tonnes)',
        font: {
          family: 'Jost',
          size: 18,
          color: '#000000' 

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
