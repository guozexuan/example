import React, { Component } from 'react'

import CommonTitleBorder from './CommonTitleBorder'

class NameAnalysisPartSanCaiWuGe extends Component {

    constructor(props) {
        super(props);
        this.state = {

            gongLeft: [
                { name: '迁移宫', number: 1, wuxing: '木'}, { name: '迁移宫', number: 1, wuxing: '木'}
            ],
            gongRight: [
                {
                    class: 'right-color-tu',
                    name: '父母宫',
                    number: 4,
                    wuxing: '土'
                },
                {
                    class: 'right-color-tu',
                    name: '父母宫',
                    number: 4,
                    wuxing: '土'
                },
                {
                    class: 'right-color-tu',
                    name: '父母宫',
                    number: 4,
                    wuxing: '土'
                }
            ],
            gongCenter: [
                { number: '(1)', word: ''}, { number: 4, word: '天'}, { number: 4, word: '天'}, { number: '(1)', word: ''}
            ]

        };
    }

    generateWuGeWugXingBgClassName( jiXiong ) {

        let className = '';

        if( !jiXiong ) {
            return className;
        }

        switch( jiXiong ) {
            case '大吉':
                className = 'da-ji';
                break;
            case '小吉':
                className = 'xiao-ji';
                break;
            case '大凶':
                className = 'da-xiong hide';
                break;
            case '小凶':
                className = 'xiao-xiong hide';
                break;
            case '凶':
                className = 'da-xiong hide';
                break;
            default:
                className = 'da-ji';

        }
        return className;
    }

    generateWuXingBgColor( wuXing ) {
        let className = '';
        if( !wuXing ) {
            return className;
        }

        switch( wuXing ) {
            case '金':
                className = 'jin';
                break;
            case '木':
                className = 'mu';
                break;
            case '水':
                className = 'shui';
                break;
            case '火':
                className = 'huo';
                break;
            case '土':
                className = 'tu';
                break;
        }
        return className;
    }

    dealNameWords( nameWords, familyName ) {

        let len, empty, newNameWords;

        if(
            !(
                nameWords &&
                ( '[object Array]' === Object.prototype.toString.apply( nameWords ) )
            )
        ) {
            return [];
        }

        newNameWords = [].concat( nameWords );

        len = newNameWords.length;
        empty = {
            jianTi: '',
            fanTi: '',
            biHuaJianTi: 1,
            biHuaFanTi: 1
        };

        let familyNameLen = familyName.length;

        if( 1 === familyNameLen ) {
            if( len === 0 ) {
                return [];
            } else if( len === 1 ) {
                newNameWords.unshift( empty );
                newNameWords.push( empty );
                newNameWords.push( empty );

            } else if( 2 === len ) {
                newNameWords.unshift( empty );
                newNameWords.push( empty );
            } else if( 3 === len ) {
                newNameWords.unshift( empty );
            }
        } else if( 2 === familyNameLen ) {
            if( len === 0 ) {
                return [];
            } else if( len === 1 ) {
                newNameWords.unshift( empty );
                newNameWords.push( empty );
                newNameWords.push( empty );

            } else if( 2 === len ) {
                newNameWords.unshift( empty );
                newNameWords.push( empty );
            } else if( 3 === len ) {
                newNameWords.push( empty );
            }
        }



        return newNameWords;

    }

