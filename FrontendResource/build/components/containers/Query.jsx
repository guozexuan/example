import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/Query';

import '../../common/polyfillLocalStorage'
import * as config from '../../common/config'
import {trim, hideMenuAndFooterForXinDongQiMingApp} from '../../common/commonTools'
import { isNotEmpty, isCorrectOrderCode } from '../../common/commonValidate'
import ryan from '../../common/commonAjax'
import jf from '../../common/commonJF'
import cookie from '../../common/commonCookie'

import CommonMineHeader from '../public/CommonMineHeader'
import Footer from '../public/Footer'
import CommonTitleBorder from '../public/CommonTitleBorder'
import CommonLgBtn from '../public/CommonLgBtn'
import CommonTipLayer from '../public/CommonTipLayer'
import CommonLoadingLayer from '../public/CommonLoadingLayer'

class Query extends Component {

    constructor() {
        super();
        this.state = {

            lang: cookie.getItem('_lang'),

            API_URL: config.API_URL,
            PAGE_URL: config.PAGE_URL,
            APP: config.APP,

            tipFlag: false,
            tipText: '',
            loadingFlag: false,
            loadingText: '',

            canClick: true,

            orderId: '',
            historyOrderList: [],

            height: 0

        };
    }

    setTipShowAndHide(tipText, time) {
        let self = this;
        time = time || 1500;
        this.setState({
            tipFlag: true,
            tipText: tipText
        });
        setTimeout(function() {
            self.setState({
                tipFlag: false,
                tipText: ''
            });
        }, time)
    }

    inputChangeHandle(event) {
        let target = event.target,
            value = target.value,
            type =  target.getAttribute('data-type'),
            setState = {};
        setState[type] = trim(value);
        this.setState(setState);
    }

    validateOrderId() {
        let orderId = this.state.orderId,
            flag = isNotEmpty(orderId) && isCorrectOrderCode(orderId);
        return {
            value: orderId,
            flag: flag,
            tip: flag ? '' : '订单号不能为空否格式不确！'
        };
    }

    addOrderIdToLocalStorage( orderId ) {
        let orderIdList = localStorage.getItem('liuyueyunshi_history_orders') || '';
        orderIdList = orderIdList.split(',');
        if (
            orderIdList.every((v) => {
                return trim(orderId) !== trim(v);
            })
        ) {
            orderIdList.push(orderId);
            localStorage.setItem('liuyueyunshi_history_orders', orderIdList.join(','));
        } else {
            this.setTipShowAndHide( '订单已在历史订单中！' );
        }
    }

    queryOrderSubmitClickHandle() {
        let self = this,
            order = this.validateOrderId(),
            orderId = order.value;
        if(!this.state.canClick) {    //prevent repeat submit
            return null;
        }
        if( !order.flag ) {
            self.setTipShowAndHide(order.tip);
            return null;
        }
        self.setState({
            loadingFlag: true,
            loadingText: '订单查询中...',
            canClick: false
        });
        ryan.ajax({
            url: self.state.API_URL.QUERY,
            type: 'get',
            data: {
                order_id: orderId
            },
            success: function(res) {
                if( res.order_id ) {
                    self.addOrderIdToLocalStorage( res.order_id );
                    if( res.is_paid ) {
                        location.href = self.state.PAGE_URL.PAID_WORDS + '?order_id=' + orderId;
                    } else {
                        location.href = self.state.PAGE_URL.PAYMENT + '?order_id=' + orderId;
                    }
                } else if(res.msg) {
                    self.setTipShowAndHide(res.msg);
                } else {
                    self.setTipShowAndHide('请求数据错误！');
                }
                self.setState({
                    loadingFlag: false,
                    loadingText: '',
                    canClick: true
                });
            },
            error: function() {
                self.setTipShowAndHide('请求数据错误！');
                self.setState({
                    loadingFlag: false,
                    loadingText: '',
                    canClick: true
                });
            }
        });
    }

    getHistoryOrderIdStatus() {
        let self = this,
            state = this.state,
            orderIdList = localStorage.getItem('xindongqiming_history_orders');
        if( orderIdList && orderIdList.length > 0 ) {
            orderIdList.split(',').forEach( (v) =>{
                ryan.ajax({
                    url: state.API_URL.QUERY,
                    type: 'GET',
                    data: {
                        order_id: v
                    },
                    success: ( res ) => {
                        if( res.order_id ) {
                            let tempHistoryOrderList = self.state.historyOrderList.concat([]);
                            tempHistoryOrderList.push({
                                orderId: res.order_id,
                                isPaid: res.is_paid,
                                name_good: res.extra && res.extra.name_good,
                                name_awesome: res.extra && res.extra.name_awesome,
                                has_random_good: parseInt(res.extra.has_random_good, 10),
                                has_random_awesome: parseInt(res.extra.has_random_awesome, 10)
                            });
                            self.setState({
                                historyOrderList: tempHistoryOrderList
                            });
                        }
                    },
                    error: ( ) => {
                        //do nothing
                    }
                });
            });
        }
    }

