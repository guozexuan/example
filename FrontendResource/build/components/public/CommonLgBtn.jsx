import React, { Component } from 'react'

class CommonLgBtn extends Component {

    render() {

        let style = {
            textAlign: 'center',
            height: '2.5rem',
            lineHeight: '2.5rem',
            background: this.props.background || '#ef5946',
            color: this.props.color || '#fff',
            fontSize: '1rem',
            margin: this.props.margin || '.5rem 1rem',
            cursor: 'pointer',
            WebkitBorderRadius: '.25rem',
            MozBorderRadius: '.25rem',
            OBorderRadius: '.25rem',
            borderRadius: '.25rem'
        };

        return (
            <div style={style}
                 onClick={ this.props.event }
                >
                {this.props.text}
            </div>
        );

    }

}

module.exports = CommonLgBtn;