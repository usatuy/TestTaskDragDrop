const domain = 'https://testing-cards.herokuapp.com/';
export default function getRequest(method, url, data, loadFn){
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var req = new XHR();
    if (!req){
        console.log('dont xhr');
    }
    url = domain + url;
    // Open method
    req.open(method, url, true);
    req.timeout = 15*1000;
    // Load method
    req.onload = function(){
        loadFn(JSON.parse(req.responseText), req.status);
    };
    req.ontimeout = function(){
        console.log('timeout request');
    };
    req.onerror = function(err){
        console.log(err);
    };
    // Ready state change
    req.onreadystatechange = function(){
        if (req.readyState != 4) return;
        if (req.status == 501){
            console.log('error server');
        }
    };
    req.setRequestHeader('Content-Type','application/json');
    if (method == 'POST'||method == 'PATCH'){
        data = JSON.stringify(data);
    }

    req.send(data);
}