// Turn a Query String Parameters into an Object
export const convertQueryURLToObject = (queryString) => {
    try {
        return Object.fromEntries(new URLSearchParams(queryString));
        // var search = queryString;
        // return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (err) {
        return {}
    }
}

// Turn an Object into Query String Parameters
export const convertObjToQueryString = (params) => {
    // var str = [];
    // for (var p in obj) {
    //     if (obj[p]) continue;
    //     if (obj.hasOwnProperty(p)) {
    //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //     }
    // }
    // return '?' + str.join("&");
    var queryString = Object.keys(params).map(function (key) {
        if (params[key])
            return key + '=' + params[key]
        return undefined
    }).filter(e => e).join('&');
    return '?' + queryString
}

export const changeQueryURL = (data) => {
    return '?' + new URLSearchParams(data).toString()
}