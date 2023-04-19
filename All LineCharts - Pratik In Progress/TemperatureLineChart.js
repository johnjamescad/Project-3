function createTemperaturePlot() {
    var trace = {
      x: TemperatureData.map(data => data.YEAR),
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
    
    // Calculate the average temperature value
    var sum = TemperatureData.reduce((acc, cur) => acc + cur.Value, 0);
    var avg = sum / TemperatureData.length;
  
    // Create a trace for the average temperature line
    var avgTrace = {
      x: TemperatureData.map(data => data.YEAR),
      y: Array(TemperatureData.length).fill(avg),
      mode: 'lines',
      name: 'Average Temperature',
      line: {
        color: '#34495e',
        dash: 'dot',
        opacity: 0.25,
      }
    };
  
    var data = [trace, avgTrace];
    
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

  //function showTemperaturePlot() {
   // var seaLevelPlot = document.getElementById('seaLevelPlot');
   // seaLevelPlot.style.display = "none";
   // var temperaturePlot = document.getElementById('temperaturePlot');
   // temperaturePlot.style.display = "block";
   // var precipitationPlot = document.getElementById('PrecipitationPlot');
   // precipitationPlot.style.display = "none";
  //}
  