import React from 'react';

class Footer extends React.Component {

    render() {

        let divStyle = {
                padding: '.625rem 1.4375rem',
                background: '#cea373',
                color: '#fff',
                fontSize: '.75rem',
                textAlign: 'center'
            },
            aStyle = {
                color: '#fff',
                textDecoration: 'underline'
            };

        return (
            <div style={divStyle}>
                <span>灵机文化合作大师团队倾力打造，</span>
                <a href="http://zxcs.linghit.com/Index/team" style={aStyle}>查看專家團簡介</a><br/>
                <span>更多测算信息、问题反馈，请微信关注[灵机文化]</span><br/>
                <span>邮箱:customer@linghit.com 电话:13360019610</span>
            </div>
        );
    };
}

module.exports = Footer;