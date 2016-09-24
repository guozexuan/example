import React, { Component } from 'react'

class CommonVideoComponents extends Component {

    constructor( props ) {
        super( props );
        this.iframeBox = null;
        this.iframe = null;
        this.state = {
            iframeBoxHeight: undefined,
            iframeHeight: undefined
        };
    }

    componentDidMount() {
        let iframeBox = this.iframeBox,
            widthHeightRoot = 320/240,
            iframeHeight = iframeBox.clientWidth/widthHeightRoot,
            iframeBoxHeight =  iframeHeight - 6;

        this.setState({
            iframeBoxHeight: iframeBoxHeight + 'px',
            iframeHeight: iframeHeight + 'px'
        });
    }

    render() {

        var { props, state } = this;
        let boxStyle = {
                boxShadow: '0 0 .25rem #000',
                margin: props.margin || '0 .5rem .5rem',
                border: '2px solid #000',
                WebKitBorderRadius: '5px',
                MozBorderRadius: '5px',
                borderRadius: '5px'
            };

        return (
            <div style={boxStyle}>
                <div style={{
                          width: '100%',
                          height: state.iframeBoxHeight || 'auto',
                          margin: '0 auto .375rem'
                      }}
                    ref={(node) => {
                        this.iframeBox = node;
                    }}
                    >
                    <iframe frameBorder="0"
                       style={{
                              width: '100%',
                              height: state.iframeHeight || 'auto'
                          }}
                       src={props.src}
                       allowFullScreen
                        ></iframe>
                </div>
            </div>
        );

    }

}

module.exports = CommonVideoComponents;