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
  

 