import React,{Component} from 'react';
import {findDOMNode} from 'react-dom';


let OneLiItem = React.createClass({

    render: function() {
        var data = this.props.data,
            className = 'current' == data.class ? 'layer-select-right current' : 'layer-select-right';
        return (
            <li className="layer-select-item" data-time={data.value} data-id={data.id} onClick={this.props.event}>
                <div className={className}>
                    <span>
                        <i></i>
                    </span>
                </div>
                <div className="layer-select-auto">{data.text}</div>
            </li>
        );
    }
});

var RyanLayerSelect = React.createClass({

    getInitialState: function() {
        return {
            displayFlag: false,    //true->block, false->none
            selectedTime: 0,    //对应layerListData元素的id值
            selectedTimeId: 0,
            selectedText: "时辰不清楚",
            layerListConfigData: [
                {id: 0,value:0,text:"时辰不清楚"},
                {id: 1,value:23,text:"子时    23点"},
                {id: 2,value:0,text:"子时    0点"},
                {id: 3,value:1,text:"丑时    1点"},
                {id: 4,value:2,text:"丑时    2点"},
                {id: 5,value:3,text:"寅时    3点"},
                {id: 6,value:4,text:"寅时    4点"},
                {id: 7,value:5,text:"卯时    5点"},
                {id: 8,value:6,text:"卯时    6点"},
                {id: 9,value:7,text:"辰时    7点"},
                {id: 10,value:8,text:"辰时    8点"},
                {id: 11,value:9,text:"巳时    9点"},
                {id: 12,value:10,text:"巳时    10点"},
                {id: 13,value:11,text:"午时    11点"},
                {id: 14,value:12,text:"午时    12点"},
                {id: 15,value:13,text:"未时    13点"},
                {id: 16,value:14,text:"未时    14点"},
                {id: 17,value:15,text:"申时    15点"},
                {id: 18,value:16,text:"申时    16点"},
                {id: 19,value:17,text:"酉时    17点"},
                {id: 20,value:18,text:"酉时    18点"},
                {id: 21,value:19,text:"戌时    19点"},
                {id: 22,value:20,text:"戌时    20点"},
                {id: 23,value:21,text:"亥时    21点"},
                {id: 24,value:22,text:"亥时    22点"}
            ],
            layerListUseData: []
        };
    },

    generateLayerListData: function(selectedTime) {
        var time = selectedTime || 0,
            data = this.state.layerListConfigData,
            tmpData = [],
            i,
            len = data.length;
        for(i = 0; i < len; i ++) {
            var obj = data[i];
            obj.class =  obj.id === time? 'current' : '';
            tmpData.push(obj);
        }
        this.setState({
            layerListUseData: tmpData
        });
        this.forceUpdate();
    },

    /**
     * 设置容器为设置高度
     */
    setContainerHeightFixed: function() {
        var deviceHeight = document.documentElement.clientHeight,
            $container = document.getElementsByClassName('container')[0];
        /*if(/UCBrowser/g.test(navigator.userAgent)) {
         deviceHeight += 20;
         }*/
        $container.style.height = deviceHeight + 'px';
    },

    /**
     * 设置容器为内容高度
     */
    setContainerHeightAuto: function() {
        var $container = document.getElementsByClassName('container')[0],
            $wrap = $container.getElementsByClassName('wrap')[0],
            wrapHeight = $wrap.clientHeight;
        $container.style.height = wrapHeight + 'px';
    },

    setListBoxHeight: function() {
        var listFatherHeight = document.documentElement.clientHeight * .86,
            listBoxHeight = listFatherHeight - 16 - 48- 8 ;    //16为上下padding 48为btn box 高度, 8为预留空隙
        this.refs.listBox.style.height = listBoxHeight + 'px';
    },

    /**
     * 打开LayerSelect
     */
    openLayerSelect: function(value, dataValue, dataId) {
        this.setState({
            selectedTime: dataValue,
            selectedTimeId: dataId,
            selectedText: value
        });
        this.generateLayerListData( parseInt(dataId, 10) );
        //this.setListBoxHeight ();
        this.setState({
            displayFlag: true
        });
    },

    /**
     * 关闭LayerSelect
     */
    closeLayerSelect: function() {
        this.setState({
            displayFlag: false
        });
    },

    /**
     * 获取dom祖先级元素最近的类中包含className的
     * @param dom
     * @param className
     * @returns {*}
     */
    getClosestDomByClassName: function(dom, className) {
        var reg = new RegExp(className, 'g');
        if(dom.className.match(reg)) {
            return dom;
        }
        return this.getClosestDomByClassName(dom.parentNode, className);
    },

    eventItemClickHandle: function(event) {
        var $dom = event.target || event.srcElement,
            $item = this.getClosestDomByClassName($dom, 'layer-select-item'),
            id = parseInt($item.getAttribute('data-id'), 10),
            value = parseInt($item.getAttribute('data-time'), 10),
            text = $item.innerText || $item.textContent;
        this.setState({
            selectedTime: value,
            selectedTimeId: id,
            selectedText: text
        });
        this.generateLayerListData(id);
    },

    eventConfirmClickHandle: function() {
        var value = this.state.selectedText + '',
            dataValue = this.state.selectedTime + '',
            dataId = this.state.selectedTimeId + '';
        window.ens.gotBirthTime.dispatch(value, dataValue, dataId);
        this.closeLayerSelect();
    },

    componentWillMount: function() {
        this.generateLayerListData();
        window.ens.selectLayerShown.add(this.openLayerSelect);
    },

    componentWillUnmount: function() {
        window.ens.selectLayerShown.remove(this.openLayerSelect);
    },

    render: function() {
        var that = this,
            style = {
                display: this.state.displayFlag ? 'block' : 'none'
            };
        return (
            <div className="ryan-layer-select" style={style}>
                <div className="back" style={style} onClick={this.closeLayerSelect}></div>
                <div className="front" style={style} ref="listFather">
                    <div className="layer-select-box" ref="listBox">
                        <ul>
                            {this.state.layerListUseData.map(function(value, key) {
                                return <OneLiItem key={key} data={value} event={that.eventItemClickHandle} />
                            })}
                        </ul>
                    </div>
                    <div className="btn">
                        <span className="leftBtn" onClick={this.closeLayerSelect}>取消</span>
                        <span onClick={this.eventConfirmClickHandle}>确认</span>
                    </div>
                </div>
            </div>
        );
    }
});

export default RyanLayerSelect;