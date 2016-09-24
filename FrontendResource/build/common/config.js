/**
 * Created by sun yi on 2016/6/12.
 */

var pageCommonPath = '/xindongqiming/',
    apiCommonPath = '/api/v1/xindongqiming/',
    orderPath = '/api/v1/orders/';

export const IMAGE_PATH = '/forecastxindongqimingbundle/images/';    //'/XinDongQiMing/dist/images/';
export const CSS_IMAGE_PATH = '/forecastxindongqimingbundle/images/';

export const PAGE_URL = {
    LINGHit: 'http://m.linghit.com/',
    INDEX: pageCommonPath + 'index',
    ORDER: pageCommonPath + 'order',
    QUERY: pageCommonPath + 'query',
    PAID_WORDS: pageCommonPath + 'paid_words',
    NAME_ANALYSIS: pageCommonPath + 'name_analysis',
    PAYMENT: '/orders/payment',    //跳转到支付页

    BAO_BAO_QIN_SUAN: 'http://shop.linghit.com/named.html?channel=newversion'
};

export const PAY_POINT = 'xindongqiming_default';

export const API_URL = {
    GET_FIRST_WORD: apiCommonPath + 'first',
    GET_NAME_ANALYSIS: apiCommonPath + 'analysis',
    GET_TAIL_WORD: apiCommonPath + 'named',
    //RESULT: apiCommonPath + 'result',    //todo delete
    //GET_VERIFY_CODE: orderPath + 'sms/verifycode/apply.json',    //获取手机验证码
    REGISTRY_ORDER: orderPath + 'register',    //注册订单
    QUERY: orderPath + 'query',
    QUERY_HISTORY_ORDER: orderPath + 'batchquery'//,
    //GET_PRICE: '/api/v1/liuyueyunshi/price'
    ///api/v1/orders/points/price?point=liuyueyunshi_default&buy_type=1    //1第二个价格，2第二个价格，3，前两个之和再优惠
};

//export const FORTUNE_COUNT = 1598642;

//export const PAY_POINT = 'liuyueyunshi_default';

export const APP = 'xindongqiming';
