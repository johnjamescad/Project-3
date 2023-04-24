
let years = [];
for (var i = 1991; i <= 2021; ++i) {
    years.push(i);
}

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

function initializeChoropleth(error, data) {
    if (error) {
        throw error;
    }

    var frames = [];
    var sliderSteps = [];
    for (var i in years) {
        var dataForCurrentYear = data.filter(item => item.Reading_date == years[i]);
        var countryList = [];
        var emissionList = [];
        for (var j = 0; j < dataForCurrentYear.length; ++j) {
            countryList.push(dataForCurrentYear[j].Country);
            emissionList.push(dataForCurrentYear[j].CO2_emission);
        }

        frames.push({
            name: years[i],
            data: [{
                type: 'choropleth',
                locationmode: 'country names',
                locations: countryList,
                z: emissionList,
                text: countryList,
                colorscale:'Earth',
                autocolorscale: false,
                reversescale: false,
                marker: {
                    line: {
                        color: 'rgb(180,180,180)',
                        width: 0.5
                    }
                },
                tick0: 0,
                zmin: 0,
                dtick: 100,
                colorbar: {
                    autotic: false,
                    tickprefix: '',
                    title: 'CO2 Emissions<br>Metric Tons'
                }
            }]
        });

        sliderSteps.push({
            method: 'animate',
            label: years[i],
            args: [[years[i]], {
                mode: 'immediate',
                frame: {duration: 500},
                transition: {duration: 0}
            }]
        });
    }

    var layout = {
        width: "1000",
        height: "800",
        title: 'CO2 Emissions by Country',
        geo: {
            scope: 'world',
            projection: {
                type: 'robinson'
            },
            showlakes: true,
            lakecolor: 'rgb(255, 255, 255)',
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            showcountries: true,
            countrycolor: 'rgb(255, 255, 255)'
        },
       
        sliders: [{
            active: 0,
            pad: {t: 0},
            steps: sliderSteps
        }]
    };

    Plotly.newPlot('CO2ChoroplethPlot', {
        data: frames[0].data,
        layout: layout,
        frames: frames
    });
}

// Plotly.d3.json("CO2Data.json", initializeChoropleth(error, data));
initializeChoropleth(null, CO2Data);
