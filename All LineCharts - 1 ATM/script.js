function getGraphDiv() {
  var graphDiv = document.getElementById('myPlot');
  return graphDiv;
}

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
        text: 'Sea Level (inches)',
        font: {
          family: 'Jost',
          size: 18
        }
      }
    }
  };
  
  

  var graphDiv = getGraphDiv();

  Plotly.newPlot(graphDiv, data, layout);
}

createPlot();

