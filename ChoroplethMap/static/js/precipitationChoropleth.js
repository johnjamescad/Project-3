years = [];
for (var i = 1992; i <= 2022; ++i) {
    years.push(i);
}
function initializeprecipitationChoropleth(error, data) {
    if (error) {
        throw error;
    }

    var frames = [];
    var sliderSteps = [];
    for (var i in years) {
        var dataForCurrentYear = data.filter(item => item.Year == years[i]);
        var countryList = [];
        var precipitationList = [];
        for (var j = 0; j < dataForCurrentYear.length; ++j) {
            countryList.push(dataForCurrentYear[j].Country);
            precipitationList.push(dataForCurrentYear[j].Value);
        }

        frames.push({
            name: years[i],
            data: [{
                type: 'choropleth',
                locationmode: 'country names',
                locations: countryList,
                z: precipitationList,
                text: countryList,
                colorscale: 'Blackbody',
                autocolorscale: false,
                reversescale: true,
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
                    title: 'Precipitation'
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
        width: "800px",
        height: "600px",
        title: 'Precipitation by Country',
        geo: {
            scope: 'world',
            projection: {
                type: 'mercator'
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

    Plotly.newPlot('PrecipitationChoroplethPlot', {
        data: frames[0].data,
        layout: layout,
        frames: frames
    });
}

// Plotly.d3.json("CO2Data.json", initializeChoropleth(error, data));
initializeprecipitationChoropleth(null, precipitationData);
