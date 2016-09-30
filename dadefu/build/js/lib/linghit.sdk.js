/**
 * Created by Administrator on 2016/8/8.
 */

;(function () {
    window.mmc = (function () {
        var mmc = {
            v: '1.0.0-dev', json: {
                encode: function (data) {
                    if ("" == data) {
                        return {};
                    }
                    return JSON.stringify(data).replace(/"/g, '\'');
                }, decode: function (data) {
                    if ("" == data) {
                        return "{}";
                    }
                    return JSON.parse(data.replace(/\'/ig, '\"'));
                }
            }, debug: false, user: {
                info: {}, getInfo: function () {
                    return this.info;
                }, getId: function () {
                    return this.getInfo().userid;
                }, getUsername: function () {
                    return this.getInfo().username;
                }, getNickname: function () {
                    return this.getInfo().nickname;
                }, getCountry: function () {
                    return this.getInfo().country;
                }, getEmail: function () {
                    return this.getInfo().email;
                }, getAvatar: function () {
                    return this.getInfo().avatar;
                }, isMarry: function () {
                    return true == this.getInfo().marriagestatus;
                }, getPhone: function () {
                    return this.getInfo().mobilephone;
                }, getScore: function () {
                    return this.getInfo().score;
                }, isMan: function () {
                    return 1 == this.getInfo().sex;
                }, getGender: function () {
                    return this.getInfo().sex;
                }, getWork: function () {
                    return this.getInfo().workstatus;
                }, getBirthday: function () {
                    return this.getInfo().birthday;
                }, login: function (callback) {
                    if (mmc.client.isAndroid()) {
                        return window.lingjiWebApp.MMCLogin(null == callback ? "" : callback);
                    }
                    return MMCLogin(callback);
                }, register: function (callback) {
                    if (mmc.client.isAndroid()) {
                        return window.lingjiWebApp.MMCRegist(null == callback ? "" : callback);
                    }
                    return MMCRegist(callback);
                }, isLogin: function () {
                    return typeof this.getInfo().userid != 'undefined';
                }
            }, client: {
                info: {}, ua: window.navigator.userAgent.toLowerCase(), is: function (name) {
                    return (new RegExp(name)).test(this.ua);
                }, isIOS: function () {
                    if (this.ua.match(/android/i) == "android") {
                        return false;
                    }
                    return true;
                }, isAndroid: function () {
                    if (this.ua.match(/android/i) == "android") {
                        return true;
                    }
                    return false;
                }, getInfo: function () {
                    return this.info;
                }, getLanguage: function () {
                    return this.getInfo().language;
                }, getCountry: function () {
                    return this.getInfo().area;
                }, getName: function () {
                    return client.info.module;
                }, getAppId: function () {
                    return this.getInfo().pluginid;
                }, getUDID: function () {
                    return this.getInfo().udid;
                }, getDeviceId: function () {
                    return this.getInfo().deviceid;
                }, getSystemVersion: function () {
                    return this.getInfo().systemversion;
                }, getPlatform: function () {
                    return this.getInfo().platform;
                }, notify: function (params, callback) {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCLocalNotification(mmc.json.encode(params), null == callback ? "" : callback);
                    }
                    return MMCLocalNotification(params, null == callback ? "" : callback);
                }, goto: function (controller, params, type, callback) {
                    var data = {"controller": controller, "gotoType": type ? type : 0, "gotoParams": params};
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCGoto(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                    return MMCGoto(data, callback);
                }, share: function (config, callback) {
                    var data = {
                        "thumb": config.icon,
                        "title": config.title,
                        "description": config.desc,
                        "shareLink": config.link
                    };
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCShare(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                    return MMCShare(data, callback);
                }, comment: function () {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCComment();
                    }
                    return MMCComment();
                }, getTenYearsGift: function () {
                    lingjiWebApp.MMCGetTenYearsGift();
                }, daily: function (data) {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCDailySign(mmc.json.encode(data));
                    }
                    return MMCDailySign(data);
                }, openWindow: function (title, url, callback) {
                    var data = {gotourl: url, title: title};
                    MMCOpenWindow(data, callback);
                }
            }, alertDebug: function (data) {
                if (this.debug == true) {
                    alert(data.join(' # '));
                }
            }, ready_callback: function () {
            }
        };
        mmc.init = function () {
            if (this.client.isAndroid()) {
                this.user.info = this.json.decode(lingjiWebApp.getUserInfo());
                this.client.info = this.json.decode(lingjiWebApp.getDeviceInfo());
            } else {
                this.user.info = getUserInfo();
                this.client.info = getDeviceInfo();
            }
            this.alertDebug(['mmc ready']);
            this.ready_callback();
        };
        mmc.ready = function (callback) {
            this.ready_callback = callback;
        };
        return mmc;
    })();
    MMCReady = function () {
        mmc.init();
    };
})();