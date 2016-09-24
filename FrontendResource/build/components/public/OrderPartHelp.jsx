import React, { Component } from 'react'

import * as config from '../../common/config'

import CommonTitleBorder from './CommonTitleBorder'

class OrderPartHelp extends Component {

    constructor() {
        super();
        this.state = {
            IMAGE_PATH: config.IMAGE_PATH
        };
    }

    render() {

        let state = this.state;

        return (
            <div className="order-part-help">
                <CommonTitleBorder text="选字说明" />
                <div className="help-title">
                    <strong>步骤一：</strong>
                    <span>选择首字</span>
                </div>
                <div className="img-box">
                    <img src={ state.IMAGE_PATH + 'step1.jpg' } alt="step1.jpg"/>
                </div>
                <div className="help-arrow"></div>

                <div className="help-title">
                    <div>
                        <strong>步骤二：</strong>
                        <span>支付方式</span>
                    </div>
                    <div className="sub-title">
                        <span>点击立刻支付并</span><br/>
                        <span>选择你的支付方式</span><br/>
                        <span>进行支付</span>
                    </div>
                </div>
                <div className="img-box">
                    <img src={ state.IMAGE_PATH + 'step2.jpg' } alt="step1.jpg"/>
                </div>
                <div className="help-arrow"></div>

                <div className="help-title">
                    <div>
                        <strong>步骤三：</strong>
                        <span>获得你的吉名</span>
                    </div>
                </div>
                <div className="img-box">
                    <img src={ state.IMAGE_PATH + 'step3.jpg' } alt="step1.jpg"/>
                </div>
                <div className="help-arrow"></div>

                <div className="help-title">
                    <div>
                        <strong>步骤四：</strong>
                        <span>获吉名详解</span>
                    </div>
                    <div className="sub-title">
                        点击吉名查看详解
                    </div>
                </div>
                <div className="img-box">
                    <img src={ state.IMAGE_PATH + 'step4.jpg' } alt="step1.jpg"/>
                </div>
            </div>
        );

    }

}

module.exports = OrderPartHelp;