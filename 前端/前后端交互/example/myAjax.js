

/* 
 * 处理data函数
 * @param {data} 需要发送到服务器的数据
 * @returns {string} 返回拼接好的查询字符串 name=iccyyxx&age=21
*/
function resolveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + "=" + data[k]);
    }
    return arr.join('&')
}
function myAjax(options) {
    var xhr = new XMLHttpRequest();
    var str = resolveData(options.data)

    if (options.method.toUpperCase === 'GET') {
        xhr.open(options.method, options.url + '?' + str)
        xhr.send()
    }
    else if (options.method.toUpperCase === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(str)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}

