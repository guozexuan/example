import React, { Component } from 'react'

import {trim , convertObjectToSearch} from '../../common/commonTools'
//import jf from '../../common/commonJF'
import * as validate from '../../common/commonValidate'
import * as config from '../../common/config'

import CommonLgBtn from './CommonLgBtn'
import CommonTipLayer from './CommonTipLayer'

class IndexPartName extends Component {

    constructor() {

        let now = new Date(),
            year = now.getFullYear(),
            month = now.getMonth() + 1,
            day = now.getDate();
        month = month < 10 ? '0' + month : '' + month;
        day = day < 10 ? '0' + day : '' + day;

        super();
        this.state = {

            PAGE_URL: config.PAGE_URL,

            birthDay: '公历 ' + year + '-' + month + '-' + day,    //格式要满足才行
            birthTimeValue: '时辰不清楚',
            birthTimeDataId: '0',
            birthTimeDataValue: '0',    //时辰提交值

            familyname: '',
            phone: '',
            email: '',
            gender: 1,    //男1   女0
            send_email: 1,    //1发送邮件，0不发送邮件

            validate: validate,

            tipFlag: false,
            tipText: ''
            //loadingFlag: false,
            //loadingText: ''

        };
    }

    inputChangeHandle(event) {
        let target = event.target,
            value = target.value,
            type =  target.getAttribute('data-type'),
            setState = {};
        setState[type] = trim(value);
        this.setState(setState);
    }

    setTipShowAndHide(tipText, time) {
        let self = this;
        time = time || 1500;
        this.setState({
            tipFlag: true,
            tipText: tipText
        });
        setTimeout(function() {
            self.setState({
                tipFlag: false,
                tipText: ''
            });
        }, time)
    }

    genderClickHandle( gender ) {
        let lastGender = this.state.gender;
        if( lastGender !== gender ) {
            this.setState({
                gender: gender
            });
        }
    }

    sendEmailClickHandle() {
        let lastFlag = this.state.send_email;
        this.setState({
            send_email: lastFlag === 1 ? 0 : 1
        });
    }

    //事件：选择出生日期点击事件
    eventBirthDayInputClickHandle() {
        let date = this.state.birthDay.split(' ')[1];
        ens.datePickerShown.dispatch(date);
    }

    //设置出生日期
    setBirthDay(birthDay) {
        this.setState({
            birthDay: birthDay
        });
    }

    //事件： 选择出生时辰点击事件    男性
    eventBirthTimeInputClickHandle() {
        let value = this.state.birthTimeValue,
            dataValue = this.state.birthTimeDataValue,
            dataId = this.state.birthTimeDataId;
        ens.selectLayerShown.dispatch(value, dataValue, dataId);
    }

    //设置出生时辰    男性
    setBirthTime(value, dataValue, dataId) {
        this.setState({
            birthTimeValue: value,
            birthTimeDataValue: dataValue,
            birthTimeDataId: dataId
        });
    }

    validateFamilyName() {
        let familyName = this.state.familyname,
            validate = this.state.validate,
            isNotEmpty = validate.isNotEmpty( familyName ),
            isChinese = validate.isChinese( familyName ),
            flag =  isNotEmpty && isChinese,
            tip;

        if( !isNotEmpty ) {
            tip = '姓氏不能为空';
        }
        if( !isChinese ) {
            tip = '姓氏必须为中文';
        }

        return {
            value: familyName,
            flag: flag,
            tip: flag ? '' : tip
        };
    }

    validatePhone() {
        let validate = this.state.validate,
            phone = this.state.phone,
            flag = validate.isNotEmpty( phone ) && validate.isCellPhone( phone );

        return {
            value: phone,
            flag: flag,
            tip: flag ? '' : '手机不能为空或格式不正确！'
        };
    }

    validateEmail() {
        let validate = this.state.validate,
            email = this.state.email,
            flag = validate.isNotEmpty( email ) && validate.isEmail( email );

        return {
            value: email,
            flag: flag,
            tip: flag ? '' : '邮箱不能为空或格式不正确！'
        };
    }

    static mergeBirthdayAndBirthTime( birthday, birthtime ) {
        birthday = birthday.split(' ')[1].replace(/\-/g, '');
        birthtime = birthtime < 10 ? '0' + birthtime : '' + birthtime;
        return birthday + birthtime;
    }

    validateAll() {
        let state = this.state,
            family_name = this.validateFamilyName(),
            phone = this.validatePhone(),
            email = this.validateEmail();
        if( !family_name.flag ) {
            this.setTipShowAndHide( family_name.tip );
            return false;
        }
        if( phone.value && !phone.flag ) {
            this.setTipShowAndHide( phone.tip );
            return false;
        }
        if( state.send_email && !email.flag ) {
            this.setTipShowAndHide( email.tip );
            return false;
        }
        return {
            familyname: family_name.value,
            birth: IndexPartName.mergeBirthdayAndBirthTime( state.birthDay, state.birthTimeDataValue ),
            gender: state.gender,
            phone_number: phone.value || '',
            send_sms: 0,
            email: email.value || '',
            send_email: state.send_email
        };
    }

