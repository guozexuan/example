import React, { Component } from 'react'

import { PAGE_URL } from '../../common/config'

class CommonMineHeader extends Component {

     render() {

        return (
            <div className="common-mine-header">
                <div className="left"
                     onClick={() => {
                        history.go(-1);
                     }}
                    >&nbsp;</div>
                <div className="right">
                    <span className="my-order"
                          onClick={() => {
                              location.href = PAGE_URL.QUERY;
                          }}
                        >我的订单</span>
                </div>
                <div className="auto">
                    <a href={PAGE_URL.LINGHit}>靈接觸網</a>
                    <span>·</span>
                    <a href={PAGE_URL.INDEX}>心動起名</a>
                </div>
            </div>
        );

    }

}

module.exports = CommonMineHeader;