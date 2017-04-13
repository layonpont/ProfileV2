$(document).ready(function(){

    Chart.pluginService.register({
		afterUpdate: function (chart) {
			if (chart.config.options.elements.center) {
				var helpers = Chart.helpers;
				var centerConfig = chart.config.options.elements.center;
				var globalConfig = Chart.defaults.global;
				var ctx = chart.chart.ctx;

				var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
				var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

				if (centerConfig.fontSize)
					var fontSize = centerConfig.fontSize;
				// figure out the best font size, if one is not specified
				else {
					ctx.save();
					var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
					var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
					var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

					do {
						ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
						var textWidth = ctx.measureText(maxText).width;

						// check if it fits, is within configured limits and that we are not simply toggling back and forth
						if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
							fontSize += 1;
						else {
							// reverse last step
							fontSize -= 1;
							break;
						}
					} while (true)
					ctx.restore();
				}

				// save properties
				chart.center = {
					font: helpers.fontString(fontSize, fontStyle, fontFamily),
					fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
				};
			}
		},
		afterDraw: function (chart) {
			if (chart.center) {
				var centerConfig = chart.config.options.elements.center;
				var ctx = chart.chart.ctx;

				ctx.save();
				ctx.font = chart.center.font;
				ctx.fillStyle = chart.center.fillStyle;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
				var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
				ctx.fillText(centerConfig.text, centerX, centerY);
				ctx.restore();
			}
		},
	})
    
   var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [8, 2],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '8/10',
					fontColor: '#696969	',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart").getContext("2d");
		var myChart = new Chart(ctx, config);

var config1 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [8, 2],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '8/10',
					fontColor: '#696969	',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart1").getContext("2d");
		var myChart = new Chart(ctx, config1);

var config2 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [7, 3],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '7/10',
					fontColor: '#696969',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart2").getContext("2d");
		var myChart = new Chart(ctx, config2);

var config3 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [6, 4],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '6/10',
					fontColor: '#696969',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart3").getContext("2d");
		var myChart = new Chart(ctx, config3);

var config4 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [6, 4],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '6/10',
					fontColor: '#696969',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart4").getContext("2d");
		var myChart = new Chart(ctx, config4);

var config5 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [8, 2],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '8/10',
					fontColor: '#696969	',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart5").getContext("2d");
		var myChart = new Chart(ctx, config5);

var config6 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [10, 0],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '10/10',
					fontColor: '#696969',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart6").getContext("2d");
		var myChart = new Chart(ctx, config6);




		var config7 = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [6, 4],
					backgroundColor: [
					'#ca4444',
                    'black',
					],
                    borderWidth: 0
				}]
			},
		options: {
            tooltips: {enabled: false},
             hover: {mode: null},
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '6/10',
					fontColor: '#696969',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};


		var ctx = document.getElementById("myChart7").getContext("2d");
		var myChart = new Chart(ctx, config7);

//Animated Scrolling
		$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});