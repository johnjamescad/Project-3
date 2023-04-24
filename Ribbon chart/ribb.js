
    d3.json('data_temp.json').then(data=> {
       console.log(data)
        var trace1 = {x:data[0].decade, y:data[0].temp, z:data[0].freq, name: '1992-2001', type: 'surface'}
        var trace2 = {x:data[1].decade, y:data[1].temp, z:data[1].freq, name: '2002-2011', type: 'surface'}
        var trace3 = {x:data[2].decade, y:data[2].temp, z:data[2].freq, name: '2012-2021', type: 'surface'}
        
        
        var data1= [trace1, trace2, trace3];
        var layout = {showlegend: true, autosize: true, width: 800, height: 600,
      scene: {
      xaxis: {title: 'Decades'},
      yaxis: {title: 'Temperature'},
      zaxis: {title: 'Frequency'}
      }};
      Plotly.newPlot('temp', data1, layout)
    
      var trace11 = {x:data[3].decade, y:data[3].percip, z:data[3].freq, name: '1992-2001', type: 'surface'}
      var trace21 = {x:data[4].decade, y:data[4].percip, z:data[4].freq, name: '2002-2011', type: 'surface'}
      var trace31 = {x:data[5].decade, y:data[5].percip, z:data[5].freq, name: '2012-2021', type: 'surface'}
      var data2= [trace11, trace21, trace31];
      var layout1 = {showlegend: true, autosize: true, width: 800, height: 600,    
        scene: {
    xaxis: {title: 'Decades'},
    yaxis: {title: 'Percipitations'},
    zaxis: {title: 'Frequency'}
    }};
    Plotly.newPlot('perc', data2, layout1)
  
    var trace12 = {x:data[6].decade, y:data[6].co_2, z:data[6].freq, name: '1992-2001', type: 'surface'}
    var trace22 = {x:data[7].decade, y:data[7].co_2, z:data[7].freq, name: '2002-2011', type: 'surface'}
    var trace32 = {x:data[8].decade, y:data[8].co_2, z:data[8].freq, name: '2012-2021', type: 'surface'}
    var data3= [trace12, trace22, trace32];
    var layout2 = {showlegend: true, autosize: true, width: 800, height: 600,
       scene: {
  xaxis: {title: 'Decades'},
  yaxis: {title: 'CO_2'},
  zaxis: {title: 'Frequency'}
  }};
  Plotly.newPlot('co', data3, layout2)
});
  
   
