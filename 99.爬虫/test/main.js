// const request = require('request')

// request('https://www.google.com/', {
//     timeout: 9999999,
// }, (err, response, body) => {

//     console.log(err)
//     console.log(response.statusCode)
//     console.log(body)

// });

var http = require('http'); // 使用http模块，也可以换成https模块
var opt = {
    host: 'shcu.mebilife.com', // 这里是代理服务器的地址
    port: '21108', // 这里是代理服务器的端口号
    method: 'GET', // 这里是发送的方法
    path: 'https://www.xvideos.com', // 这里是访问的路径
    headers: {
        //请求头(可以利用Google浏览器打开youtube首页，点击network 查看请求头，把相关信息复制过来即可)
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Connection': 'keep-alive',
        'Cookie': 'chat_data_c=%7B%22ct%22%3A%22mdW%5C%2F%2B0ROcL9jcWRHSIRoR6QrMug3%5C%2FtRNuW9xcnN%2BH6yvtI8pTDg%2B0d5ok9uo8uXWo9%5C%2FPgrAOrtRzomulcxilfUXDupXwdQKA%2BlCz%2BS8pCsabDK7BktG0NblK1JFzHexzKN6LTYQsNAsTAcd%5C%2FR5GLLq8kvy37qIhcDnOcxgf7l4KppqWboWU3KCTscTiNyqeRQMF5gLCX786EPbh1mBDWMjJjQ4mBeKq5C5EKJAuZ8lDD4BDoPKUmfdIGSbw51lzPv7hQhgmjdtj76%2BC3HcVmYUwD1nd0pJSFOaTnqlyzpYQIZo0s5YHNIyPouV0eBwKDyKX%2BgqRVm530UvpGE9LqOKNr2cYlKTbP6rtIea%2Be6hqJh2Qs%2BhiviDhr79%5C%2FF7nFhnnULuA%2BirbHUc92PHnOwhtdAb%2BN%2BIWH7%2BpluWiiIpk%5C%2FAT9IWEiDj4cq3K%2Bi0396k6asQ2b6KMQnFYnphQOhBVbzLyKzYrdIIVPDK5SSl3PtlTUUMZfmR%2BtA7uGt%5C%2FAn5q2CJrHVFDIIDirPNueDnGW7%2BsPhDcFQm4weYRgNLLaLPHVg6jJa0BXfhTOyVi2R3KfNO6hpBZY9R8MK%5C%2FgL7pcdWO65pQMVtKJeNoif9Ho2yF1MuQKLTUF3sNpaLuF%5C%2FGtKBltkPsVxXk0%2B58RPJ5nHeHRsFAqMh5%2BvzAuEUrSieOZ2KgGJafdhJG5Dw1p%5C%2FdkVsmo4vTymSDwpCvcmeA3BDvk0J3pHXMuUwrq7zUdVZP1I0hVwA9lWryg9Npt5Ev25vf%2BNVcdCGKH9GLSt5dffeRLpdwsMsKiq69BCrIglCQbIU5CVOkhsS4RXaUY%2BT7IEhIS1hNuakrUL%5C%2FGfBEWuMgDYyxvUYOzbZDud%5C%2FO%5C%2FV6ZhvndZKLHZg6Tgd9qKpgzuH%2B1SOB6azzzch8GEO4GjE5c7yJCkcObQ6jX2ZyhvBsjIppjbFp8I2L97np6zJigmNC9OsEpLG%5C%2FBNcawHX8tLOG6aShymMdi44CMud%5C%2FXpOqc3Y%5C%2FvOQ7SiXiI98FacLZPecGLhYij5hUL4g3YXMFhIUD%2BLTAQgNBVocFejHHM7utt7REK2RLlE%2BmyJFvTmlSNloLDAyycjNALeUlHoexIOs8ih2o8BE9wvKsC3cKz7EVpzFW01YfxaLuOJWuxzMdOJxqBvr%5C%2FNBQbLy29ghDfdOWkNRa3zMits7knkyDcn8gG6cLpwTRe4x%2BkDmbBcUa0uG9fNXZwVOqTSl5h0QpBj3Ele5A4q85ERnYBjQYhPU0Q42wBorE6rMYsgVN1nEAxcBEWV%22%2C%22iv%22%3A%22b6611aca5bce2fa92589372d71259b06%22%2C%22s%22%3A%22a47e2b4e9b523047%22%7D; html5_plfullscreen=0; wpn_ad_cookie=5340bdc3ef444f86aee19e47f759a27a; xv_nbview=-1; zone-cap-3959997=1; html5_pref=%7B%22SQ%22%3Afalse%2C%22MUTE%22%3Atrue%2C%22VOLUME%22%3A1%2C%22FORCENOPICTURE%22%3Afalse%2C%22FORCENOAUTOBUFFER%22%3Afalse%2C%22FORCENATIVEHLS%22%3Afalse%2C%22PLAUTOPLAY%22%3Atrue%2C%22CHROMECAST%22%3Afalse%2C%22EXPANDED%22%3Afalse%2C%22FORCENOLOOP%22%3Afalse%7D; last_views=%5B%2250832299-1611975780%22%2C%2249914411-1611975881%22%2C%2234958651-1611984216%22%2C%2259545373-1611984532%22%2C%2260291807-1611987578%22%2C%2259861625-1611987617%22%2C%2260754311-1612162477%22%2C%2256850173-1612162557%22%2C%2252603125-1612163951%22%2C%2251410335-1612164140%22%2C%2258589251-1612164191%22%2C%2255886651-1612164290%22%2C%2255515303-1612164520%22%2C%2255495951-1612164681%22%2C%2241542369-1612164695%22%2C%2219211865-1612164723%22%2C%2224713273-1612164767%22%2C%2217201581-1612165119%22%2C%2250602653-1612165166%22%2C%2242972481-1612165357%22%2C%2226331685-1612165623%22%2C%2229145541-1612169090%22%2C%22222222-1612169828%22%2C%2260281155-1612414997%22%2C%2237682549-1612415012%22%2C%2252079149-1612415027%22%2C%2237555907-1612415034%22%2C%2244606573-1612415049%22%2C%2244961773-1612415056%22%2C%2248456927-1612415565%22%2C%2245587519-1612418211%22%2C%2236185199-1612418211%22%2C%2244322997-1612419843%22%2C%2237682775-1612420106%22%2C%2234972045-1612420457%22%2C%2236523391-1612420771%22%2C%2257239271-1612420805%22%2C%2256735937-1612421413%22%2C%2260113835-1612421578%22%2C%2260114271-1612421672%22%2C%2256646783-1612421714%22%2C%2256906769-1612422194%22%2C%2256871341-1612422238%22%2C%2256850213-1612422475%22%2C%2256871323-1612422740%22%2C%2251424489-1612423275%22%2C%2248718601-1612423297%22%2C%2249820339-1612431133%22%2C%2252781263-1612442280%22%2C%2247805775-1612442653%22%2C%2247689853-1612444434%22%2C%2248181457-1612445049%22%2C%2246900073-1612445192%22%2C%2246785929-1612445978%22%2C%2229355475-1612446099%22%2C%2258953573-1612446262%22%2C%2254734071-1612446323%22%2C%2255357961-1612446706%22%2C%2254770093-1613351400%22%2C%2234185167-1613351404%22%2C%2227908991-1613351427%22%2C%2227479399-1613351432%22%2C%2226712787-1613351438%22%2C%2218342693-1613352634%22%2C%2222489857-1613352820%22%2C%2235631063-1613352874%22%2C%2239235938-1613353728%22%2C%2226200769-1613361824%22%2C%2261072385-1613362721%22%2C%2251423265-1613362803%22%2C%2213559969-1613363814%22%5D; html5_networkspeed=3067; session_token=79099f7511ebef23n8pF_ebS9K52JH0X-gU7AgOFozOJ9-u5T5a6ShGTHzg70C8jQwAs6gp1wrMxSXNlxWnCq01sfXmtxF26A-P2aX5qMy7VYlRlBktxeywr_x8PejYtDmMrwYecnhdeUhZYUjIN-4BEFEl62hiz6t3_wVwzeIBlSJSSvuVh22DKInWmYTf9eKGy1CQc53s3BbYBd1MWt9xc4McPGo7r19gyMW1TaR8DzWDFcCj9iJNes6N9_dpFKVKdu7cmIE6bdQEGZW2-0jBepyjeKRkBxel7nTC6hdwCqW6g1subuyeaDbT7ooRx6qXyG9ZSRY0GZkkPvPCvDPAxAuoO6oR2IiWtIY8jhpssk0XpwS5_Yhn2XG9v9gvI-F7EAaeCwc8RyZbK9pJiMYdG0K7vUG1eyyeP2qmJFnDQdbAlQTOMnUbQ0buWmHPjj5uWNvgP7PEEA4ULfpZox6EAmC5-jDlZcriFd7kwG9mGP929PrmFPmXVix0%3D',
        'Host': 'www.xvideos.com',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    },
    timeout: 10000
};

var body = '';
var req = http.request(opt, function (res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function (d) {
        body += d;
    }).on('end', function () {
        //console.log(res);
        console.info('============');

        console.log(body)
    });

}).on('error', function (e) {
    console.log("Got error: " + e.message);
})

req.end();