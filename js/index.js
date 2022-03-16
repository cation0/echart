// 		柱状图模块1
(function() {
	// 1、初始化echarts实例对象
	let myChart = echarts.init(document.querySelector('.bar .chart'));

	// 2、指定配置项和数据
	let option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		color: ['#2f89cf'],
		grid: {
			left: '0%',
			top: '10px',
			right: '5%',
			bottom: '4%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
			axisTick: {
				show: false,
				// alignWithLabel: true
			},
			//  修改刻度相关样式
			axisLabel: {
				color: 'rgba(255, 255, 255, 0.6)',
				fontSize: "10"
			},
			// 	不显示 x 坐标轴样式
			axisLine: {
				show: false
			}
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				color: 'rgba(255, 255, 255, 0.6)',
				fontSize: '12'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.1)',
					width: 2
				}
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.1)'
				}
			}
		}],
		series: [{
			name: '就业人数',
			type: 'bar',
			barWidth: '35%',
			itemStyle: {
				barBorderRadius: 5,
			},
			data: [200, 300, 650, 900, 1500, 1200, 600]
		}]
	};

	// 3、把配置项给实例对象
	myChart.setOption(option);

	// 4、图表跟随屏幕自动适应
	window.addEventListener('resize', function() {
		myChart.resize();
	})
})();

// 		柱状图模块2
(function() {
	// 1、初始化echarts实例对象
	let myChart = echarts.init(document.querySelector('.bar1 .chart'));

	// 声明颜色数组
	let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

	// 2、指定配置项和数据
	let option = {
		grid: {
			top: '10%',
			left: '22%',
			bottom: '10%'
		},
		xAxis: {
			show: false
		},
		yAxis: [{
				type: 'category',
				inverse: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#ffffff'
				},
				data: ['HTML5', 'CSS3', 'JavaScript', 'VUE', 'NODE']
			},
			{
				type: 'category',
				inverse: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#ffffff',
					fontSoze: 12
				},
				data: [702, 350, 610, 793, 664]
			}
		],
		series: [{
				name: '掌握人数',
				type: 'bar',
				barCategoryGap: 50,
				barWidth: 10,
				yAxisIndex: 0,
				itemStyle: {
					barBorderRadius: 20,
					color: function(params) {
						return myColor[params.dataIndex]
						// console.log(params);
					}
				},
				label: {
					show: true,
					color: '#ffffff',
					offset: [0, 1],
					position: 'inside',
					formatter: '{c}%'
				},
				data: [70, 34, 60, 78, 69]
			},
			{
				name: '掌握人数',
				type: 'bar',
				barCategoryGap: 50,
				barWidth: 15,
				yAxisIndex: 1,
				itemStyle: {
					color: 'none',
					borderColor: '#00c1de',
					borderWidth: 2,
					barBorderRadius: 20
				},
				data: [100, 100, 100, 100, 100]
			}
		]
	};

	// 3、把配置项给实例对象
	myChart.setOption(option);

	// 4、图表跟随屏幕自动适应
	window.addEventListener('resize', function() {
		myChart.resize();
	})
})();

(function() {
	// 1、初始化echarts实例对象
	let myChart = echarts.init(document.querySelector('.line .chart'));

	// 后台获取的 2021 和 2022 两组数据
	let yearData = [
		{
			year: '2021',
			data: [
				[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
			year: '2022',
			data: [
				[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
				[143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
			]
		}
	];
	
	// 2、指定配置项和数据
	let option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['新增粉丝', '新增游客'],
			right: 0,
			textStyle: {
				color: '#4c9bfd'
			},
			right: '3%'
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			show: true,
			borderColor: '#012f4a',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#4c9bfd',
				fontSize: 12
			},
			axisLine: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#4c9bfd'
			},
			axisLine: {
				show: false
			},
			splitLine: {
				lineStyle: {
					color: '#012f4a'
				}
			}
		},
		color: ['#00f2f1', '#ed3f35'],
		series: [
			{
				name: '新增粉丝',
				type: 'line',
				smooth: true,
				data: yearData[0].data[0]
			},
			{
				name: '新增游客',
				type: 'line',
				smooth: true,
				data: yearData[0].data[1]
			}
		]
	}

	// 3、把配置项给实例对象
	myChart.setOption(option);

	// 4、图表跟随屏幕自动适应
	window.addEventListener('resize', function() {
		myChart.resize();
	})
	
	// 5、点击切换效果
	$('.line h2').on('click', 'a', function() {
		let obj = yearData[$(this).index()];
		option.series[0].data = obj.data[0];
		option.series[1].data = obj.data[1];
		
		myChart.setOption(option);
	})
})();