    historyItemClickHandle(orderId, isPaid) {
        if( isPaid ) {
            location.href = this.state.PAGE_URL.PAID_WORDS + '?order_id=' + orderId;
        } else {
            location.href = this.state.PAGE_URL.PAYMENT + '?order_id=' + orderId;
        }
    }

    langSet() {
        let lang = this.state.lang;
        if( 'zh-tw' == lang ) {
            jf.convertText(document.getElementsByTagName('body')[0], true);
        } else if( 'zh-cn' == lang ) {
            jf.convertText(document.getElementsByTagName('body')[0], false);
        }
    }

    setContainerAvailSize() {
        let $document = document.documentElement,
            height = $document.clientHeight/16,
            $wrapper = document.getElementById('wrapper');

        if( height > this.state.height ) {
            this.setState({
                height: height
            });
            $wrapper.style.height = height + 'rem';
        }

        $wrapper.style.position = 'relative';
        $wrapper.style.overflow = 'auto';

    }

    componentDidUpdate() {
        this.langSet();
    }

    componentDidMount() {
        this.setContainerAvailSize();
        this.getHistoryOrderIdStatus();
        this.langSet();
    }

    renderWordList( good, awesome, hasRandom ) {
        good = good || '';
        awesome = awesome || '';
        good = trim(good);
        awesome = trim(awesome);
        good = good ? good.split(',') : [];
        awesome = awesome ? awesome.split(',') : [];
        let names = good.concat(awesome);
        names = names.map( (v) => {
            return '【' + v + '】';
        });
        if( names.length > 0 && !!hasRandom ) {
            for(let i = 0; i < 5; i ++) {
                names.pop();
            }
        }
        if( names.length > 0 ) {
            return names.join('　');
        } else {
            return '无';
        }
    }

    render() {

        let self = this,
            state = this.state;

        return (
            <section className="section-query">
                {
                    !hideMenuAndFooterForXinDongQiMingApp() &&
                    <CommonMineHeader />
                }
                <div className="input-box">
                    <div className="slogan">
                        <span className="stress">注：</span>
                        测算订单丢失，可以在你进行测算时所填写的邮箱 邮件中查询订单号，找回测算订单哦！
                    </div>
                    <div className="clear">
                        <div className="right"
                             onClick={this.queryOrderSubmitClickHandle.bind(this)}
                        >查询</div>
                        <div className="auto">
                            <input data-type="orderId"
                                   type="text"
                                   value={state.orderId}
                                   onChange={this.inputChangeHandle.bind(this)}
                                   placeholder="请输入订单号"
                            />
                        </div>
                    </div>
                </div>
                <div className="title-box">
                    <CommonTitleBorder text="选好字取好名" />
                    {
                        (!state.historyOrderList || state.historyOrderList.length === 0) &&
                        <div className="order-empty">
                         无历史单订！
                         </div>
                    }
                    {
                        state.historyOrderList && state.historyOrderList.length > 0 &&
                        <ul className="order-list">
                            {
                                state.historyOrderList.map( (v, k) => {
                                    return (
                                        <li className={v.isPaid ? 'paid' : 'to-pay'} key={k}>
                                            <div className="clear">
                                                <div className="left">订单类型：</div>
                                                <div className="auto">在线测算_起名解名</div>
                                            </div>
                                            <div className="clear">
                                                <div className="left">订单号：</div>
                                                <div className="auto">{v.orderId}</div>
                                            </div>
                                            <div className="clear">
                                                <div className="left">心动首字：</div>
                                                <div className="auto">{self.renderWordList(v.name_good, null, v.has_random_good)}</div>
                                            </div>
                                            <div className="clear">
                                                <div className="left">钻石首字：</div>
                                                <div className="auto">{self.renderWordList(v.name_awesome, null, v.has_random_awesome)}</div>
                                            </div>
                                            <div className="clear">
                                                <div className="left">取名套餐：</div>
                                                <div className="auto">
                                                    {
                                                        !!v.has_random_good &&
                                                        <span>【心动名套餐】</span>
                                                    }
                                                    {
                                                        !!v.has_random_awesome &&
                                                            <span>【钻石名套餐】</span>
                                                    }
                                                    {
                                                        !(!!v.has_random_good || !!v.has_random_awesome) &&
                                                            <span>无</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="clear">
                                                <div className="left">支付状态：</div>
                                                <div className="auto status">{v.isPaid ? '已支付' : '未支付'}</div>
                                            </div>
                                            <CommonLgBtn text={v.isPaid ? "点击查看" : '点击支付'} background={v.isPaid ? '#809955' : undefined}
                                                         event={self.historyItemClickHandle.bind(self, v.orderId, v.isPaid)}
                                                />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    }
                </div>
                {
                    !hideMenuAndFooterForXinDongQiMingApp() &&
                    <Footer />
                }
                {
                    state.tipFlag &&
                        <CommonTipLayer text={state.tipText} />
                }
                {
                    state.loadingFlag &&
                        <CommonLoadingLayer text={state.loadingText} />
                }
            </section>
        );

    }

}

render(
    <Query />,
    document.getElementById('page-query')
);

