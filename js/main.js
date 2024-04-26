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