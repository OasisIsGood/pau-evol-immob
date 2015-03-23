window.onload = function () {

	/*$.ajaxPrefilter( 'script', function( options ) {
    		options.crossDomain = true;
	});
 	$.ajax({
		type: "GET",
		url: "http://www.lesclesdumidi.com/csv_graph/64000.csv",
		dataType: "text",
		success: function(data) {
			processData(data);
		},
    		error: function (request, status, error) {
        		alert(request.responseText);
    		}
	});

	function processData(allText) {
		var allLinesArray = allText.split('\n');
		if(allLinesArray.length>0){
			var dataPoints = [];
			for (var i = 1; i <= allLinesArray.length-1; i++) {
				var rowData = allLinesArray[i].split(',');
				dataPoints.push({label:rowData[0],y:parseInt(rowData[1])});
			}
			drawChart(dataPoints);
		}
	}*/

var dataTitles	 	= [];
var dataPointsImmobilier = [];
var dataPointsMaisons 	= [];
var dataPointsAppts 	= [];
var dataPointsTerrains 	= [];

function processData(data) {
	for (var r=0;r<(data.length);r++) {
		for (var c=0;c<(data[r].length);c++) {
			if (r==0) {
				dataTitles.push(data[r][c]);
			}
			else {
				console.log(data[r][c]);
			}
		}
	}
	console.log(dataTitles);
}

function doStuff(data) {
    //Data is usable here
    console.log(data);
	processData(data);
}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("http://www.lesclesdumidi.com/csv_graph/64000.csv", doStuff);

		var dataPointsImmobilier = [
				{ x: new Date(2013, 12), y: 2116  },
				{ x: new Date(2014, 01), y: 2087  },
				{ x: new Date(2014, 01), y: 2087  },
				{ x: new Date(2014, 03), y: 2065  },
				{ x: new Date(2014, 04), y: 2043  },
				{ x: new Date(2014, 05), y: 2077  },
				{ x: new Date(2014, 06), y: 2043  },
				{ x: new Date(2014, 07), y: 2112  },
				{ x: new Date(2014, 08), y: 2051  },
				{ x: new Date(2014, 09), y: 2045  },
				{ x: new Date(2014, 10), y: 2109  },
				{ x: new Date(2014, 11), y: 2043  },
				{ x: new Date(2014, 12), y: 2083  },
				{ x: new Date(2015, 01), y: 2067  }
				];
		var dataPointsMaisons = [
				{ x: new Date(2013, 12), y: 2211  },
				{ x: new Date(2014, 01), y: 2135  },
				{ x: new Date(2014, 02), y: 2139  },
				{ x: new Date(2014, 03), y: 2128  },
				{ x: new Date(2014, 04), y: 2111  },
				{ x: new Date(2014, 05), y: 2127  },
				{ x: new Date(2014, 06), y: 2038  },
				{ x: new Date(2014, 07), y: 2192  },
				{ x: new Date(2014, 08), y: 2105  },
				{ x: new Date(2014, 09), y: 2129  },
				{ x: new Date(2014, 10), y: 2226  },
				{ x: new Date(2014, 11), y: 2177  },
				{ x: new Date(2014, 12), y: 2190  },
				{ x: new Date(2015, 01), y: 2121  }
				];
		var dataPointsAppts = [
				{ x: new Date(2013, 12), y: 2021  },
				{ x: new Date(2014, 01), y: 2008  },
				{ x: new Date(2014, 02), y: 2036  },
				{ x: new Date(2014, 03), y: 2003  },
				{ x: new Date(2014, 04), y: 1976  },
				{ x: new Date(2014, 05), y: 2028  },
				{ x: new Date(2014, 06), y: 2049  },
				{ x: new Date(2014, 07), y: 2032  },
				{ x: new Date(2014, 08), y: 1997  },
				{ x: new Date(2014, 09), y: 1961  },
				{ x: new Date(2014, 10), y: 1992  },
				{ x: new Date(2014, 11), y: 1990  },
				{ x: new Date(2014, 12), y: 1976  },
				{ x: new Date(2015, 01), y: 2014  }
				];
		var dataPointsTerrains = [
				{ x: new Date(2013, 12), y: 075  },
				{ x: new Date(2014, 01), y: 246  },
				{ x: new Date(2014, 02), y: 367  },
				{ x: new Date(2014, 03), y: 131  },
				{ x: new Date(2014, 04), y: 222  },
				{ x: new Date(2014, 05), y: 105  },
				{ x: new Date(2014, 06), y: 275  },
				{ x: new Date(2014, 07), y: 138  },
				{ x: new Date(2014, 08), y: 202  },
				{ x: new Date(2014, 09), y: 233  },
				{ x: new Date(2014, 10), y: 104  },
				{ x: new Date(2014, 11), y: 099  },
				{ x: new Date(2014, 12), y: 100  },
				{ x: new Date(2015, 01), y: 113  }
				];

		var chart = new CanvasJS.Chart("chartContainer",
		{
			zoomEnabled: false,
                        animationEnabled: true,
			title:{
				text: "PAU - évolution du prix de l'immobilier / maisons / appartements"
			},
			axisY2:{
				valueFormatString:"0 €",
				
				maximum: 2250,
				minimum: 1900,
				interval: 50,
				interlacedColor: "#F5F5F5",
				gridColor: "#D7D7D7",      
	 			tickColor: "#D7D7D7"								
			},
                        theme: "theme2",
                        toolTip:{
                                shared: true
                        },
			legend:{
				verticalAlign: "bottom",
				horizontalAlign: "center",
				fontSize: 15,
				fontFamily: "Lucida Sans Unicode"

			},
			data: [
			{        
				type: "line",
				lineThickness:3,
				axisYType:"secondary",
				showInLegend: true,           
				name: dataTitles[1], 
				dataPoints: dataPointsImmobilier
			},
			{        
				type: "line",
				lineThickness:3,
				showInLegend: true,           
				name: "€/m² maisons",
				axisYType:"secondary",
				dataPoints: dataPointsMaisons
			},
			{        
				type: "line",
				lineThickness:3,
				showInLegend: true,           
				name: "€/m² appartements",        
				axisYType:"secondary",
				dataPoints: dataPointsAppts
			}
			],
          legend: {
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
        });

	chart.render();

	chart = new CanvasJS.Chart("chartContainer2",
		{
			zoomEnabled: false,
                        animationEnabled: true,
			title:{
				text: "PAU - évolution du prix des terrains"
			},
			axisY2:{
				valueFormatString:"0 €",
				
				maximum: 375,
				minimum: 50,
				interval: 50,
				interlacedColor: "#F5F5F5",
				gridColor: "#D7D7D7",      
	 			tickColor: "#D7D7D7"								
			},
                        theme: "theme2",
                        toolTip:{
                                shared: true
                        },
			legend:{
				verticalAlign: "bottom",
				horizontalAlign: "center",
				fontSize: 15,
				fontFamily: "Lucida Sans Unicode"
			},
			data: [
			{        
				type: "line",
				lineThickness:3,
				axisYType:"secondary",
				showInLegend: true,           
				name: "€/m² terrains", 
				dataPoints: dataPointsTerrains
			}
			],
          legend: {
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
        });

	chart.render();
}
