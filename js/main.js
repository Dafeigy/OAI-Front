// 初始化ECharts实例
const lineChart = echarts.init(document.getElementById("linechart"));
const powerChart = echarts.init(document.getElementById("power"));
const rsrpChart = echarts.init(document.getElementById("rsrp"));

var data = [];
var option = {};
lineOption = {
    title:{
        text: "Uplink Channel Estimation",
        x:'center',
        y:'top',
        textAlign:'left'
    },
    xAxis: {
        min: 0,
        max: 624,
        type: 'category',
        interval: 24
        // show:false
    },
    yAxis: {
        min: 0,
        max: 400,
        type: 'value',
        // interval: 60
        // show:false
    },
    grid:{
        top: "10%",
        left: '2%',
        right: '2%',
        bottom: '10%',
        containLabel: true
    },
    animation: false,
    series: [
        {
        name: "gNB_TX_1",
        type: 'line',
        data: data,
        symbolSize: 5
        },
        {
        name: "gNB_TX_2",
        type: 'line',
        data: data,
        symbolSize: 5
        }]
};
lineChart.setOption(lineOption)
console.log("Line Chart initialized.")

powerOption = {
    title:{
        text: "Signal Power Variation",
        x:'center',
        y:'top',
        textAlign:'left'
    },
    xAxis: {
        type: 'category',
        // show: false
    },
    yAxis: {
        type: 'value',
        // show: false
    },
    animation:false,
    // animationDuration:10,
    grid:{
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '30%',
        containLabel: true
    },
    series: [
        {
        symbol: "none",
        data: [1.3,5.6,2.4,5.2,3,6.3,2.5,3.2,2,3,6.3,2.5,3,1.3,5.6,2.4,5.,3.2,3],
        type: 'line',
        areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255,0,0)'
              },
              {
                offset: 1,
                color: 'rgb(141,218,213)'
              }
            ])
          },
        smooth: true,
        color:"#777",
        
        },
        
    ]
}

rsrpOption = {
    title:{
        text: "RSRP Variation",
        x:'center',
        y:'top',
        textAlign:'left'
    },
    xAxis: {
        type: 'category',
        // show:false
    },
    yAxis: {
        type: 'value',
        // show: false
    },
    animation:false,
    // animationDuration:10,
    grid:{
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '30%',
        containLabel: true
    },
    series: [
        {
        symbol: "none",
        data: [0,5.6,2.4,3,1.3,5.0,2.4,8.3,0,3,1.3,5.6,2.4,5.0],
        type: 'line',
        areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#FF6347'
              },
              {
                offset: 1,
                color: '#98FB98'
              }
            ])
          },
        smooth: true,
        color:"#777",
        
        },
        
    ]
}
powerChart.setOption(powerOption);
console.log("powerChart initialized.")

rsrpChart.setOption(rsrpOption);
console.log("rsrpChart initialized.")

function getCurrentTime() {
    var now = new Date();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 如果是单个数字，前面补0
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

// 定时器，每秒更新一次div#time的内容
setInterval(function() {
    document.getElementById('homepage-time').innerHTML = getCurrentTime();
}, 1000);