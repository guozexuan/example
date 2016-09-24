import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/Index';

import signals from '../../common/signals'
import * as config from '../../common/config'
import cookie from '../../common/commonCookie'
import jf from '../../common/commonJF'

import IndexPartName from '../public/IndexPartName'
import IndexPartAnalyze from '../public/IndexPartAnalyze'
import FantasyBorder from '../public/FantasyBorder'
import CommonVideoComponents from '../public/CommonVideoComponents'
import Footer from '../public/Footer'
import RyanDatePicker from '../public/RyanDatePicker'
import RyanLayerSelect from '../public/RyanLayerSelect'

(function(window) {
    var Signals = signals.Signal;
    window.ens = {
        gotBirthDay: new Signals(),
        gotBirthTime: new Signals(),
        datePickerShown: new Signals(),
        selectLayerShown: new Signals()
    };
})(window);

class Index extends Component {

    constructor() {
        super();
        this.state = {

            lang: cookie.getItem('_lang'),
            channel: cookie.getItem('_channel'),

            IMG_URL: config.IMAGE_PATH,
            PAGE_URL: config.PAGE_URL,
            currentNavId: 0,    //起名0，解名1

            height: 0    //div.wrapper height

        };
    }

    navClickHandle( navId ) {
        let lastNavId = this.state.currentNavId;
        if( lastNavId !== navId ) {
            this.setState({
                currentNavId: navId
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
        this.langSet();
        this.setContainerAvailSize();
    }

    processBannerImgByChannel() {
        let channel = this.state.channel,
            imgMeiYou = 'meiYouBanner.png',    //美柚banner
            imgMMW = 'mmwBanner.png',
            imgTJHZ = 'taiJiaoHeZi.jpg',
            imgDefault = 'indexBanner.jpg';    //妈妈网banner
        if( 'swmeiyou' === channel ) {
            return imgMeiYou;
        } else if( 'swmmw' === channel ) {
            return imgMMW;
        } else if( 'swtjhz' === channel ) {
            return imgTJHZ;
        } else {
            return imgDefault;
        }
    }

    render() {

        let self = this,
            state = this.state,
            indexBanner = this.processBannerImgByChannel();

        return (
            <section>
                <div className="header-banner">
                    <div className="img-box">
                        <img src={state.IMG_URL + indexBanner} alt="index-banner" />
                        <div className="my-fortune"
                          onClick={ () => {
                                location.href = state.PAGE_URL.QUERY;
                             }}
                            >
                            查询订单
                        </div>
                    </div>
                    <div className="text">
                        你的名字吉祥嗎？符合命理五行，數理格局嗎？
                    </div>
                    <div className="img-box">
                        <img src={state.IMG_URL + 'indexMasterBanner.jpg'} alt="master-banner" />
                    </div>
                </div>
                <CommonVideoComponents src="http://v.qq.com/iframe/player.html?vid=s0325s2z908&tiny=0&auto=0" />
                {/*<CommonVideoComponents src="http://v.qq.com/iframe/player.html?vid=b0319htwmom&tiny=0&auto=0" />*/}
                {/*
                <div className="index-banner" style={{display: 'none'}}>
                    <div className="img">
                        <img src={ state.IMG_URL + 'indexBanner.jpg' } alt="indexBanner"/>
                    </div>
                    <div className="fixed-text">
                        <div className="text-wrap">
                            <div className="text">
                                你的名字吉祥吗？符合命理五行，數理格局吗？
                            </div>
                            <ul>
                                <li>
                                    姓名是人的第一符号，传承着情意志，蕴含着精气神！
                                </li>
                                <li>
                                    好的姓名往往有着极佳的"音形义命"，和深厚的"运势乾坤"！
                                </li>
                                <li>
                                    你的姓名是否天地人和？你的姓名能否一"名"惊人？
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                */}
                <nav className="index-nav clear">
                    <ul>
                        <li className={ state.currentNavId ? '': 'active' }
                            onClick={this.navClickHandle.bind(self, 0)}
                            >
                            <div>拥有好名</div>
                        </li>
                        <li className={ state.currentNavId ? 'active' : '' }
                            onClick={this.navClickHandle.bind(self, 1)}
                            >
                            <div>免费解名</div>
                        </li>
                    </ul>
                </nav>
                {
                    0 === state.currentNavId &&
                        <IndexPartName />
                }
                {
                    1 === state.currentNavId &&
                        <IndexPartAnalyze />
                }
                <div className="slogan-group">
                    <FantasyBorder text="起名的烦恼" />
                    <div className="slogan-title">
                        <p className="sl-1">想起一个好名字，却苦思冥想，绞尽脑汁？</p>
                        <p className="sl-2">一个名字,伴随一生,影响我们从小到大的成长!</p>
                    </div>
                    <ul className="slogan-list">
                        <li>
                            <i></i>
                            好的名字，有好的寓意，能够催人奋进，从心理学上能够让使用者往好的方面发展；
                            <span className="stress">不好的名字，容易引起使用者内向、缺乏自信，在社会上难以立足。</span>
                        </li>
                        <li>
                            <i></i>
                            好的名字是我们给自己、给孩子最大的财富；
                            <span className="stress">名字是改变命运的第一步，</span>
                            但也是让无数国人最头疼的一件事。
                        </li>
                    </ul>
                    <div className="slogan-title">
                        <p className="sl-1">在学校，老师不喜欢;在单位，领导不搭理?</p>
                        <p className="sl-2">是不是名字不好？</p>
                    </div>
                    <ul className="slogan-list">
                        <li>
                            <i></i>
                            差的名字，不但有负面寓意，而且也让很多人不愿叫出口,面对这种情况，学业、事业又怎么有发展？
                        </li>
                        <li>
                            <i></i>
                            <span className="stress">无数销售精英，艺人、金领，都因为改了一个好名字，运气从此转变!</span>
                        </li>
                    </ul>
                    <FantasyBorder text="起一个好名字" />
                    <div className="slogan-title">
                        <p className="sl-3">小小的投资，能带来永远的回报</p>
                    </div>
                    <ul className="slogan-list">
                        <li>
                            <i></i>
                            起名，基本的
                            <span className="stress">好听、好读、好记，</span>
                            是必不可少的.这有利于日后生活中的读写、记忆；
                        </li>
                        <li>
                            <i></i>
                            其次，起名还必须考虑
                            <span className="stress">是否适合“使用者本身"，</span>
                            每个人都有先天的命格；
                        </li>
                        <li>
                            <i></i>
                            命不可改变，
                            <span className="stress">但运可改善；</span>
                        </li>
                        <li>
                            <i></i>
                            通过不同的方法，可以让人生有不同的发展。
                        </li>
                    </ul>
                    <FantasyBorder text="一个好名字应具备" />
                    <div className="img-slogan-box clear">
                        <div className="left bg-yin">
                            <div className="vertical-text">
                                <span>平仄有章</span>
                                <span>好聽好念</span>
                            </div>
                        </div>
                        <div className="right bg-xing">
                            <div className="vertical-text">
                                <span>筆畫適中</span>
                                <span>書寫美觀</span>
                            </div>
                        </div>
                        <div className="auto">
                            &nbsp;
                        </div>
                    </div>
                    <div className="img-slogan-box clear">
                        <div className="left bg-yi">
                            <div className="vertical-text">
                                <span>寓意美好</span>
                                <span>重名率底</span>
                            </div>
                        </div>
                        <div className="right bg-ming">
                            <div className="vertical-text">
                                <span>符合命盘</span>
                                <span>展现特质</span>
                            </div>
                        </div>
                        <div className="auto">
                            &nbsp;
                        </div>
                    </div>
                    <FantasyBorder text="一个好名字会给人带来" />
                    <dl>
                        <dt className="bg-dt1">一生运势</dt>
                        <dd>如虎添翼，锦上添花，更多关注和机会。</dd>
                        <dt className="bg-dt2">性格完善</dt>
                        <dd>一生良好的心理暗示、美好的预示。</dd>
                        <dt className="bg-dt3">五行平衡</dt>
                        <dd>弥补先天和助力后天成长的起始点。</dd>
                        <dt className="bg-dt4">意境层次</dt>
                        <dd>更多的想象空间，向上的引导。</dd>
                    </dl>
                </div>
                <Footer />
                <RyanDatePicker year="1990" month="01" day="01" startYear="1910" />
                <RyanLayerSelect />
            </section>
        );
    }

}

render(
    <Index />,
    document.getElementById('page-index')
);