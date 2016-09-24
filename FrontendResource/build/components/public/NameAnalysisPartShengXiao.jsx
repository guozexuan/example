import React, { Component } from 'react'

import * as config from '../../common/config'

import CommonTitleBorder from  './CommonTitleBorder'

class NameAnalysisPartShengXiao extends Component {

    constructor( props ) {

        super( props );
        this.state = {
            IMAGE_PATH: config.IMAGE_PATH
        };

    }

    getZodiacImg( zodiacPinYin ) {
        let img = '';
        switch( zodiacPinYin ) {
            case 'shu':
                img = 'zodiacShu.jpg';
                break;
            case 'niu':
                img = 'zodiacNiu.jpg';
                break;
            case 'hu':
                img = 'zodiacHu.jpg';
                break;
            case 'tu':
                img = 'zodiacTu.jpg';
                break;
            case 'long':
                img = 'zodiacLong.jpg';
                break;
            case 'she':
                img = 'zodiacShe.jpg';
                break;
            case 'ma':
                img = 'zodiacMa.jpg';
                break;
            case 'yang':
                img = 'zodiacYang.jpg';
                break;
            case 'hou':
                img = 'zodiacHou.jpg';
                break;
            case 'ji':
                img = 'zodiacJi.jpg';
                break;
            case 'gou':
                img = 'zodiacGou.jpg';
                break;
            case 'zhu':
                img = 'zodiac.jpg';
                break;

        }
        return img;
    }

    render() {

        let state = this.state,
            { zodiac, xiji, zodiacPinYin } = this.props;

        return (
            <div className="sheng-xiao">
                <div className="img-box">
                    <div className="img">
                        {
                            zodiacPinYin && zodiacPinYin.length > 0 &&
                            <img src={ state.IMAGE_PATH + this.getZodiacImg(zodiacPinYin) } alt="zodiac"/>
                        }
                    </div>
                    <div className="text">
                        生肖:{zodiac}
                    </div>
                </div>
                <CommonTitleBorder text="生肖喜用" />
                <div className="xi-yong-box" dangerouslySetInnerHTML={{
                    __html: xiji.xi
                }}>
                </div>
                <CommonTitleBorder text="生肖忌用" />
                <div className="ji-yong-box" dangerouslySetInnerHTML={{
                    __html: xiji.ji
                    }}>
                </div>
            </div>
        );

    }

}

module.exports = NameAnalysisPartShengXiao;