    render() {

        let state = this.state,
            newNameWords,
            { sanCai, wuGe, nameWords, familyName } = this.props;

        newNameWords = this.dealNameWords( nameWords, familyName );

        return(
            <div className="san-cai">
                <CommonTitleBorder text="五格分析" />
                <div className="wu-ge-box">
                    <div className="ming-gong-box">
                        {/*<div className="left"></div>*/}
                        {/*<div className="right"></div>*/}
                        <div className="auto">
                            <div className="ming-gong">
                                <div className="left">
                                    <div className="left-text-box">
                                        <span>外格{wuGe && wuGe.waiGe && wuGe.waiGe.column}</span><br/>
                                        <span>({wuGe && wuGe.waiGe && wuGe.waiGe.wuXing})</span>
                                    </div>
                                    {/*
                                        state.gongLeft &&
                                        state.gongLeft.map(function(val, key) {
                                            return (
                                                <div key={key} className={"left-circle mt-c" + (key + 1)}>
                                                    <div className="left-circle-outer">
                                                        <div className="left-circle-inner">
                                                            <div className="left-circle-content">
                                                                <span>{val.name}</span>
                                                                <br/>
                                                                <span>{val.number}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                     */}
                                </div>
                                <div className="right">
                                    <div className={"right-circle-box"}>
                                        <div className="right-circle">
                                            <div className="right-circle-content">
                                                <span>
                                                    天格{wuGe && wuGe.tianGe && wuGe.tianGe.column}
                                                    ({wuGe && wuGe.tianGe && wuGe.tianGe.wuXing})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"right-circle-box"}>
                                        <div className="right-circle">
                                            <div className="right-circle-content">
                                                <span>
                                                    人格{wuGe && wuGe.renGe && wuGe.renGe.column}
                                                    ({wuGe && wuGe.renGe && wuGe.renGe.wuXing})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"right-circle-box"}>
                                        <div className="right-circle">
                                            <div className="right-circle-content">
                                                <span>
                                                    地格{wuGe && wuGe.diGe && wuGe.diGe.column}
                                                    ({wuGe && wuGe.diGe && wuGe.diGe.wuXing})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="auto ming-gong-center">
                                    <div className="left"></div>
                                    <div className="right">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="auto">
                                        {
                                            newNameWords && newNameWords.length > 0 &&
                                            newNameWords.map(function(val, key) {
                                                return (
                                                    <div key={key} className="name-box">
                                                        <div>{val.jianTi}</div>
                                                        <div>
                                                            <span>&nbsp;</span>
                                                            <span>{val.biHuaFanTi}</span>
                                                            <span>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zong-ge clear">
                            总格{wuGe && wuGe.zongGe && wuGe.zongGe.column}
                            ({wuGe && wuGe.zongGe && wuGe.zongGe.wuXing})
                        </div>
                    </div>
                    <ul className="wu-ge-list">
                        <li className="clear">
                            <div className="right">
                                <div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(wuGe && wuGe.tianGe && wuGe.tianGe.jiXiong)}>
                                    {wuGe && wuGe.tianGe && wuGe.tianGe.jiXiong}
                                </div>
                            </div>
                            <div className="auto">
                                <div className="text1">
                                    <span className="stress">天格</span>
                                    <span>主掌祖传运势</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{wuGe && wuGe.tianGe && wuGe.tianGe.column}画</span>
                                </div>
                                <div>
                                    {wuGe && wuGe.tianGe && wuGe.tianGe.content}
                                </div>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="right">
                                <div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(wuGe && wuGe.renGe && wuGe.renGe.jiXiong)}>
                                    {wuGe && wuGe.renGe && wuGe.renGe.jiXiong}
                                </div>
                            </div>
                            <div className="auto">
                                <div className="text1">
                                    <span className="stress">人格</span>
                                    <span>主掌主体运势</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{wuGe && wuGe.renGe && wuGe.renGe.column}画</span>
                                </div>
                                <div className="text2">
                                    {wuGe && wuGe.renGe && wuGe.renGe.content}
                                </div>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="right">
                                <div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(wuGe && wuGe.diGe && wuGe.diGe.jiXiong)}>
                                    {wuGe && wuGe.diGe && wuGe.diGe.jiXiong}
                                </div>
                            </div>
                            <div className="auto">
                                <div className="text1">
                                    <span className="stress">地格</span>
                                    <span>主掌早年运势</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{wuGe && wuGe.diGe && wuGe.diGe.column}画</span>
                                </div>
                                <div className="text2">
                                    {wuGe && wuGe.diGe && wuGe.diGe.content}
                                </div>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="right">
                                <div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(wuGe && wuGe.waiGe && wuGe.waiGe.jiXiong)}>
                                    {wuGe && wuGe.waiGe && wuGe.waiGe.jiXiong}
                                </div>
                            </div>
                            <div className="auto">
                                <div className="text1">
                                    <span className="stress">外格</span>
                                    <span>主掌中年运势</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{wuGe && wuGe.waiGe && wuGe.waiGe.column}画</span>
                                </div>
                                <div className="text2">
                                    {wuGe && wuGe.waiGe && wuGe.waiGe.content}
                                </div>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="right">
                                <div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(wuGe && wuGe.zongGe && wuGe.zongGe.jiXiong)}>
                                    {wuGe && wuGe.zongGe && wuGe.zongGe.jiXiong}
                                </div>
                            </div>
                            <div className="auto">
                                <div className="text1">
                                    <span className="stress">总格</span>
                                    <span>主掌晚年运势</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{wuGe && wuGe.zongGe && wuGe.zongGe.column}画</span>
                                </div>
                                <div className="text2">
                                    {wuGe && wuGe.zongGe && wuGe.zongGe.content}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <CommonTitleBorder text="三才分析" />
                <div className="san-cai-box">
                    <ul className="circle-list">
                        <li className={this.generateWuXingBgColor( sanCai && sanCai.sanCai && sanCai.sanCai.tian )}>
                            <div className="text">天才</div>
                            <div>【{sanCai && sanCai.sanCai && sanCai.sanCai.tian}】</div>
                        </li>
                        <li className={this.generateWuXingBgColor( sanCai && sanCai.sanCai && sanCai.sanCai.ren )}>
                            <div className="text">人才</div>
                            <div>【{sanCai && sanCai.sanCai && sanCai.sanCai.ren}】</div>
                        </li>
                        <li className={this.generateWuXingBgColor(sanCai && sanCai.sanCai && sanCai.sanCai.di)}>
                            <div className="text">地才</div>
                            <div>【{sanCai && sanCai.sanCai && sanCai.sanCai.di}】</div>
                        </li>
                    </ul>
                    <div className="detail-box">
                        {/*<div className={"ji-xiong-btn " + this.generateWuGeWugXingBgClassName(sanCai && sanCai.jiXiong)}>
                            {sanCai && sanCai.jiXiong}
                        </div>*/}
                        <p>
                            {sanCai && sanCai.hanYi}
                        </p>
                    </div>
                </div>
            </div>
        );

    }

}

module.exports = NameAnalysisPartSanCaiWuGe;