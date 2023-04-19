function createPrecipitationPlot() {
    var trace = {
      x: Precipitation.map(data => data.YEAR),
      y: Precipitation.map(data => data.Value),
      mode: 'lines+markers',
      name: 'Precipitation',
      line: {
        color: '#58D68D'
      },
      marker: {
        size: 10,
        color: '#1E8449'
      }
    };
  
    var data = [trace];
  
    var layout = {
      title: {
        text: 'Global Precipitation',
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
          text: 'Precipitation (mm)',
          font: {
            family: 'Jost',
            size: 18
          }
        }
      }
    };
  
    var precipitationPlot = document.getElementById('PrecipitationPlot');
    Plotly.newPlot(precipitationPlot, data, layout);
    var graphDiv = getGraphDiv();
  
    Plotly.newPlot(graphDiv, data, layout);
  }
  
  createPrecipitationPlot();
  

  //function showPrecipitationPlot() {
   // var seaLevelPlot = document.getElementById('seaLevelPlot');
    //seaLevelPlot.style.display = "none";
   // var temperaturePlot = document.getElementById('temperaturePlot');
   // temperaturePlot.style.display = "none";
   // var precipitationPlot = document.getElementById('PrecipitationPlot');
  //  precipitationPlot.style.display = "block";
 // }