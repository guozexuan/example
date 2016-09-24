import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/PaidWords';

import * as config from '../../common/config'
import {trim, getQueryFromUrl, hideMenuAndFooterForXinDongQiMingApp} from '../../common/commonTools'
import ryan from '../../common/commonAjax'
import cookie from '../../common/commonCookie'
import jf from '../../common/commonJF'

import CommonMineHeader from '../public/CommonMineHeader'
import FantasyBorder from '../public/FantasyBorder'
import CommonLgBtn from '../public/CommonLgBtn'
import Footer from '../public/Footer'
import CommonTipLayer from '../public/CommonTipLayer'
import CommonLoadingLayer from '../public/CommonLoadingLayer'

class PaidWords extends Component {

    constructor() {
        super();
        this.state = {

            lang: cookie.getItem('_lang'),
            channel: cookie.getItem('_channel'),

            PAGE_URL: config.PAGE_URL,
            API_URL: config.API_URL,

            family_name: '',
            name_good: '',
            name_awesome: '',

            //组合完成的字
            mergeGood: [],
            mergeAwesome: [],
            totalWord: '...',

            tipFlag: false,
            tipText: '',
            loadingFlag: false,
            loadingText: '',

            canClick: true,

            height: 0
        }
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

    getOrderInfoFromServer() {
        let self = this,
            state = this.state,
            orderId = getQueryFromUrl('order_id');

        self.setState({
            loadingFlag: true,
            loadingText: '大师起名中...'
        });

        ryan.ajax({
            url: state.API_URL.QUERY,
            type: 'GET',
            data: {
                order_id: orderId
            },
            success: function( res ) {
                if( res.order_id ) {
                    if( res.is_paid ) {
                        self.dealOrderInfo( res );
                    } else {
                        location.href = state.PAGE_URL.PAYMENT + '?order_id=' + res.order_id;
                    }
                } else {
                    self.setTipShowAndHide(res.msg);
                    self.setState({
                        loadingFlag: false,
                        loadingText: ''
                    });
                }
            },
            error: function() {
                self.setTipShowAndHide('请求数据出错!');
                self.setState({
                    loadingFlag: false,
                    loadingText: ''
                });
            }
        });
    }

    dealOrderInfo( data ) {
        let family_name = data.extra.family_name,
            name_good = data.extra.name_good,
            name_awesome = data.extra.name_awesome,
            gender = data.extra.gender,
            birthday = (function(d) {
                return d.y + d.m +d.d +d.h;
            })(data.extra.birthday);
        this.setState({
            family_name: family_name,
            name_good: name_good,
            name_awesome: name_awesome,
            gender: gender,
            birthday: birthday
        });
        this.getNameFromServer( data.order_id );

    }

    getNameFromServer( orderId ) {

        let self = this,
            state = this.state;

        ryan.ajax({
            url: state.API_URL.GET_TAIL_WORD,
            type: 'GET',
            data: {
                order_id: orderId
            },
            success: function( res ) {
                if( res.name_good ) {
                    //self.dealNameTailWord( res );
                    self.dealNameData( res );
                } else if(res.msg) {
                    self.setTipShowAndHide(res.msg);
                } else {
                    self.setTipShowAndHide('请求数据出错!');
                }
                self.setState({
                    loadingFlag: false,
                    loadingText: ''
                });
            },
            error: function() {
                self.setTipShowAndHide('请求数据出错!');
                self.setState({
                    loadingFlag: false,
                    loadingText: ''
                });
            }
        });

    }

    dealNameData( res ) {
        let state = this.state,
            familyName = state.family_name,
            res_good = res.name_good,
            res_awesome = res.name_awesome,
            mergeGood,
            mergeAwesome,
            totalWord = 0;
        if(
            res_good &&
            '[object Array]' === Object.prototype.toString.apply( res_good ) &&
            res_good.length > 0
        ) {
            res_good = res_good.filter( (v) => {
                return !!trim(v.first);
            });
            mergeGood = res_good.map( (v) => {
                let first = v.first,
                    names = v.second.map( (sv) => {
                        return familyName + first + sv.jianTi;
                    });
                totalWord += v.second.length;
                return {
                    names: names,
                    word: v.first,
                    count: (v.second && v.second.length) || 0
                };
            });
            this.setState({
                mergeGood: mergeGood
            });
        }

        if(
            res_awesome &&
            '[object Array]' === Object.prototype.toString.apply( res_awesome ) &&
            res_awesome.length > 0
        ) {
            res_awesome = res_awesome.filter( (v) => {
                return !!trim(v.first);
            });
            mergeAwesome = res_awesome.map( (v) => {
                let first = v.first,
                    names = v.second.map( (sv) => {
                        return familyName + first + sv.jianTi;
                    });
                totalWord += v.second.length;
                return {
                    names: names,
                    word: v.first,
                    count: (v.second && v.second.length) || 0
                };
            });
            this.setState({
                mergeAwesome: mergeAwesome
            });
        }

        this.setState({
            totalWord: totalWord
        });

    }

    //do not use
    /*dealNameTailWord( data ) {
        let state = this.state,
            res_good = data.name_good,
            res_awesome = data.name_awesome,
            familyName = state.family_name,
            name_good = trim(state.name_good) ? state.name_good.split(',') : [],
            name_awesome = trim(state.name_awesome) ? state.name_awesome.split(',') : [],
            mergeGood,
            mergeAwesome,
            totalWord = 0;

        if(
            '[object Array]' === Object.prototype.toString.apply( name_good ) &&
            name_good.length > 0
        ) {
            totalWord += res_good.length;
            mergeGood = this.mergeName( familyName, name_good, res_good);
            this.setState({
                mergeGood: mergeGood
            });
        }

        if( '[object Array]' === Object.prototype.toString.apply( name_awesome ) && name_awesome.length > 0 ) {
            totalWord += res_awesome.length;
            mergeAwesome = this.mergeName( familyName, name_awesome, res_awesome);
            this.setState({
                mergeAwesome: mergeAwesome
            });
        }

        this.setState({
            totalWord: totalWord
        });

    }*/

    //do not use
    /*randomArray( array ) {
        let len = array.length,
            newArray = [];
        if( 0 === len ) {
            return [];
        }
        while( array.length > 0 ) {
            let random = Math.floor( Math.random() * (array.length) );
            newArray.push( array[random] );
            array.splice(random, 1);
        }
        return newArray;
    }*/

    //do not use
    /*mergeName( family_name, seconds, tails ) {
        seconds = seconds || [];
        return seconds.map( (v) => {
            tails = this.randomArray( tails );
            let names = tails.map( (subV) => {
                return family_name + v + subV.jianTi;
            });

            return {
                names: names,
                word: v,
                count: tails.length
            };

        });

    }*/

    nameClickHandle( name ) {
        let self = this,
            state = this.state,
            family_name = state.family_name,
            first_name = name.replace(family_name, ''),
            birthday = state.birthday,
            gender = state.gender;
        location.href = state.PAGE_URL.NAME_ANALYSIS +
                '?family_name=' + family_name +
                '&first_name=' + first_name +
                '&birth=' + birthday +
                '&gender=' + gender;
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
        this.getOrderInfoFromServer();
        this.langSet();
    }

    render() {

        let self = this,
            state = this.state;

        return (
            <section className="section-paid-words">
                {
                    !hideMenuAndFooterForXinDongQiMingApp() &&
                    <CommonMineHeader />
                }
                <div className="paid-words-box">
                    <FantasyBorder text="已购名字" margin=".875rem auto" />
                    <dl>
                        <dt>已购首字</dt>
                        <dd>
                            <div className="clear">
                                <div className="left">
                                    <div className="icon bg-xin-dong"></div>
                                </div>
                                <div className="auto">
                                    {
                                        trim( state.name_good || '' ).length > 0 ? state.name_good :
                                            <span className="empty">无</span>
                                    }
                                </div>
                            </div>
                            <div className="clear">
                                <div className="left">
                                    <div className="icon bg-zuan-shi"></div>
                                </div>
                                <div className="auto">
                                    {
                                        trim( state.name_awesome || '' ).length > 0 ? state.name_awesome :
                                            <span className="empty">无</span>
                                    }
                                </div>
                            </div>
                        </dd>
                        <dt>尾字数量</dt>
                        <dd className="count">
                            尾字数量：共{state.totalWord}个
                        </dd>
                    </dl>
                </div>
                <div className="names-box">
                    <div className="slogan">
                        <div className="left">
                            <span>·</span>
                        </div>
                        <div className="auto">
                            点击名字可以直接查看该名字的三才五格、 五行八字、生肖属相的解析。
                        </div>
                    </div>
                    <ul className="name-group-list">
                        {
                            state.mergeAwesome && state.mergeAwesome.length > 0 &&
                            state.mergeAwesome.map( (v, k) => {
                                return (
                                    <li className="clear" key={k}>
                                        <div className="left">
                                            <div className="icon-text">
                                                <span className="icon bg-zuan-shi">&nbsp;</span>
                                                <span>{v.word}</span>
                                            </div>
                                            <div className="count">
                                                ({v.count})
                                            </div>
                                        </div>
                                        <div className="auto">
                                            <ul className="name-list clear">
                                                {
                                                    v.names && v.names.length > 0 &&
                                                    v.names.map( (subV, subK) => {
                                                        return (
                                                            <li key={subK}>
                                                                <div onClick={self.nameClickHandle.bind(self, subV)}>
                                                                    {subV}
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })
                        }
                        {
                            state.mergeGood && state.mergeGood.length > 0 &&
                                state.mergeGood.map( (v, k) => {
                                    return (
                                        <li className="clear" key={k}>
                                            <div className="left">
                                                <div className="icon-text">
                                                    <span className="icon bg-xin-dong">&nbsp;</span>
                                                    <span>{v.word}</span>
                                                </div>
                                                <div className="count">
                                                    ({v.count})
                                                </div>
                                            </div>
                                            <div className="auto">
                                                <ul className="name-list clear">
                                                    {
                                                        v.names && v.names.length > 0 &&
                                                            v.names.map( (subV, subK) => {
                                                                return (
                                                                    <li key={subK}>
                                                                        <div onClick={self.nameClickHandle.bind(self, subV)}>
                                                                            {subV}
                                                                        </div>
                                                                    </li>
                                                                );
                                                            })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    );
                                })
                        }
                    </ul>
                </div>
                <div className="slogan-long">
                    <p>您对名字的用心，值得鼓励与支持。心动起名，购买越多，优惠折扣越大。同时还有一对一专属起名，十年起名以上专家团队，更专业的起名服务，百分百助运，赢得更多关注。</p>
                </div>
                <div className="btn-group clear">
                    <div className="left">
                        <CommonLgBtn text="点击继续选购" margin="0px"
                                     event={ () => {
                                        location.href = state.PAGE_URL.INDEX;
                                     }}
                            />
                        <div className="stress">
                            {/*享九折优惠*/}欢迎再次选购
                        </div>
                    </div>
                    <div className="right">
                        <CommonLgBtn text="大师起名" margin="0px" color="#fff1c2"
                                     event={ () => {
                                        location.href = state.PAGE_URL.BAO_BAO_QIN_SUAN + '?channel=' + state.channel;
                                     }}
                            />
                        <div className="stress">
                            专业老师1对1起名
                        </div>
                    </div>
                    <div className="auto">&nbsp;</div>
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
    <PaidWords />,
    document.getElementById('page-paid-words')
);