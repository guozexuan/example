import React,{Component} from 'react';

class CommonLoadingLayer extends Component {
    constructor() {
        super();
        this.state = {
            //text: this.props.text || '正在努力加载中...'
        };
    }

    render() {
        let compatibilityPath = '/forecastbazixiangpibundle';
        return  <div className='common-loading-layer'>
                    <div className="back"></div>
                    <div className="front">
                        <div className="img">
                            <img src={compatibilityPath + "/images/loading.gif"} alt="loading" />
                        </div>
                        <div className="text">
                            <span>{this.props.text || '正在努力加载中...'}</span>
                        </div>
                    </div>
                </div>;
    }
}

export default CommonLoadingLayer;