function createTemperaturePlot() {
    var trace = {
      x: TemperatureData.map(data => data.Year),
      y: TemperatureData.map(data => data.Value),
      mode: 'lines+markers',
      name: 'Temperature',
      line: {
        color: '#f5b041'
      },
      marker: {
        size: 10,
        color: '#ec7063'
      }
    };
  
    var data = [trace];
  
    var layout = {
      title: {
        text: 'Global Temperature',
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
          text: 'Temperature (°C)',
          font: {
            family: 'Jost',
            size: 18
          }
        }
      }
    };
    
    var temperaturePlot = document.getElementById('temperaturePlot');
    Plotly.newPlot(temperaturePlot, data, layout);
    var graphDiv = getGraphDiv();
  
    Plotly.newPlot(graphDiv, data, layout);
  }
  
  createTemperaturePlot();
  