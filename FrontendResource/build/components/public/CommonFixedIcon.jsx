import React, { Component } from 'react'

import cookie from '../../common/commonCookie'
import { IMAGE_PATH } from '../../common/config'

class CommonFixedIcon extends Component {

    render() {

        let divStyle = {
                position: 'fixed',
                top: '48%',
                right: '1rem',
                width: '5.625rem',
                height: '4.265939597315437rem',
                background: 'transparent url("' + IMAGE_PATH + 'daShiQingSuanIcon.png") no-repeat center',
                WebkitBackgroundSize: '100% 100%',
                backgrouindSize: '100% 100%'
            },
            aStyle = {
                display: 'block',
                width: '100%',
                height: '100%'
            };

        return (
            <div style={divStyle}>
                <a style={aStyle} href={"http://shop.linghit.com/named.html?channel=" + (cookie.getItem('_channel') || 'mlinghit')}></a>
            </div>
        );

    }

}

module.exports = CommonFixedIcon;