dec1 = [];
dec2 = [];
dec3 = [];
var sum=0;

for (let i = 0; i < CO2EmissionData.length; i++) {
  // Variable to hold current movie in loop
  let val = CO2EmissionData[i].Value
  sum += val;
   if (CO2EmissionData[i].Year >= 1992 && CO2EmissionData[i].Year < 2002){dec1.push(val)} 
    else if (CO2EmissionData[i].Year >= 2002 && CO2EmissionData[i].Year < 2012) {dec2.push(val)} 
    else if (CO2EmissionData[i].Year >= 2012 && CO2EmissionData[i].Year < 2022) {dec3.push(val)}}
 //console.log(dec3);
 var avg = sum / CO2Data.length;
     var trace1 = {y: dec1, name: '1992-2001', type: 'box', boxmean: true,};
     var trace2 = {y: dec2, name: '2002-2011', type: 'box', boxmean: true,};
     var trace3 = {y: dec3, name: '2012-2021', type: 'box', boxmean: true,};
     //var trace_av = {y: Array(TemperatureData.length).fill(avg),
       // mode: 'lines',
        //name: 'Average Temperature',
        //line: {
          //color: '#34495e',
          //dash: 'dot',
          //opacity: 0.25}, type: 'line'
      //};

// Create a trace for the average temperature line

//var temperaturePlot = document.getElementById('temperaturePlot');
//Plotly.newPlot(temperaturePlot, data, layout);
//var graphDiv = getGraphDiv();

//Plotly.newPlot(graphDiv, data, layout);   

var data = [trace1, trace2, trace3];

var layout = {
    title: {
      text: 'Carbon Dioxide over decades',
      font: {
        family: 'Jost',
        size: 24,
        color: '#000000' 

      }
    },
    plot_bgcolor: '#f8f8f8',
    paper_bgcolor: '#f8f8f8',
    showlegend: true,
    boxmean: true,
    
    yaxis: {
      title: {
        text: 'Carbon Dioxide (Million Tonnes)',
        font: {
          family: 'Jost',
          size: 18,
          color: '#000000' 

        }
      }
    }
};
//Plotly.newPlot(temperaturePlot, [trace_av]);
Plotly.newPlot("CO2Box", data, layout);