    submitBtnClickHandle() {

        let query = this.validateAll();

        if( !query ) {
            return null;
        }

        query = convertObjectToSearch( query );

        location.href = this.state.PAGE_URL.ORDER + query;

    }

    componentWillMount() {
        window.ens.gotBirthDay.add(this.setBirthDay.bind(this));
        window.ens.gotBirthTime.add(this.setBirthTime.bind(this));
    }

    componentWillUnmount() {
        window.ens.gotBirthDay.remove(this.setBirthDay.bind(this));
        window.ens.gotBirthTime.remove(this.setBirthTime.bind(this));
    }

    render() {

        let self = this,
            state = this.state;

        return (
            <div className="index-part-name">
                {/*<div className="form-slogan">
                    起个好名字！
                </div>*/}
                <div className="form-box">
                    <ul>
                        <li className="clear active">
                            <div className="left">您的姓氏</div>
                            <div className="auto">
                                <input data-type="familyname"
                                       type="text"
                                       value={state.familyname}
                                       onChange={this.inputChangeHandle.bind(this)}
                                       maxLength="2"
                                       placeholder="请输入姓氏（汉字）"
                                    />
                            </div>
                        </li>
                        <li className="clear">
                            <div className="left">出生日期</div>
                            <div className="auto">
                                <input type="text"
                                       value={state.birthDay}
                                       data-last-date={state.birthDay}
                                       onClick={this.eventBirthDayInputClickHandle.bind(this)}
                                       onFocus={ (event) => {
                                                event.target.blur();
                                            }}
                                       name="date"
                                       readOnly="readonly"
                                       placeholder="请选择（公历日期）"
                                    />
                            </div>
                        </li>
                        <li className="clear">
                            <div className="left">出生时辰</div>
                            <div className="auto">
                                <input value={state.birthTimeValue}
                                       data-value={state.birthTimeDataValue}
                                       data-id={state.birthTimeDataId}
                                       onClick={this.eventBirthTimeInputClickHandle.bind(this)}
                                       onFocus={ (event) => {
                                                event.target.blur();    //safari下input readonly show cursor
                                            }}
                                       readOnly="readonly"
                                       placeholder="请选择出生时辰"
                                    />
                            </div>
                        </li>
                        <li className="clear">
                            <div className="left">您的性别</div>
                            <span className={ "radio" + (state.gender === 1 ? ' checked' : '') }
                                  onClick={this.genderClickHandle.bind(this, 1)}
                                >
                            <i>&nbsp;</i></span>
                            <span className="mr-l pointer"
                                  onClick={this.genderClickHandle.bind(this, 1)}
                                >男</span>
                            <span className={ "radio" + (state.gender === 0 ? ' checked' : '') }
                                  onClick={this.genderClickHandle.bind(this, 0)}
                                >
                            <i>&nbsp;</i></span>
                            <span className="pointer"
                                  onClick={this.genderClickHandle.bind(this, 0)}
                                >女</span>
                        </li>
                        {/*<li className="clear">
                            <div className="left">您的手机</div>
                            <div className="auto">
                                <input data-type="phone"
                                       type="text"
                                       value={state.phone}
                                       onChange={this.inputChangeHandle.bind(this)}
                                       placeholder="选填"
                                    />
                            </div>
                        </li>*/}
                        <li className="clear">
                            <div className="left">您的邮箱</div>
                            <div className="auto">
                                <input data-type="email"
                                       type="text"
                                       value={state.email}
                                       onChange={this.inputChangeHandle.bind(this)}
                                       placeholder="输入邮箱方便随时查看结果"
                                    />
                            </div>
                        </li>
                    </ul>
                    <div className="check-box">
                        <span className={"checkbox" + (state.send_email ? ' checked' : '')}
                              onClick={this.sendEmailClickHandle.bind(this)}
                            ></span>
                        <span onClick={this.sendEmailClickHandle.bind(this)}>
                            同意<a href="/individualPrivacy/index" style={{color:'#333',textDecoration: 'underline'}}>"个人隐私协议"</a>,把测算信息邮件发至您的邮箱
                        </span>
                    </div>
                    <CommonLgBtn text="马上起名" margin=".5rem 0"
                                 event={this.submitBtnClickHandle.bind(self)}
                        />
                    {
                        state.tipFlag &&
                            <CommonTipLayer text={state.tipText} />
                    }
                </div>
            </div>
        );
    }

}

module.exports = IndexPartName;