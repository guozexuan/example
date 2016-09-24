import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/NameAnalysis'

import * as config from '../../common/config'
import {getQueryFromUrl, hideMenuAndFooterForXinDongQiMingApp} from '../../common/commonTools'
import ryan from '../../common/commonAjax'
import * as validate from '../../common/commonValidate'
import cookie from '../../common/commonCookie'
import jf from '../../common/commonJF'

import CommonMineHeader from '../public/CommonMineHeader'
import NameAnalysisPartSanCaiWuGe from '../public/NameAnalysisPartSanCaiWuGe'
import NameAnalysisPartWuXing from '../public/NameAnalysisPartWuXing'
import NameAnalysisPartShengXiao from '../public/NameAnalysisPartShengXiao'
import CommonLgBtn from '../public/CommonLgBtn'
import Footer from '../public/Footer'
import CommonTipLayer from '../public/CommonTipLayer'
import CommonLoadingLayer from '../public/CommonLoadingLayer'
//import CommonFixedIcon from '../public/CommonFixedIcon'



class NameAnalysis extends Component {

    constructor() {

        super();
        this.state = {

            lang: cookie.getItem('_lang'),
            channel: cookie.getItem('_channel') || 'mlinghit',

            API_URL: config.API_URL,
            PAGE_URL: config.PAGE_URL,
            validate: validate,

            currentNav: 0,    //0三才五格,1五行八字, 2生肖属相,

            family_name: getQueryFromUrl('family_name') || '',
            first_name: getQueryFromUrl('first_name') || '',
            gender: getQueryFromUrl('gender') || '3',    //3是错误的性别状态，会验证不通过
            birthday: getQueryFromUrl('birth') || '',

            //userInfo
            zodiac: '数据加载中...',
            zodiacPinYin: undefined,
            nameWords: [],
            lunar: '数据加载中...',
            solar: '数据加载中...',
            xiShen: '...',

            //sanCaiWuGe
            sanCai: {},
            wuGe: {},

            //wuxingbazi
            paiPan: {},
            youLai: {},

            wuXingBaZhi: null,
            shengXiaoShuXiang: {
                xi: '<p>数据加载中...</p>',
                ji: '<p>数据加载中...</p>'
            },

            tipFlag: false,
            tipText: '',
            loadingFlag: false,
            loadingText: '',

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

    validateFamilyName() {
        let familyName = this.state.family_name;
        familyName = familyName || '';
        let validate = this.state.validate,
            isNotEmpty = validate.isNotEmpty( familyName ),
            isChinese = validate.isChinese( familyName ),
            len = familyName.length,
            isValidLength = len >=1 && len <=2,
            flag = isNotEmpty && isChinese && isValidLength,
            tip = '';

        if( !isNotEmpty ) {
            tip = '姓氏不能为空！';

        } else if( !isChinese ) {
            tip = '姓氏必须为汉字！';
        } else if( !isValidLength ) {
            tip = '姓氏最大为二个字！';
        }

        return {
            value: familyName,
            flag: flag,
            tip: tip
        };

    }

    validateFirstName() {
        let firstName = this.state.first_name;
        firstName = firstName || '';
        let validate = this.state.validate,
            isNotEmpty = validate.isNotEmpty( firstName ),
            isChinese = validate.isChinese( firstName ),
            len = firstName.length,
            isValidLength = len >=1 && len <=2,
            flag = isNotEmpty && isChinese && isValidLength,
            tip = '';

        if( !isNotEmpty ) {
            tip = '姓名不能为空！';

        } else if( !isChinese ) {
            tip = '姓名必须为汉字！';
        } else if( !isValidLength ) {
            tip = '姓名最大为二个字！';
        }

        return {
            value: firstName,
            flag: flag,
            tip: flag ? tip : ''
        };
    }

    validateGender() {

        let isZeroOrOne = function( s ) {
            return /^[01]$/g.test( s );
        };

        let gender = this.state.gender,
            validate = this.state.validate,
            flag = validate.isNotEmpty( gender ) && isZeroOrOne( gender );

        return {
            value: gender,
            flag: flag,
            tip: flag ? '' : '性别数据为空或格式不正确！'
        };

    }

    validateBirthday() {

        let isAllNumber = function( s ) {
            return /^\d+$/.test(s);
        };

        let birthday = this.state.birthday,
            validate = this.state.validate,
            isNotEmpty = validate.isNotEmpty( birthday ),
            flag = isNotEmpty && isAllNumber( birthday ) && (10 === birthday.length);

        return {
            value: birthday,
            flag: flag,
            tip: flag ? '' : '生日数据为空或格式不正确！'
        };
    }

    validateAll() {
        let family_name = this.validateFamilyName(),
            first_name = this.validateFirstName(),
            gender = this.validateGender(),
            birthday = this.validateBirthday();

        if(!family_name.flag) {
            //this.setTipShowAndHide(family_name.tip);
            return false;
        }
        if( !first_name.flag ) {
            //this.setTipShowAndHide(first_name.tip);
            return false;
        }
        if( !gender.flag ) {
            //this.setTipShowAndHide(gender.tip);
            return false;
        }
        if( !birthday.flag ) {
            //this.setTipShowAndHide(birthday.tip);
            return false;
        }
        return true;

    }

    getNameAnalysisDataFromServer() {

        let self = this,
            state = this.state,
            validateAll = this.validateAll();

        self.setState({
            loadingFlag: true,
            loadingText: '大师解名中...'
        });

        if( !validateAll ) {
            setTimeout( () => {
                location.href = state.PAGE_URL.INDEX;
            }, 1000);
            return false;
        }

        ryan.ajax({
            url: state.API_URL.GET_NAME_ANALYSIS,
            post: 'GET',
            data: {
                family_name: state.family_name,
                first_name: state.first_name,
                gender: state.gender,
                birthday: state.birthday
            },
            success: function( res ) {
                if( res.info ) {
                    self.dealNameAnalysisData( res );
                } else if(res.msg) {
                    self.setTipShowAndHide(res.msg);
                    setTimeout( () => {
                        self.setTipShowAndHide('即将为您跳回首页！');
                        setTimeout( () => {
                            location.href = state.PAGE_URL.INDEX;
                        }, 2000);
                    }, 2000);
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

    dealNameAnalysisData( data ) {

        data.info && this.dealUserInfo( data.info );
        data.sanCaiWuGe && this.dealSanCaiWuGe( data.info, data.sanCaiWuGe );
        data.wuHangBaZi && this.dealWuXingBaZi( data.wuHangBaZi );
        data.ShengXiaoShuXiang && this.dealShengXiaoShuXiang( data.ShengXiaoShuXiang );

    }

    dealUserInfo( userInfo ) {
        let self = this,
            zodiac = userInfo && userInfo.zodiac || '...',
            zodiacPinYin = userInfo && userInfo.zodiacPinYin || undefined,
            nameWords = [],
            lunar,
            solar,
            xiShen = userInfo && userInfo.xiShen || '...';

        let mergeLunar = function( lunar ) {
            return lunar && lunar.y ? lunar.y + lunar.m + lunar.d + lunar.h : '...';
        };

        let mergeName = function(familyName, firstName) {
            if(
                '[object Array]' === Object.prototype.toString.apply( familyName ) &&
                    '[object Array]' === Object.prototype.toString.apply( firstName )
            ) {
                return familyName.concat( firstName );
            } else {
                return [];
            }
        };

        let mergeSolar = function() {
            let b = self.state.birthday;
            return b && b.length === 10 ?
                    b.substr(0,4) + '年' +
                    b.substr(4, 2) + '月' +
                    b.substr(6, 2) + '日' +
                    b.substr(8, 2) + '时' : '';
        };

        nameWords = mergeName(userInfo.familyName, userInfo.firstName);
        lunar = mergeLunar(userInfo.lunar);
        solar = mergeSolar();

        nameWords = nameWords.map( (v) => {

            let className;

            switch( v.wuXing ) {
                case '金' :
                    className = 'jin';
                    break;
                case '木' :
                    className = 'mu';
                    break;
                case '水' :
                    className = 'shui';
                    break;
                case '火' :
                    className = 'huo';
                    break;
                case '土' :
                    className = 'tu';
            }

            return {
                pinYin: v.pinYin,
                jianTi: v.jianTi,
                wuXing: v.wuXing,
                jieShi: v.jieShi,
                biHuaJianTi: v.biHuaJianTi,
                biHuaFanTi: v.biHuaFanTi,
                className: className
            };

        } );

        this.setState({
            zodiac: zodiac,
            zodiacPinYin: zodiacPinYin,
            nameWords: nameWords,
            lunar: lunar,
            solar: solar,
            xiShen: xiShen
        });


    }

    dealSanCaiWuGe( userInfo, sanCaiWuGe ) {
        let sanCai = sanCaiWuGe && sanCaiWuGe.sanCai || {},
            wuGe = sanCaiWuGe && sanCaiWuGe.wuGe || {};
        this.setState({
            sanCai: sanCai,
            wuGe: wuGe
        });
    }

    dealWuXingBaZi( data ) {
        let paiPan,
            youLai,
            zongGe;
        if( data.paiPan ) {
            paiPan = data.paiPan || {};
            youLai = data.youLai || {};
            zongGe = data.zongGe || {};
            this.setState({
                paiPan: paiPan,
                youLai: youLai,
                zongGe: zongGe
            });
        }
    }

    dealShengXiaoShuXiang( data ) {
        if( data.xi ) {
            this.setState({
                shengXiaoShuXiang: data
            });
        }
    }

    navClickHandle( nav ) {
        let lastNav = this.state.currentNav;
        if( lastNav !== nav ) {
            this.setState({
                currentNav: nav
            });
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
        this.getNameAnalysisDataFromServer();
        this.langSet();
    }

    render() {

        let state = this.state;

        return (
            <section className="section-name-analysis">
                {
                    !hideMenuAndFooterForXinDongQiMingApp() &&
                    <CommonMineHeader />
                }
                <div className="name-box">
                    <ul className="word-list">
                        {
                            state.nameWords && state.nameWords.length > 0 &&
                                state.nameWords.map( (v, k) => {
                                    return (
                                        <li key={k}>
                                            <div className="word-box">
                                                <div className="pin-yin">
                                                    {v.pinYin}
                                                </div>
                                                <div className="word">
                                                    {v.jianTi}
                                                </div>
                                            </div>
                                            <div className={"wu-xing bg-" + v.className}>{v.wuXing}</div>
                                        </li>
                                    );
                                } )
                        }
                    </ul>
                    <div className="info-box">
                        <span>性别：</span><span className="value">{state.gender == 1 ? '男' : '女'}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>生肖属相：</span><span className="value">{state.zodiac}</span><br/>
                        <span>阳历：</span><span className="value">{state.solar}</span><br/>
                        <span>农历：</span><span className="value">{state.lunar}</span><br/>
                    </div>
                </div>
                <nav className="name-analysis-nav">
                    <ul className="clear">
                        <li className={ ( 0 === state.currentNav ) ? 'active' : '' }
                            onClick={this.navClickHandle.bind(this, 0)}
                            >
                            <div>三才五格</div>
                        </li>
                        <li className={ ( 1 === state.currentNav ) ? 'active' : '' }
                            onClick={this.navClickHandle.bind(this, 1)}
                            >
                            <div>五行八字</div>
                        </li>
                        <li className={ ( 2 === state.currentNav ) ? 'active' : '' }
                            onClick={this.navClickHandle.bind(this, 2)}
                            >
                            <div>生肖属相</div>
                        </li>
                        <li className="immutable" onClick={ () => {
                            location.href = state.PAGE_URL.BAO_BAO_QIN_SUAN;
                        }}>
                            <div>
                                大师起名
                                <i>&nbsp;</i>
                            </div>
                        </li>
                    </ul>
                </nav>
                {
                    ( 0 === state.currentNav ) &&
                        <NameAnalysisPartSanCaiWuGe sanCai={state.sanCai}
                                                    wuGe={state.wuGe}
                                                    nameWords={state.nameWords}
                                                    familyName={state.family_name}
                        />
                }
                {
                    ( 1 === state.currentNav ) &&
                        <NameAnalysisPartWuXing xiShen={state.xiShen}
                                                nameWords={state.nameWords}
                                                paiPan={state.paiPan}
                                                youLai={state.youLai}
                                                zongGe={state.zongGe}
                        />
                }
                {
                    ( 2 === state.currentNav ) &&
                        <NameAnalysisPartShengXiao xiji={state.shengXiaoShuXiang}
                                                   zodiac={state.zodiac}
                                                   zodiacPinYin={state.zodiacPinYin}
                        />
                }
                {/*<CommonLgBtn text="获取更多吉名"
                             event={ () => {
                                location.href = state.PAGE_URL.INDEX;
                             }}
                    />*/}
                <div className="btn-group clear">
                    <div className="left">
                        <CommonLgBtn text="获得更多吉名" margin="0px"
                                     event={ () => {
                                        location.href = state.PAGE_URL.INDEX;
                                     }}
                            />
                        <div className="stress">
                            {/*享九折优惠*/}开启一生好运
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
                {/*<CommonFixedIcon />*/}
            </section>
        );

    }

}

render(
    <NameAnalysis />,
    document.getElementById('page-name-analysis')
);