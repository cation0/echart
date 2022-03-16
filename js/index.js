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
		xAxis: [
			{
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
			}
		],
		yAxis: [
			{
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
			}
		],
		series: [
			{
				name: '就业人数',
				type: 'bar',
				barWidth: '35%',
				itemStyle: {
					barBorderRadius: 5,
				},
				data: [200, 300, 650, 900, 1500, 1200, 600]
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
		yAxis: [
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
		series: [
			{
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