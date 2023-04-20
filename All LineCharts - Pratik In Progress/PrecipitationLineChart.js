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
        showlegend: true,
        text: 'Global Precipitation',
        font: {
          family: 'Jost',
          size: 24,
          color: '#000000' 

        }
      },
      plot_bgcolor: '#F1F6FF',
      paper_bgcolor: '#F1F6FF',
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
          text: 'Precipitation (mm)',
          font: {
            family: 'Jost',
            size: 18,
            color: '#000000' 

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