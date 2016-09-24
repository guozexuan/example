import React,{Component} from 'react';

class CommonTipLayer extends Component {
    render() {
        return (
            <section className="common-tip-layer">
                <div className="back"></div>
                <div className="front">
                    <span>{this.props.text}</span>
                </div>
            </section>
        );
    }
}

export default CommonTipLayer;