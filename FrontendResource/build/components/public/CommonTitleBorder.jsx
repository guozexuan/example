import React, { Component } from 'react'

class CommonTitleBorder extends Component {

    render() {

        let h = 58/32 + 'rem',
            boxStyle = {
                background: '#cea373',
                height: h,
                lineHeight: h,
                fontSize: '.875rem',
                color: '#fff',
                margin: this.props.margin || '.5rem',
                WebkitBorderRadius: '.25rem',
                MozBorderRadius: '.25rem',
                OBorderRadius: '.25rem'
            },
            leftStyle = {
                float: 'left',
                width: (38/32) + 'rem',
                fontSize: (64/32) + 'rem',
                textAlign: 'center'
            },
            autoStyle = {
                overflow: 'hidden'
            };

        return (
            <div style={boxStyle}>
                <div style={leftStyle}>
                    ·
                </div>
                <div style={autoStyle}>
                    {this.props.text}
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        );

    }

}

module.exports = CommonTitleBorder;