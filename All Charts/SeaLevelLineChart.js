function createPlot() {
  var trace = {
    x: seaLevelData.map(data => data.Year),
    y: seaLevelData.map(data => data['NOAA - Adjusted sea level (inches)']),
    mode: 'lines+markers',
    name: 'Sea Level Rise',
    line: {
      color: '#b8e0d2'
    },
    marker: {
      size: 10,
      color: '#809bce'
    }
  };

  var data = [trace];

  var layout = {
    title: {
      text: 'Global Mean Sea Level',
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
        text: 'Sea Level (inches)',
        font: {
          family: 'Jost',
          size: 18,
          color: '#000000'
        }
      }
    },
   
    
  };
  
  var seaLevelPlot = document.getElementById('SeaLevelPlot');
  Plotly.newPlot(seaLevelPlot, data, layout);
}

createPlot();
