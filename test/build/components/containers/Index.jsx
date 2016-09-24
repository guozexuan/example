import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../less/containers/Index';

import * as config from '../../common/config'
import CommonVideoComponents from '../public/CommonVideoComponents'

class Index extends Component {

    constructor() {  //constructor是java中用于创建指定类型实例对象的必要方法
        super();  //调用父类的构造方法，一定要放在方法的首个语句
        this.state = {
            //todo
            IMG_URL: config.IMAGE_PATH
        }
    }

    render() {
        return (
            <section>
                <nav className="nav">
                    <ul className="tab clear">
                        <li className="current">
                            <a href="#">2016紫微流年</a>
                            <span></span>
                        </li>
                        <li>
                            <a href="#">订单查询</a>
                        </li>
                    </ul>
                </nav>
                <div className="banner">
                    {/*<img src={ this.state.IMG_URL + 'banner.jpg' } alt=""/>*/}
                    <img src="../dist/images/banner.jpg" alt=""/>
                </div>
                <CommonVideoComponents src="http://v.qq.com/iframe/player.html?vid=a0314n1mlij&tiny=0&auto=0"/>
                <section className="box">
                    <div className="box-top">
                        <div className="left box-top-left">

                        </div>
                        <div className="right box-top-right"></div>
                        <div className="auto box-top-middle">分析流年八大主体运势</div>
                    </div>
                </section>
            </section>
        )
    }

}

render(
    <Index />,
    document.getElementById('page-index')
);


