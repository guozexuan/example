import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/Order'

import '../../common/polyfillLocalStorage'
import * as config from '../../common/config'
import {trim, getQueryFromUrl, scrollPosition, hideMenuAndFooterForXinDongQiMingApp} from '../../common/commonTools'
import cookie from '../../common/commonCookie'
import ryan from '../../common/commonAjax'
import jf from '../../common/commonJF'

import CommonMineHeader from '../public/CommonMineHeader'
import CommonTitleBorder from '../public/CommonTitleBorder'
import CommonLgBtn from '../public/CommonLgBtn'
import OrderPartHelp from '../public/OrderPartHelp'
import Footer from '../public/Footer';
import CommonTipLayer from '../public/CommonTipLayer'
import CommonLoadingLayer from '../public/CommonLoadingLayer'
//import CommonFixedIcon from '../public/CommonFixedIcon'


class Order extends Component {

    constructor() {
        super();
        this.state = {

            lang: cookie.getItem('_lang'),
            channel: cookie.getItem('_channel') || 'mlinghit',

            IMG_URL: config.IMAGE_PATH,
            API_URL: config.API_URL,
            PAGE_URL: config.PAGE_URL,
            PAY_POINT: config.PAY_POINT,

            currentNavId: 0,    //心动名0，钻石名1

            nameGood: [],    //所有的心动名
            nameAwesome: [],    //所有的钻石名
            nameGoodShow: [],        //显示的心动名
            nameAwesomeShow: [],    //显示的钻石名
            nameGoodSelect: [],    //选中的心动名
            nameAwesomeSelect: [],    //选中的钻石名
            nameGoodSelectCount: 0,
            nameAwesomeSelectCount: 0,
            goodLen: '...',
            awesomeLen: '...',

            tipFlag: false,
            tipText: '',
            loadingFlag: false,
            loadingText: '',

            singleNameGoodPrice: 20,
            //goodCountPerGroup: 30,
            //maxNameGoodPrice: 40,
            singleNameAwesomePrice: 60,
            //awesomeCountPerGroup: 20,
            //maxNameAwesomePrice: 100,
            priceCoupon1: .85,    //选择三个中间字，打八五折
            priceCoupon2: .7,    //选择三个中间字，打七折

            canClick: true,

            randomGoodFlag: true,    //满足随机5组名字的条件
            randomGoodCheckbox: false,    //复选框选中否
            randomGoodPrice: 50,
            randomGoodCount: 0,    //一组心动名尾字的数目

            randomAwesomeFlag: true,
            randomAwesomeCheckbox: false,
            randomAwesomePrice: 150,
            randomAwesomeCount: 0,    //一组钻石名尾字的数目

            height: 0

        };
        this._help = null;
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

    navClickHandle( navId ) {
        let lastNavId = this.state.currentNavId;
        if( lastNavId !== navId ) {
            this.setState({
                currentNavId: navId
            });
        }
    }

    getFirstWordFromServer() {
        let self = this,
            state = this.state;
        self.setState({
            loadingFlag: true,
            loadingText: '大师起名选字中...'
        });
        ryan.ajax({
            url: state.API_URL.GET_FIRST_WORD,
            type: 'GET',
            data: {
                family_name: getQueryFromUrl('familyname'),
                gender: getQueryFromUrl('gender'),
                birthday: getQueryFromUrl('birth')
            },
            success: function( res ) {
                if( res.name_good ) {
                    self.dealFirstData( res );
                } else if(res.msg) {
                    self.setTipShowAndHide('获取大师数据出错');
                } else {
                    self.setTipShowAndHide('请求数据接口失败！');
                }
                self.setState({
                    loadingFlag: false,
                    loadingText: ''
                });
            },
            error: function() {
                self.setTipShowAndHide('请求数据接口失败！');
                self.setState({
                    loadingFlag: false,
                    loadingText: ''
                });
            }
        });
    }

    dealFirstData( data ) {

        let nameGood = data.name_good || [],
            nameAwesome = data.name_awesome || [],
            nameGoodShow = [],
            nameAwesomeShow = [],
            goodLen = nameGood.length,
            awesomeLen = nameAwesome.length;

        let good = Order.arrayElementTransfer(nameGood, nameGoodShow, 10),
            awesome = Order.arrayElementTransfer(nameAwesome, nameAwesomeShow, 10);

        this.setState({
            nameGood: good.origin,
            nameAwesome: awesome.origin,
            nameGoodShow: good.show,
            nameAwesomeShow: awesome.show,
            goodLen: goodLen,
            awesomeLen: awesomeLen,
            randomGoodCount: parseInt(good.show[0].setCount, 10),
            randomAwesomeCount: parseInt(awesome.show[0].setCount, 10)
        });
    }

    static arrayElementTransfer( arr1, arr2, len = 10) {
        while( arr1.length > 0 && len > 0 ) {
            arr2.push( arr1.pop() );
            len --;
        }
        return {
            origin: arr1,
            show: arr2
        };
    }

    nameGoodClickHandle( word ) {
        let state = this.state,
            nameGood = state.nameGood,
            nameGoodSelect = state.nameGoodSelect,
            nameGoodShow = state.nameGoodShow,
            nameGoodSelectCount = state.nameGoodSelectCount,
            index = 0,
            flag,
            newNameGoodShow,
            randomGoodCheckbox = state.randomGoodCheckbox,
            randomGoodFlag = state.randomGoodFlag;

        flag = nameGoodSelect.some( (v, k) => {
            if( word === v ) {
                index = k;
            }
            return word === v;
        });

        if( flag ) {
            newNameGoodShow = nameGoodShow.map( (v) => {
                let checked = v.checked;
                if( v.jianTi === word ) {    //todo 简繁体转换会不会带来影响
                    checked = false;
                    nameGoodSelectCount -= v.setCount;
                }
                return {
                    jianTi: v.jianTi,
                    setCount: v.setCount,
                    checked: checked
                };

            });
            nameGoodSelect.splice( index, 1 );
        } else {
            newNameGoodShow = nameGoodShow.map( (v) => {
                let checked = v.checked;
                if( v.jianTi === word ) {    //todo 简繁体转换会不会带来影响
                    checked = true;
                    nameGoodSelectCount += v.setCount;
                }
                return {
                    jianTi: v.jianTi,
                    setCount: v.setCount,
                    checked: checked
                };

            });
            nameGoodSelect.push( word );
        }

        if( (nameGood.length + nameGoodShow.length - nameGoodSelect.length) < 5 ) {
            randomGoodFlag = false;
            randomGoodCheckbox = false;
        } else {
            randomGoodFlag = true;
        }

        this.setState({
            randomGoodFlag: randomGoodFlag,
            randomGoodCheckbox: randomGoodCheckbox,
            nameGoodShow: newNameGoodShow,
            nameGoodSelect: nameGoodSelect,
            nameGoodSelectCount: nameGoodSelectCount
        });

    }

    nameAwesomeClickHandle( word ) {
        let state = this.state,
            nameAwesome = state.nameAwesome,
            nameAwesomeSelect = state.nameAwesomeSelect,
            nameAwesomeShow = state.nameAwesomeShow,
            nameAwesomeSelectCount = state.nameAwesomeSelectCount,
            index = 0,
            flag,
            newNameAwesomeShow,
            randomAwesomeFlag = state.randomAwesomeFlag,
            randomAwesomeCheckbox = state.randomAwesomeCheckbox;

        flag = nameAwesomeSelect.some( (v, k) => {
            if( word === v ) {
                index = k;
            }
            return word === v;
        });

        if( flag ) {
            newNameAwesomeShow = nameAwesomeShow.map( (v) => {
                let checked = v.checked;
                if( v.jianTi === word ) {    //todo 简繁体转换会不会带来影响
                    checked = false;
                    nameAwesomeSelectCount -= v.setCount;
                }
                return {
                    jianTi: v.jianTi,
                    setCount: v.setCount,
                    checked: checked
                };

            });
            nameAwesomeSelect.splice( index, 1 );
        } else {
            newNameAwesomeShow = nameAwesomeShow.map( (v) => {
                let checked = v.checked;
                if( v.jianTi === word ) {    //todo 简繁体转换会不会带来影响
                    checked = true;
                    nameAwesomeSelectCount += v.setCount;
                }
                return {
                    jianTi: v.jianTi,
                    setCount: v.setCount,
                    checked: checked
                };

            });
            nameAwesomeSelect.push( word );
        }

        if( (nameAwesome.length + nameAwesomeShow.length - nameAwesomeSelect.length) < 5 ) {
            randomAwesomeFlag = false;
            randomAwesomeCheckbox = false;
        } else {
            randomAwesomeFlag = true;
        }

        this.setState({
            randomAwesomeFlag: randomAwesomeFlag,
            randomAwesomeCheckbox: randomAwesomeCheckbox,
            nameAwesomeShow: newNameAwesomeShow,
            nameAwesomeSelect: nameAwesomeSelect,
            nameAwesomeSelectCount: nameAwesomeSelectCount
        });

    }

    renderSelectedName( name ) {
        if( !name ) {
            return <span className="empty">无</span>
        }
        if( '[object Array]' === Object.prototype.toString.apply( name ) ) {
            let len = name.length;
            if (0 === len) {
                return <span className="empty">无</span>;
            } else if (len > 0) {
                name = name.map((v) => {
                    return '【' + v + '】';
                });
                return name.join('    ');
            }
        } else {
            return <span className="empty">无</span>;
        }
    }

    nameGoodGetMoreClickHandle() {
        let nameGood = this.state.nameGood,
            nameGoodShow = this.state.nameGoodShow;

        if( nameGood && nameGood.length > 0 ) {
            let good = Order.arrayElementTransfer( nameGood, nameGoodShow, 10 );
            this.setTipShowAndHide('竭诚为您服务！');
            this.setState({
                nameGood: good.origin,
                nameGoodShow: good.show
            });
        }
    }

    nameAwesomeGetMoreClickHandle() {
        let nameAwesome = this.state.nameAwesome,
            nameAwesomeShow = this.state.nameAwesomeShow;

        if( nameAwesome && nameAwesome.length > 0 ) {
            let awesome = Order.arrayElementTransfer( nameAwesome, nameAwesomeShow, 10 );
            this.setTipShowAndHide('竭诚为您服务！');
            this.setState({
                nameAwesome: awesome.origin,
                nameAwesomeShow: awesome.show
            });
        }
    }

    calculatePrice() {

        let state = this.state,
            goodLen = state.nameGoodSelect.length,
            awesomeLen = state.nameAwesomeSelect.length,
            goodPrice = goodLen * state.singleNameGoodPrice,
            awesomePrice = awesomeLen * state.singleNameAwesomePrice,
            sum = goodPrice + awesomePrice;

        if( (goodLen + awesomeLen) >= 5 ) {    //多选打折优惠
            sum *= state.priceCoupon2;
        } else if( (goodLen + awesomeLen) >= 3 ) {
            sum *= state.priceCoupon1;
        }

        if( state.randomAwesomeCheckbox ) {    //随机的5个钻石名的价格
            sum += state.randomAwesomePrice;
        }

        if( state.randomGoodCheckbox ) {    //随机的5个心动名的价格
            sum += state.randomGoodPrice;
        }

        return Math.ceil(sum);

    }

    saveOrderIdToLocalStorage(orderId) {
        let oldOrders = localStorage.getItem('xindongqiming_history_orders');
        if(oldOrders) {
            oldOrders = oldOrders.split(',');
        } else {
            oldOrders = [];
        }
        oldOrders.push(orderId);
        localStorage.setItem('xindongqiming_history_orders', oldOrders.join(','));
    }

    /**
     * 如果条件（randomAwesomeFlag（true）首先至少要有5个数，  randomAwesomeCheckbox(true)用户有愿意买）满足，
     * 从未被选中的钻石名中随机生成5个，放到已选钻石名字（nameAwesomeSelect）中
     */
    randomGenerateFiveAwesomeName() {
        let state = this.state,
            randomAwesomeFlag = state.randomAwesomeFlag,
            randomAwesomeCheckbox = state.randomAwesomeCheckbox,
            nameAwesomeSelect = state.nameAwesomeSelect,
            nameAwesome = state.nameAwesome,
            nameAwesomeShow = state.nameAwesomeShow,
            allAwesomeName = nameAwesome.concat( nameAwesomeShow ).map( (v) => {
                return v.jianTi;
            });

        //randomAwesomeFlag（true）首先至少要有5个数，  randomAwesomeCheckbox(true)用户有愿意买
        if( randomAwesomeFlag && randomAwesomeCheckbox ) {

            //从所有钻石名中排除已被选的名字
            let theRestAwesome = allAwesomeName.filter( (v) => {
                return !nameAwesomeSelect.some( (subV) => {
                    return v === subV;
                });
            });

            let fiveAwesome = [];
            while( theRestAwesome.length > 0 && fiveAwesome.length < 5 ) {
                let random = Math.floor( theRestAwesome.length * Math.random() );
                fiveAwesome.push( theRestAwesome[random] );
                theRestAwesome.splice(random, 1);
            }

            return fiveAwesome;
        } else {
            return [];
        }
    }

    /**
     * 如果条件（randomAwesomeFlag（true）首先至少要有5个数，  randomAwesomeCheckbox(true)用户有愿意买）满足，
     * 从未被选中的心动名中随机生成5个，放到已选心动名字（nameAwesomeSelect）中
     */
    randomGenerateFiveGoodName() {
        let state = this.state,
            randomGoodFlag = state.randomGoodFlag,
            randomGoodCheckbox = state.randomGoodCheckbox,
            nameGoodSelect = state.nameGoodSelect,
            nameGood = state.nameGood,
            nameGoodShow = state.nameGoodShow,
            allGoodName = nameGood.concat( nameGoodShow ).map( (v) => {
                return v.jianTi;
            });

        //randomGoodFlag（true）首先至少要有5个数，  randomGoodCheckbox(true)用户有愿意买
        if( randomGoodFlag && randomGoodCheckbox ) {

            //从所有心动名中排除已被选的名字
            let theRestGood = allGoodName.filter( (v) => {
                return !nameGoodSelect.some( (subV) => {
                    return v === subV;
                });
            });

            let fiveGood = [];
            while( theRestGood.length > 0 && fiveGood.length < 5 ) {
                let random = Math.floor( theRestGood.length * Math.random() );
                fiveGood.push( theRestGood[random] );
                theRestGood.splice(random, 1);
            }

            return fiveGood;
        } else {
            return [];
        }
    }

    submitClickHandle() {
        let self = this,
            state = this.state;

        let fiveRandomAwesome = this.randomGenerateFiveAwesomeName(),
            fiveRandomGood = this.randomGenerateFiveGoodName(),
            nameAwesomeSelect = state.nameAwesomeSelect.concat( fiveRandomAwesome ),
            nameGoodSelect = state.nameGoodSelect.concat( fiveRandomGood );

        if( (nameGoodSelect.length + nameAwesomeSelect.length) <= 0 ) {
            this.setTipShowAndHide('您未选择任何名字!');
            return null;
        }

        if( !self.state.canClick ) {
            return null;
        }

        self.setState({
            canClick: false,
            loadingFlag: true,
            loadingText: '大师起名中...'
        });

        ryan.ajax({
            url: state.API_URL.REGISTRY_ORDER,
            type: 'POST',
            data: {
                family_name: getQueryFromUrl('familyname'),
                gender: getQueryFromUrl('gender'),
                birthday: getQueryFromUrl('birth'),
                name_good: nameGoodSelect.join(','),
                name_awesome: nameAwesomeSelect.join(','),
                email: getQueryFromUrl('email'),
                send_email: getQueryFromUrl('send_email'),
                phone_number: getQueryFromUrl('phone_number'),
                send_sms: getQueryFromUrl('send_sms'),
                pay_point: state.PAY_POINT,
                channel: state.channel,
                has_random_good: state.randomGoodCheckbox ? 1 : 0,
                has_random_awesome: state.randomAwesomeCheckbox ? 1 : 0
            },
            success: function( res ) {

                if( res.order_id ) {
                    self.saveOrderIdToLocalStorage( res.order_id );
                    location.href = self.state.PAGE_URL.PAYMENT + '?order_id=' + res.order_id;
                } else {
                    self.setTipShowAndHide('请求错误!');
                }

                self.setState({
                    canClick: true,
                    loadingFlag: false,
                    loadingText: ''
                });

            },
            error: function() {
                self.setState({
                    canClick: true,
                    loadingFlag: false,
                    loadingText: ''
                });
                self.setTipShowAndHide('请求错误 !');
            }
        });

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
        this.getFirstWordFromServer();
        this.langSet();
    }

    render() {

        let self = this,
            state = this.state;

        return (
            <section className="section-order">
                {
                    !hideMenuAndFooterForXinDongQiMingApp() &&
                    <CommonMineHeader />
                }
                <div className="order-banner">
                    <img src={ state.IMG_URL + 'orderMasterBanner.jpg' } alt="orderBanner.png"/>
                </div>
                <div className="banner-slogan">
                    融合文化精髓·精准专业起名·助旺自身运势
                </div>
                <div style={{
                    backgroundColor: '#fff6eb',
                    overflow: 'hidden'
                }}>
                    {/*<CommonTitleBorder text="起名案例" margin="1rem .5rem 0" />
                    <ul className="result-demo">
                        <li>
                            <div className="demo-head clear">
                                <div className="right">
                                    <div className="btn">起名信息</div>
                                </div>
                                <div className="auto">
                                    姓氏：<span className="stress mr1rem">刘</span>    性别：<span className="stress">男</span>
                                </div>
                            </div>
                            <div className="demo-head">
                                出生日期：<span className="stress mr1rem">2016年8月10日</span>   出生时辰：<span className="stress mr1rem">子时</span>
                            </div>
                        </li>
                        <li>
                            <div className="demo-head clear">
                                <div className="right">
                                    <div className="btn">选取首字</div>
                                </div>
                                <div className="auto">
                                    首字：<span className="stress">浩，毅</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="demo-head clear">
                                <div className="right">
                                    <div className="btn">获得名字</div>
                                </div>
                                <div className="auto">
                                    分别获得：
                                </div>
                            </div>
                            <ul className="demo-name-list clear">
                                <li>
                                    <div className="demo-name-box">刘浩森</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘浩宇</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘浩杰</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘浩哲</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘浩铭</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘毅文</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘毅睿</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘毅谦</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘毅杰</div>
                                </li>
                                <li>
                                    <div className="demo-name-box">刘毅轩</div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="demo-head clear">
                                <div className="right">
                                    <div className="btn">查看分析</div>
                                </div>
                                <div className="auto">
                                    分别获得：
                                </div>
                            </div>
                            <ul className="result-tab clear">
                                <li className="bg1">
                                    三才五格
                                </li>
                                <li className="bg2">
                                    五行八字
                                </li>
                                <li className="bg3">
                                    生肖属相
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="go-to-pay" onClick={() => {
                        if( self._help ) {
                            scrollPosition( self._help );
                        }
                    }}>
                        <span>想知道更详细？>></span>
                    </div>*/}
                    {/*<CommonTitleBorder text="选好字取好名" margin="1rem .5rem 0" />*/}
                    <div className="instruction">
                        <div className="instruction1">
                            <span className="text">使用说明：</span>
                            <span>请勾选喜欢的首字，购买后即可获 得包含该字的同等级全部名字，括号中是该组 名字总数。</span>
                        </div>
                        <div className="instruction2">
                            <span className="text">特别提示：</span>
                            <span>一对一专属起名服务，请选择灵机文化</span>&nbsp;
                            <a href={"http://shop.linghit.com/named.html?channel=" + state.channel}>"大师起名"</a>&nbsp;
                            <span>，十年起名以上专家团队为您服务，百分百助运。</span>
                        </div>
                        {/*<div className="instruction2">
                            <span className="text">特别声明：</span>
                            <span>名字由大数据智能筛选，有一定局 限性，需要最高品质的起名，请选用起名通专 家人工参与的专家起名服务。</span>
                        </div>*/}
                    </div>
                    <nav className="order-nav clear">
                        <ul>
                            <li className={ state.currentNavId ? '': 'active' }
                                onClick={this.navClickHandle.bind(self, 0)}
                                >
                                <div><i className="icon-xindong">&nbsp;</i>心动名{/*({state.goodLen})*/}</div>
                            </li>
                            <li className={ state.currentNavId ? 'active' : '' }
                                onClick={this.navClickHandle.bind(self, 1)}
                                >
                                <div><i className="icon-zuanshi">&nbsp;</i>钻石名{/*({state.awesomeLen})*/}</div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {
                    ( 0 === state.currentNavId ) &&
                        <div className="words-box">
                            <div className="price-slogan">
                                心动名：吉祥五行、主流、好名 <span className="stress">{state.singleNameGoodPrice}元5个名字，万千好名任你选！</span>
                                {/*心动名：吉祥五行、主流、好名 <span className="stress">{state.singleNameGoodPrice}元/组，万千好名任你选！</span>*/}
                                {/*心动名：一个首字{state.singleNameGoodPrice}元，会获得{state.goodCountPerGroup}个名字。*/}
                                {/*吉祥五行、主流、好名 {state.singleNameGoodPrice}元/个，每组收费{state.maxNameGoodPrice}元封顶。*/}
                            </div>
                            <ul className="words-list clear">
                                {
                                    state.nameGoodShow && state.nameGoodShow.length > 0 &&
                                        state.nameGoodShow.map( (v, k) => {
                                            return (
                                                <li key={k}
                                                    onClick={self.nameGoodClickHandle.bind(self, v.jianTi)}
                                                    >
                                                    <div className="word-box">
                                                        {
                                                            k < 5 &&
                                                            <div className="hot-word"></div>
                                                        }
                                                        {v.jianTi}
                                                    </div>
                                                    <div className="count">({v.setCount})</div>
                                                    <div className={"checkbox" + (v.checked ? ' checked' : '')}>
                                                        <i>&nbsp;</i>
                                                    </div>
                                                </li>
                                            );
                                        })
                                }
                            </ul>
                            {
                                state.nameGood && state.nameGood.length > 0 &&
                                <div className="order-btn"
                                     onClick={this.nameGoodGetMoreClickHandle.bind(this)}
                                    >
                                    查看更多
                                </div>
                            }
                        </div>
                }
                {
                    ( 1 === state.currentNavId ) &&
                    <div className="words-box">
                        <div className="price-slogan">
                            钻石名：最佳五行、主流、吉名 <span className="stress">{state.singleNameAwesomePrice}元10个名字，吉祥好名任你挑！</span>
                            {/*钻石名：最佳五行、主流、吉名 <span className="stress">{state.singleNameAwesomePrice}元/组，吉祥好名任你挑！</span>*/}
                            {/*钻石名：一个首字{state.singleNameAwesomePrice}元，会获得{state.awesomeCountPerGroup}个名字。*/}
                            {/*吉祥五行、主流、好名 {state.singleNameAwesomePrice}元/个，每组收费{state.maxNameAwesomePrice}元封顶。*/}
                        </div>
                        <ul className="words-list clear">
                            {
                                state.nameAwesomeShow && state.nameAwesomeShow.length > 0 &&
                                state.nameAwesomeShow.map( (v, k) => {
                                    return (
                                        <li key={k}
                                            onClick={self.nameAwesomeClickHandle.bind(self, v.jianTi)}
                                            >
                                            <div className="word-box">
                                                {
                                                    k < 5 &&
                                                    <div className="hot-word"></div>
                                                }
                                                {v.jianTi}
                                            </div>
                                            <div className="count">({v.setCount})</div>
                                            <div className={"checkbox" + (v.checked ? ' checked' : '')}>
                                                <i>&nbsp;</i>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        {
                            state.nameAwesome && state.nameAwesome.length > 0 &&
                            <div className="order-btn"
                                 onClick={this.nameAwesomeGetMoreClickHandle.bind(this)}
                                >
                                查看更多
                            </div>
                        }
                    </div>
                }
                {
                    state.randomGoodFlag &&
                    <div className="random-name good clear"
                         onClick={ () => {
                            this.setState({
                                randomGoodCheckbox: !state.randomGoodCheckbox
                            });
                         }}
                        >
                        <div className="left">
                            <i className={ state.randomGoodCheckbox ? "active" : ""}>&nbsp;</i>
                        </div>
                        <div className="auto">
                            <div className="up clear">
                                <div className="right">
                                    <div className="price1">￥{Math.ceil( state.randomGoodPrice * 2 ).toFixed(2)}</div>
                                    <div className="price2">￥{Math.ceil( state.randomGoodPrice ).toFixed(2)}</div>
                                </div>
                                <div className="auto">
                                    <i></i>
                                    <span>心动名套餐</span>
                                </div>
                            </div>
                            <div className="down">
                                大师为您挑选最好的<span className="stress">{state.randomGoodCount * 5}</span>个名字
                            </div>
                        </div>
                    </div>
                }
                {
                    state.randomAwesomeFlag &&
                    <div className="random-name awesome clear"
                         onClick={ () => {
                            this.setState({
                                randomAwesomeCheckbox: !state.randomAwesomeCheckbox
                            });
                         }}
                        >
                        <div className="left">
                            <i className={ state.randomAwesomeCheckbox ? "active" : ""}>&nbsp;</i>
                        </div>
                        <div className="auto">
                            <div className="up clear">
                                <div className="right">
                                    <div className="price1">￥{Math.ceil( state.randomAwesomePrice * 2 ).toFixed(2)}</div>
                                    <div className="price2">￥{Math.ceil( state.randomAwesomePrice ).toFixed(2)}</div>
                                </div>
                                <div className="auto">
                                    <i></i>
                                    <span>钻石名套餐</span>
                                </div>
                            </div>
                            <div className="down">
                                大师为您挑选最佳的<span className="stress">{state.randomAwesomeCount * 5}</span>个名字
                            </div>
                        </div>
                    </div>
                }
                <div className="coupon-slogan">
                    优惠：
                    <span className="color1">选购3个字或以上{state.priceCoupon1 * 10}折，选购5个字或以上{state.priceCoupon2 * 10}折</span>
                    （
                    <span className="color2">心动名和钻石名可同时选择</span>
                    ）
                    <div className="selected-name-box">
                        <div className="clear">
                            <div className="left">已选心动名：</div>
                            <div className="auto">
                                {this.renderSelectedName( state.nameGoodSelect )}
                            </div>
                        </div>
                        <div className="clear">
                            <div className="left">已选钻石名：</div>
                            <div className="auto">
                                {this.renderSelectedName( state.nameAwesomeSelect )}
                            </div>
                        </div>
                        <div className="clear">
                            <div className="left">　取名套餐：</div>
                            <div className="auto">
                                {state.randomAwesomeCheckbox ? '【钻石名套餐】' : ''}
                                {state.randomGoodCheckbox ? '【心动名套餐】' : ''}
                                {!(state.randomAwesomeCheckbox || state.randomGoodCheckbox) ? '无' : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selected-word-count">
                    可获得
                    {( state.nameGoodSelectCount +
                        state.nameAwesomeSelectCount +
                        (state.randomGoodCheckbox ? (state.randomGoodCount * 5) : 0) +
                        (state.randomAwesomeCheckbox ? (state.randomAwesomeCount * 5) : 0) )}
                    个名字&nbsp;&nbsp;&nbsp;&nbsp;实付金额：
                    <span className="stress">￥{this.calculatePrice()}</span>
                    <span className="sub">.00</span>
                </div>
                <CommonLgBtn text="马上起名" margin="0 1rem 1rem"
                             event={this.submitClickHandle.bind(this)}
                    />
                <div ref={(node) => {
                    if( node ) {
                        self._help = node;
                    }
                }}></div>
                <OrderPartHelp />
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
                {/*<CommonFixedIcon />*/}
            </section>
        );

    }

}

render(
    <Order />,
    document.getElementById('page-order')
);