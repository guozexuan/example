/**
 * ajax实例
 * Created by sun yi on 2015/9/24.
 */

var ryan = (function() {
    var O = function() {},
        fn = O.prototype;

    fn.getXHR = function() {
        var xhr;
        try {
            xhr = new XMLHttpRequest();
        } catch(e) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch(e) {
                    xhr = false;
                    throw new Error('您的浏览器不支持 XHR 对象！');
                }
            }
        }
        return xhr;
    };

    fn.params = function(data) {
        var arr = [];
        for(var e in data) {
            var subData = encodeURIComponent(e) + '=' + encodeURIComponent(data[e]);
            arr.push(subData);
        }
        return arr.join('&');
    };

    fn.isEmpty = function(s) {
        return /^[\s\r\t\n]*$/.test(s);
    };

    fn.initOptions = function(obj) {
        var init = {},
            rand = 'rand=' + Math.random();
        init.url = obj.url;
        init.type = obj.type || 'get';
        init.data = obj.data || '';
        init.dataType = obj.dataType || 'json';
        init.async = obj.async || true;
        init.success = obj.success || function() {};
        init.error = obj.error || function() {};
        init.data = this.params(init.data);
        if( 'get' === init.type.toLowerCase() ) {
            if( this.isEmpty(init.data) ) {
                init.url = ( init.url.indexOf('?') === -1 ) ? ( init.url + '?' + rand ) : (init.url + '&' + rand);
            } else {
                init.url = ( init.url.indexOf('?') === -1 ) ? (init.url + '?' + init.data  + '&' + rand) : ( init.url + '&' + init.data  + '&' + rand);
            }
        }
        return init;
    };

    fn.ajax = function(options) {
        options = this.initOptions(options);
        var xhr = this.getXHR(),
            callback = function() {
                if( 200 === xhr.status) {
                    var res;
                    if( options.dataType === 'json' ) {
                        try {
                            if( JSON && JSON.parse ) {
                                res = JSON.parse( xhr.responseText );
                            } else {
                                res = eval('(' + xhr.responseText + ')');
                            }
                        } catch(e) {
                            res = xhr.responseText;
                        }
                    } else {
                        res = xhr.responseText;
                    }
                    options.success( res );
                } else {
                    options.error();
                }
            };

        if( options.async === true ) {
            xhr.onreadystatechange = function() {
                if( 4 === xhr.readyState) {
                    callback();
                }
            };
        }
        xhr.open(options.type, options.url, options.async);
        if( 'post' === options.type.toLowerCase() ) {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(options.data);
        } else {
            xhr.send(null);
        }
        if( false === options.async) {
            callback();
        }
    };

    //window.ryan = new O();
    return new O();
})(window);

module.exports = ryan;
