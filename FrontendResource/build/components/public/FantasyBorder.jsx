import React, { Component } from 'react'

import { CSS_IMAGE_PATH } from '../../common/config'

class FantasyBorder extends Component {

    render() {

        let style = {
            background: 'transparent url(' + CSS_IMAGE_PATH + 'fantasyBorder.png) no-repeat center',
            WebkitBackgroundSize: '16.4375rem 2.5rem',
            MozBackgroundSize: '16.4375rem 2.5rem',
            OBackgroundSize: '16.4375rem 2.5rem',
            color: '#fff',
            fontSize: '1rem',
            width: '16.4375rem',
            height: '2.5rem',
            lineHeight: '2.5rem',
            textAlign: 'center',
            cursor: 'pointer',
            WebkitBorderRadius: '.25rem',
            MozBorderRadius: '.25rem',
            OBorderRadius: '.25rem',
            borderRadius: '.25rem',
            margin: this.props.margin || '0 auto'
        };

        return (
            <div style={style}>
                {this.props.text}
            </div>
        );

    }

}

module.exports = FantasyBorder;