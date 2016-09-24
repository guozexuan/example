import React, { Component } from 'react';
import { render } from 'react-dom';

//import './less/RyanDatePicker.less';

var OneDateItem = React.createClass({
    render: function() {
        var data = this.props.data;
            //eventClick = data.className === 'prevent' ? null : this.props.event;
        return (
            <div className={data.className}>{data.text}</div>
        );
    }
});

class RyanDatePicker extends Component {

    /**
     * 农历日期数据记录
     * 1890 - 2100 年的农历数据
     * 数据格式：[0,2,9,21936]
     * [闰月所在月，0为没有闰月; *正月初一对应公历月; *正月初一对应公历日; *农历每月的天数的数组（需转换为二进制,得到每月大小，0=小月(29日),1=大月(30日)）;]
     * @returns {*[]}
     */
    lunarRecord() {
        return [[2,1,21,22184],[0,2,9,21936],[6,1,30,9656],[0,2,17,9584],[0,2,6,21168],[5,1,26,43344],[0,2,13,59728],[0,2,2,27296],[3,1,22,44368],[0,2,10,43856],[8,1,30,19304],[0,2,19,19168],[0,2,8,42352],[5,1,29,21096],[0,2,16,53856],[0,2,4,55632],[4,1,25,27304],[0,2,13,22176],[0,2,2,39632],[2,1,22,19176],[0,2,10,19168],[6,1,30,42200],[0,2,18,42192],[0,2,6,53840],[5,1,26,54568],[0,2,14,46400],[0,2,3,54944],[2,1,23,38608],[0,2,11,38320],[7,2,1,18872],[0,2,20,18800],[0,2,8,42160],[5,1,28,45656],[0,2,16,27216],[0,2,5,27968],[4,1,24,44456],[0,2,13,11104],[0,2,2,38256],[2,1,23,18808],[0,2,10,18800],[6,1,30,25776],[0,2,17,54432],[0,2,6,59984],[5,1,26,27976],[0,2,14,23248],[0,2,4,11104],[3,1,24,37744],[0,2,11,37600],[7,1,31,51560],[0,2,19,51536],[0,2,8,54432],[6,1,27,55888],[0,2,15,46416],[0,2,5,22176],[4,1,25,43736],[0,2,13,9680],[0,2,2,37584],[2,1,22,51544],[0,2,10,43344],[7,1,29,46248],[0,2,17,27808],[0,2,6,46416],[5,1,27,21928],[0,2,14,19872],[0,2,3,42416],[3,1,24,21176],[0,2,12,21168],[8,1,31,43344],[0,2,18,59728],[0,2,8,27296],[6,1,28,44368],[0,2,15,43856],[0,2,5,19296],[4,1,25,42352],[0,2,13,42352],[0,2,2,21088],[3,1,21,59696],[0,2,9,55632],[7,1,30,23208],[0,2,17,22176],[0,2,6,38608],[5,1,27,19176],[0,2,15,19152],[0,2,3,42192],[4,1,23,53864],[0,2,11,53840],[8,1,31,54568],[0,2,18,46400],[0,2,7,46752],[6,1,28,38608],[0,2,16,38320],[0,2,5,18864],[4,1,25,42168],[0,2,13,42160],[10,2,2,45656],[0,2,20,27216],[0,2,9,27968],[6,1,29,44448],[0,2,17,43872],[0,2,6,38256],[5,1,27,18808],[0,2,15,18800],[0,2,4,25776],[3,1,23,27216],[0,2,10,59984],[8,1,31,27432],[0,2,19,23232],[0,2,7,43872],[5,1,28,37736],[0,2,16,37600],[0,2,5,51552],[4,1,24,54440],[0,2,12,54432],[0,2,1,55888],[2,1,22,23208],[0,2,9,22176],[7,1,29,43736],[0,2,18,9680],[0,2,7,37584],[5,1,26,51544],[0,2,14,43344],[0,2,3,46240],[4,1,23,46416],[0,2,10,44368],[9,1,31,21928],[0,2,19,19360],[0,2,8,42416],[6,1,28,21176],[0,2,16,21168],[0,2,5,43312],[4,1,25,29864],[0,2,12,27296],[0,2,1,44368],[2,1,22,19880],[0,2,10,19296],[6,1,29,42352],[0,2,17,42208],[0,2,6,53856],[5,1,26,59696],[0,2,13,54576],[0,2,3,23200],[3,1,23,27472],[0,2,11,38608],[11,1,31,19176],[0,2,19,19152],[0,2,8,42192],[6,1,28,53848],[0,2,15,53840],[0,2,4,54560],[5,1,24,55968],[0,2,12,46496],[0,2,1,22224],[2,1,22,19160],[0,2,10,18864],[7,1,30,42168],[0,2,17,42160],[0,2,6,43600],[5,1,26,46376],[0,2,14,27936],[0,2,2,44448],[3,1,23,21936],[0,2,11,37744],[8,2,1,18808],[0,2,19,18800],[0,2,8,25776],[6,1,28,27216],[0,2,15,59984],[0,2,4,27424],[4,1,24,43872],[0,2,12,43744],[0,2,2,37600],[3,1,21,51568],[0,2,9,51552],[7,1,29,54440],[0,2,17,54432],[0,2,5,55888],[5,1,26,23208],[0,2,14,22176],[0,2,3,42704],[4,1,23,21224],[0,2,11,21200],[8,1,31,43352],[0,2,19,43344],[0,2,7,46240],[6,1,27,46416],[0,2,15,44368],[0,2,5,21920],[4,1,24,42448],[0,2,12,42416],[0,2,2,21168],[3,1,22,43320],[0,2,9,26928],[7,1,29,29336],[0,2,17,27296],[0,2,6,44368],[5,1,26,19880],[0,2,14,19296],[0,2,3,42352],[4,1,24,21104],[0,2,10,53856],[8,1,30,59696],[0,2,18,54560],[0,2,7,55968],[6,1,27,27472],[0,2,15,22224],[0,2,5,19168],[4,1,25,42216],[0,2,12,42192],[0,2,1,53584],[2,1,21,55592],[0,2,9,54560]];
    }

    /**
     * 错误信息
     * @returns {{100: string, 101: string}}
     */
    errorCode() {
        return {
            100 : '输入的年份超过了可查询范围，仅支持1891至2100年',
            101 : '参数输入错误，请查阅文档'
        };
    }

    /**
     * 农历相关数据
     * @returns {{TIAN_GAN: string[], DI_ZHI: string[], SHENG_XIAO: string[], JIE_QI: string[], NONG_LI_YUE: string[], NONG_LI_RI: string[]}}
     */
    lunarData() {
        return {
            TIAN_GAN: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
            DI_ZHI: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
            SHENG_XIAO: ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'],
            JIE_QI: ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪','冬至'],
            NONG_LI_YUE: ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            NONG_LI_RI: ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '卅一']
        };
    }

    constructor( props ) {
        super( props );

        let now = new Date(),
            MaxDate = new Date( now.getFullYear() + 1, now.getMonth(), now.getDate() );

        let userDefaultSelectedYear = parseInt(this.props.year, 10),
            userDefaultSelectedMonth = parseInt(this.props.month, 10),
            userDefaultSelectedDay = parseInt(this.props.day, 10),
            currentYear = MaxDate.getFullYear(),
            startYear = parseInt(this.props.startYear, 10);
        startYear = startYear && startYear < currentYear ? startYear : 1910;
        let selectedYear = userDefaultSelectedYear &&
                userDefaultSelectedYear >= startYear &&
                userDefaultSelectedYear <= currentYear ?
                userDefaultSelectedYear: startYear,
            selectedMonth = userDefaultSelectedMonth &&
                userDefaultSelectedMonth >= 1 &&
                userDefaultSelectedMonth <=12 ?
                userDefaultSelectedMonth : 1,
            defaultMonthDays = this.getDaysByYearAndMonth(selectedYear, selectedMonth),
            selectedDay = userDefaultSelectedDay &&
                userDefaultSelectedDay >= 1 &&
                userDefaultSelectedDay <= defaultMonthDays ?
                userDefaultSelectedDay : 1;

        this.state = {
            mode: 0,    //0(公历) 1(阴历)
            minYear: 1890,    //农历支持的最早年份
            maxYear: 2100,    //农历支持的最晚的年份
            MaxDate: MaxDate,    //选择器可选的最大日期
            selectedYear: selectedYear,    //选中年份，公农历共用
            selectedMonth: selectedMonth,    //选中月份，公农历共用
            selectedDay: selectedDay,    //选中日，公农历共用

            solarYear: selectedYear,    //头部显示的公历年
            solarMonth: selectedMonth,    //头部显示的公历月
            solarDay: selectedDay,    //头部显示的公历日

            startYear: startYear,    //yearData开始年份,公农历共用
            endYear: MaxDate.getFullYear(),    //yearData结束年份，公农历共用

            yearData: [],
            monthData: [],
            dayData: [],

            yearTimer: 0,
            monthTimer: 0,
            dayTimer: 0,

            displayFlag: false
        };
    }

    /**
     * 判断农历年闰哪一个月
     * @param year {Number} 农历年
     * @returns {*} 闰哪一个月（0表示该年没有闰月）
     */
    getLunarLeapMonth( year ) {
        return this.lunarRecord()[year - this.state.minYear][0];
    }

    /**
     * 通过阳历日期获取对应的农历日期
     * @param year {Number} 阳历年
     * @param month {Number} 阳历月
     * @param day {Number} 阳历日
     * @returns {*} 农历年月日数组
     */
    getLunarDateByDaysBetweenFirstDayOfLunar( year, month, day ) {
        let yearData = this.lunarRecord()[year - this.state.minYear],
            firstMonthOfLunar = yearData[1],
            firstDayOfLunar = yearData[2],
            between = this.getDaysBetweenTwoSolarDate(
                year,
                firstMonthOfLunar - 1,
                firstDayOfLunar,
                year,
                month,
                day
            );
        if( 0 === between ) {
            return [year, 0, 1];
        } else {
            let lunarYear = between > 0 ? year : ( year -1 );
            return this.getLunarDateByBetweenDays( lunarYear, between );
        }
    }

    /**
     * 通过农历年，和与年初一的间隔天数，获取农历日期
     * @param lunarYear {Number} 农历年
     * @param between {Number} 与年初一的间隔天数
     * @returns {*[]} 农历日期数组
     */
    getLunarDateByBetweenDays( lunarYear, between ) {
        let lunarYearDays = this.getLunarDaysOfMonthsAndYearDays( lunarYear ),
            end = between > 0 ? between : lunarYearDays.yearDays - Math.abs( between ),
            monthDays = lunarYearDays.monthDays,
            tempDays = 0,
            month = 0;
        for( var i = 0; i <　monthDays.length; i ++) {
            tempDays += monthDays[i];
            if( tempDays > end ) {
                month = i;
                tempDays = tempDays - monthDays[i];
                break;
            }
        }
        return [lunarYear, month, end - tempDays + 1]
    }

    /**
     * 获取两个阳历日期间的天数
     * @param year {Number} 第一个日期阳历年
     * @param month {Number} 第一个日期阳历月
     * @param day {Number} 第一个日期阳历日
     * @param year1 {Number} 第二个日期阳历年
     * @param month1 {Number} 第二个日期阳历月
     * @param day1 {Number} 第二个日期阳历日
     * @returns {number} 间隔天数
     */
    getDaysBetweenTwoSolarDate( year, month, day, year1, month1, day1 ) {
        let date = new Date( year, month, day ).getTime(),
            date1 = new Date( year1, month1, day1).getTime();
        return (date1 - date) / 86400000;
    }

    /**
     * 获取农历年每个月的天数，以及一年的总天数
     * @param year
     * @returns {{yearDays: number, monthDays: Array, leapMonth: *}}
     */
    getLunarDaysOfMonthsAndYearDays( year ) {
        let yearData = this.lunarRecord()[year - this.state.minYear],
            leapMonth = yearData[0],
            monthLen = leapMonth ? 13 : 12,
            monthData = yearData[3].toString(2),
            monthDataArr = monthData.split(''),
            addZeroLen = 16 - monthDataArr.length,
            i,
            yearDays = 0,
            j,
            monthDays = [];

        for( i = 0; i < addZeroLen; i ++ ) {
            monthDataArr.unshift(0);
        }

        for( j = 0; j < monthLen; j ++ ) {
            if( 0 == monthDataArr[j] ) {
                yearDays += 29;
                monthDays.push(29);
            } else {
                yearDays += 30;
                monthDays.push(30);
            }
        }

        return {
            yearDays: yearDays,
            monthDays: monthDays
        };
    }

    /**
     * 计算农历日期离正月初一有多少天
     * @param year {Number} 农历年
     * @param month {Number} 农历月 （0-12，可以有包含闰月）月分数据放在数组中，从0开始更方便
     * @param day {Number} 农历日
     * @returns {number}  距离天数
     */
    getDaysBetweenFirstDayOfLunar( year, month, day ) {
        let data = this.getLunarDaysOfMonthsAndYearDays( year ),
            monthDays = data.monthDays,
            days = 0;
        for( var i = 0; i < monthDays.length; i ++ ) {
            if( i < month ) {
                days += monthDays[i];
            } else {
                break;
            }
        }
        return days +day -1;
    }

    /**
     * 统一输入日期（参数朋份从1开始， 回归js从0开始）
     * @param year {Number} 年
     * @param month {Number} 月
     * @param day {Number} 日
     * @returns {*} 统一后的日期
     */
    formatDate( year, month, day ) {
        let now = new Date();
        year = year ? parseInt(year, 10) : now.getFullYear();
        month = month ? parseInt(month - 1, 10) : now.getMonth();
        day = day ? parseInt(day, 10) : now.getDate();
        if( year < this.state.minYear || year > this.state.maxYear ) {
            return {
                error: this.errorCode()[100]
            };
        }
        return {
            year: year,
            month: month,
            day: day
        };
    }

    /**
     * 农历转公历
     * @param year {Number} 农历年
     * @param month {Number} 农历月（1-13，可能有闰月）
     * @param day {Number} 农历日
     * @returns {*} 公历年月日
     */
    lunarToSolar( year, month, day ) {
        let inputDate = this.formatDate( year, month, day );
        if( inputDate.ERROR ) {
            return inputDate;
        }
        year = inputDate.year;
        month = inputDate.month;
        day = inputDate.day;

        let between = this.getDaysBetweenFirstDayOfLunar( year, month, day ),
            yearData = this.lunarRecord()[year - this.state.minYear],
            firstMonthOfLunar = yearData[1],
            firstDayOfLunar = yearData[2],
            offsetDate = new Date( year, firstMonthOfLunar -1, firstDayOfLunar).getTime() + between * 86400000;
        offsetDate = new Date( offsetDate );

        return {
            year: offsetDate.getFullYear(),
            month: offsetDate.getMonth() + 1,
            day: offsetDate.getDate()
        };
    }

    /**
     * 公历转农历
     * @param year {Number} 公历年
     * @param month {Number} 公历月
     * @param day {Number} 公历日
     * @returns {*} 农历年月日
     */
    solarToLunar( year, month, day ) {
        let inputDate = this.formatDate( year, month, day );
        if( inputDate.error ) {
            return inputDate;
        }
        year = inputDate.year;
        month = inputDate.month;
        day = inputDate.day;

        let lunarDate = this.getLunarDateByDaysBetweenFirstDayOfLunar( year, month, day ),
            lunarLeapMonth = this.getLunarLeapMonth( lunarDate[0] ),
            lunarMonthName = '',
            lunarDayName = '';

        if( lunarLeapMonth > 0 && lunarLeapMonth == lunarDate[1] ) {
            lunarMonthName = '闰' + this.lunarData().NONG_LI_YUE[lunarDate[1] - 1] + '月';
        } else if( lunarLeapMonth > 0 && lunarDate[1] > lunarLeapMonth ) {
            lunarMonthName = this.lunarData().NONG_LI_YUE[lunarDate[1] - 1]  + '月';
        } else {
            lunarMonthName = this.lunarData().NONG_LI_YUE[ lunarDate[1] ]  + '月';
        }

        lunarDayName = this.lunarData().NONG_LI_RI[ lunarDate[2] - 1 ];

        return {
            lunarYear: lunarDate[0],
            lunarMonth: lunarDate[1] + 1,
            lunarDay: lunarDate[2],
            lunarMonthName: lunarMonthName,
            lunarDayName:lunarDayName
        };
    }

    /**
     * 生成可选的年份数据
     * 公农历可以共用
     * @param selectedYear
     */
    generatorYearData(selectedYear) {
        selectedYear = parseInt(selectedYear, 10);
        let tmpYearData = [],
            start = this.state.startYear,
            end = this.state.endYear;
        for(var year = start; year <= end; year ++) {
            if( year == start ) {
                tmpYearData.push({value:''});
                tmpYearData.push({value:''});
            }
            var obj = {};
            obj.value = year;
            obj.text = year;
            //obj.class = selectedYear === year ? 'current' : '';
            tmpYearData.push(obj);
            if( year == end ) {
                tmpYearData.push({value:''});
                tmpYearData.push({value:''});
            }
        }
        this.setState({
            yearData: tmpYearData
        });
    }

    /**
     * 生成农历一年的所有可选的月份数据
     * 并设置选中月
     * @param selectedLunarYear {Number} 选中农历年
     * @param selectedLunarMonth {Number} 选中农历月 月份1-13包含闰月
     */
    generateLunarMonthsData( selectedLunarYear, selectedLunarMonth ) {
        let self = this,
            daysOfMonth = this.getLunarDaysOfMonthsAndYearDays( selectedLunarYear),
            lunarLeapMonth = this.getLunarLeapMonth( selectedLunarYear ),
            LONG_LI_YUE = this.lunarData().NONG_LI_YUE,
            monthData = [];

        monthData = daysOfMonth.monthDays.map( (v, k) => {
            let monthName = '',
                className;

            className = self.selectedLunarMonthWhetherLargeThanCurrentLunarMonth(
                selectedLunarYear,
                k + 1
            ) ? 'prevent' : undefined;

            if( lunarLeapMonth ) {
                if( lunarLeapMonth === k ) {
                    monthName = '闰' + LONG_LI_YUE[k -1] + '月';
                } else if( lunarLeapMonth < k ) {
                    monthName = LONG_LI_YUE[k-1] + '月';
                } else {
                    monthName = LONG_LI_YUE[k] + '月';
                }
            } else {
                monthName = LONG_LI_YUE[k] + '月';
            }
            /*if( selectedLunarMonth === (k + 1) ) {
                className = 'current';
            }*/

            return {
                text: monthName,
                value: k + 1,
                className: className
            }
        });

        monthData.unshift({});
        monthData.unshift({});
        monthData.push({});
        monthData.push({});

        this.setState({
            monthData: monthData
        });
    }

    /**
     * 生成农历一个月的所有可选的日数据
     * 并设置选中年
     * @param selectedLunarYear
     * @param selectedLunarMonth //月份1-13包含闰月
     * @param selectedLunarDay
     */
    generateLunarDaysData( selectedLunarYear, selectedLunarMonth, selectedLunarDay ) {
        let daysOfMonth = this.getLunarDaysOfMonthsAndYearDays( selectedLunarYear),
            lunarLeapMonth = this.getLunarLeapMonth( selectedLunarYear ),
            LONG_LI_RI = this.lunarData().NONG_LI_RI,
            len = daysOfMonth.monthDays[selectedLunarMonth - 1],
            dayData = [];

        for(let i = 0; i < len; i ++) {
            let data,
                className;
            /*if( selectedLunarDay = (i + 1) ) {
                className = 'current'
            }*/
            className = this.selectedLunarDayWhetherLargeThanCurrentLunarDay(
                selectedLunarYear,
                selectedLunarMonth,
                i + 1
            ) ? 'prevent' : undefined;
            data = {
                text: LONG_LI_RI[i],
                value: i + 1,
                className: className
            };
            dayData.push( data );
        }

        dayData.unshift({});
        dayData.unshift({});
        dayData.push({});
        dayData.push({});

        this.setState({
            dayData: dayData
        });
    }

    /**
     * 判断所选的年份是否大于当前年
     * @param selectedYear {Number}
     * @returns {boolean} true=>所选年大于当前年
     */
    selectedYearWhetherLargeCurrentYear( selectedYear ) {
        selectedYear = selectedYear || this.state.selectedYear;
        return selectedYear > this.state.MaxDate.getFullYear();
    }

    /**
     * 判断所选的农历月份是否大于当前的农历月份
     * @param selectedLunarYear {Number}
     * @param selectedLunarMonth {Number}
     * @returns {boolean} true=>超过当前月，反之
     */
    selectedLunarMonthWhetherLargeThanCurrentLunarMonth( selectedLunarYear, selectedLunarMonth ) {
        selectedLunarYear = selectedLunarYear || this.state.selectedYear;
        selectedLunarMonth = selectedLunarMonth || this.state.selectedMonth;
        let current = this.state.MaxDate,
            currentYear = current.getFullYear(),
            currentMonth = current.getMonth() + 1,
            currentDay = current.getDate(),
            lunar = this.solarToLunar(currentYear, currentMonth, currentDay);
        return  this.selectedYearWhetherLargeCurrentYear( selectedLunarYear ) ||
            ( selectedLunarYear === lunar.lunarYear && selectedLunarMonth > lunar.lunarMonth );
    }

    /**
     * 判断所选的农历日是否大于当前的农历日
     * @param selectedLunarYear {Number}
     * @param selectedLunarMonth {Number}
     * @param selectedLunarDay {Number}
     * @returns {boolean} true=>超过当前的农历日，反之
     */
    selectedLunarDayWhetherLargeThanCurrentLunarDay( selectedLunarYear, selectedLunarMonth, selectedLunarDay ) {
        selectedLunarYear = selectedLunarYear || this.state.selectedYear;
        selectedLunarMonth = selectedLunarMonth || this.state.selectedMonth;
        selectedLunarDay = selectedLunarDay || this.state.selectedDay;
        let current = this.state.MaxDate,
            currentYear = current.getFullYear(),
            currentMonth = current.getMonth() + 1,
            currentDay = current.getDate(),
            lunar = this.solarToLunar(currentYear, currentMonth, currentDay);

        return  this.selectedLunarMonthWhetherLargeThanCurrentLunarMonth( selectedLunarYear, selectedLunarMonth ) ||
            (
                selectedLunarYear === lunar.lunarYear &&
                selectedLunarMonth === lunar.lunarMonth &&
                selectedLunarDay > lunar.lunarDay
            );
    }

    /**
     * 生成公历一年可选的所有月份数据
     * @param selectedMonth {Number}    选中月份
     * @param selectedYear {Number}    选中年份
     */
    generatorMonthData(selectedMonth, selectedYear) {
        selectedMonth = parseInt(selectedMonth, 10);
        selectedYear = selectedYear || this.state.selectedYear;
        let tmpMonthData = [],
            current = this.state.MaxDate,
            currentYear = current.getFullYear(),
            currentMonth = current.getMonth() + 1;
        for(let month = 1; month <=12; month ++) {
            let obj = {};
            obj.value = month;
            obj.text = month;
            //obj.class = month === selectedMonth ? 'current' : '';
            if( currentYear == selectedYear && month > currentMonth ) {
                obj.className ='prevent';
            }
            tmpMonthData.push(obj);
        }

        tmpMonthData.unshift({});
        tmpMonthData.unshift({});
        tmpMonthData.push({});
        tmpMonthData.push({});

        this.setState({
            monthData: tmpMonthData
        });
    }

    /**
     * 判断是否是闰年
     * @param year
     * @returns {boolean}
     */
    isLeap(year) {
        return new Date(year, 1, 29).getDate() === 29;
    }

    /**
     * 通过传入的年、月，得到该月的总天数
     * @param year {Number}
     * @param month {Number}
     * @returns {*}
     */
    getDaysByYearAndMonth(year, month) {
        let days;
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
        }
        if( month === 2 ) {
            days = this.isLeap(year) ? 29 : 28;
        }
        return days;
    }

    /**
     * 生成公历一个月所有可选的日数据
     * @param selectedDay {Number}    选中日
     * @param selectedMonth {Number}    选中月份
     * @param selectedYear {Number}    选中年
     */
    generatorDayData(selectedDay, selectedMonth, selectedYear) {
        selectedDay = parseInt(selectedDay, 10);
        let year = selectedYear || this.state.selectedYear,
            month = selectedMonth || this.state.selectedMonth,
            start = 1,
            end,
            tmpDayData = [],
            current = this.state.MaxDate,
            currentYear = current.getFullYear(),
            currentMonth = current.getMonth() + 1,
            currentDay = current.getDate();
        end = this.getDaysByYearAndMonth(year, month);
        for(let day = start; day <= end; day ++) {
            let obj = {};
            obj.value = day;
            obj.text = day;
            //obj.class = day === selectedDay ? 'current' : '';
            if( year == currentYear && month == currentMonth && day > currentDay ) {
                obj.className = 'prevent';
            }
            tmpDayData.push(obj);
        }

        tmpDayData.unshift({});
        tmpDayData.unshift({});
        tmpDayData.push({});
        tmpDayData.push({});

        this.setState({
            dayData: tmpDayData
        });
    }

    /**
     * 判断选中的阳历月是否大于当前的月份
     * @param selectedYear {Number}
     * @param selectedMonth {Number}
     * @returns {boolean}
     */
    selectedMonthWhetherLargeThanCurrentMonth( selectedYear, selectedMonth ) {
        selectedYear = selectedYear || this.state.selectedYear;
        selectedMonth = selectedMonth || this.state.selectedMonth;
        let now = this.state.MaxDate,
            currentYear = now.getFullYear(),
            currentMonth = now.getMonth() + 1;
        return ( selectedYear == currentYear ) && ( selectedMonth > currentMonth );
    }

    /**
     * 判断选中的阳历日是否大于当前的阳历日
     * @param selectedYear {Number}
     * @param selectedMonth {Number}
     * @param selectedDay {Number}
     * @returns {boolean}
     */
    selectedDayWhetherLargeThanCurrentDay( selectedYear, selectedMonth, selectedDay ) {
        selectedYear = selectedYear || this.state.selectedYear;
        selectedMonth = selectedMonth || this.state.selectedMonth;
        selectedDay = selectedDay || this.state.selectedDay;
        let now = this.state.MaxDate,
            currentYear = now.getFullYear(),
            currentMonth = now.getMonth() + 1,
            currentDay = now.getDate();
        return ( selectedYear == currentYear ) && ( selectedMonth == currentMonth ) && ( selectedDay > currentDay );
    }

    /**
     * 传参将年的位置设定到指定年，不传参设定到选中年
     * @param selectedYear {Number}
     */
    setYearScrollToSelectedYear( selectedYear ) {
        let yearBox = this.refs.scrollYear,
            delta = (selectedYear ||this.state.selectedYear) - this.state.startYear;
        yearBox.scrollTop = delta * 32;
    }

    /**
     * 传参将年的位置设定到指定月，不传参设定到选中月
     * @param selectedMonth {Number}
     */
    setMonthScrollToSelectedMonth( selectedMonth ) {
        let monthBox = this.refs.scrollMonth,
            delta = (selectedMonth || this.state.selectedMonth) - 1;
        monthBox.scrollTop = delta * 32;
    }

    /**
     * 传参将年的位置设定到指定日，不传参设定到选中日
     * @param selectedDay {Number}
     */
    setDayScrollToSelectedDay( selectedDay ) {
        let dayBox = this.refs.scrollDay,
            delta = (selectedDay || this.state.selectedDay) - 1;
        dayBox.scrollTop = delta * 32;
    }

    //事件： 滚动获取年份
    yearScrollHandle() {
        let self = this,
            timer = setTimeout(function() {
                let yearBox = self.refs.scrollYear,
                    scrollTop = yearBox.scrollTop,
                    mod = scrollTop%32;

                scrollTop = ( mod <= 16 ) ? ( scrollTop - mod ) : ( scrollTop -mod + 32 );
                yearBox.scrollTop = scrollTop;    //todo 做个动画，让其慢慢移过去

                let selectedYear = self.state.startYear + (scrollTop / 32),
                    selectedMonth = self.state.selectedMonth,
                    selectedDay = self.state.selectedDay,
                    now = self.state.MaxDate,
                    nowYear = now.getFullYear(),
                    nowMonth = now.getMonth() + 1,
                    nowDay = now.getDate(),
                    nowLunar = self.solarToLunar( nowYear, nowMonth, nowDay );

                let mode = self.state.mode,
                    solarYear,
                    solarMonth,
                    solarDay;

                if( 0 === mode ) {    //阳历越界判断
                    /*if( ( nowYear == selectedYear ) && ( selectedMonth > nowMonth ) ) {
                        selectedMonth = nowMonth;    //判断更新后的年月是否大于当前的年月，大于便设置成当前年月
                    }

                    if( ( nowYear == selectedYear ) &&  ( selectedMonth == nowMonth ) && ( selectedDay > nowDay ) ) {
                        selectedDay = nowDay;    //判断更新后的年月日是否大于当前年月日，大于便设置成当前年月日
                    }*/
                    selectedMonth = self.selectedMonthWhetherLargeThanCurrentMonth( selectedYear, selectedMonth ) ?
                        nowMonth : selectedMonth;
                    selectedDay = self.selectedDayWhetherLargeThanCurrentDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowDay : selectedDay;
                } else if( 1 === mode ) {    //阴历越界判断
                    selectedMonth = self.selectedLunarMonthWhetherLargeThanCurrentLunarMonth( selectedYear, selectedMonth ) ?
                        nowLunar.lunarMonth : selectedMonth;
                    selectedDay = self.selectedLunarDayWhetherLargeThanCurrentLunarDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowLunar.lunarDay : selectedDay;
                }

                if( 0 === mode ) {
                    solarYear = selectedYear;
                    solarMonth = selectedMonth;
                    solarDay = selectedDay;
                    self.generatorYearData(selectedYear);    //update的时候会重新设置位置
                    self.generatorMonthData(selectedMonth, selectedYear);
                    self.generatorDayData(selectedDay, null, selectedYear);
                } else if( 1 === mode ) {
                    let solar = self.lunarToSolar(selectedYear, selectedMonth, selectedDay);
                    solarYear = solar.year;
                    solarMonth = solar.month;
                    solarDay = solar.day;
                    self.generatorYearData(selectedYear);
                    self.generateLunarMonthsData(selectedYear, selectedMonth);
                    self.generateLunarDaysData(selectedYear, selectedMonth, selectedDay);
                }

                self.setMonthScrollToSelectedMonth( selectedMonth );
                self.setDayScrollToSelectedDay( selectedDay );

                self.setState({
                    selectedYear: selectedYear,
                    selectedMonth: selectedMonth,
                    selectedDay: selectedDay,
                    solarYear: solarYear,
                    solarMonth: solarMonth,
                    solarDay: solarDay
                });

            }, 50);
        let tempTimer =  this.state.yearTimer;
        tempTimer && clearTimeout(tempTimer);
        tempTimer = timer;
        this.setState({
            yearTimer: tempTimer
        });
    }

    //事件： 滚动获取月份
    monthScrollHandle() {
        let self = this,
            timer = setTimeout(function() {
                let monthBox = self.refs.scrollMonth,
                    scrollTop = monthBox.scrollTop,
                    mod = scrollTop%32;
                scrollTop = ( mod <= 16 ) ? ( scrollTop - mod ) : ( scrollTop -mod + 32 );
                monthBox.scrollTop = scrollTop;    //todo 做个动画，让其慢慢移过去
                let selectedMonth = 1 + ( scrollTop/32 ),
                    selectedYear = self.state.selectedYear,
                    selectedDay = self.state.selectedDay;

                let mode = self.state.mode,
                    solarYear,
                    solarMonth,
                    solarDay;

                let now = self.state.MaxDate,
                    nowYear = now.getFullYear(),
                    nowMonth = now.getMonth() + 1,
                    nowDay = now.getDate(),
                    nowLunar = self.solarToLunar( nowYear, nowMonth, nowDay );

                if( 0 === mode ) {    //阳历越界判断，
                    selectedMonth = self.selectedMonthWhetherLargeThanCurrentMonth( selectedYear, selectedMonth ) ?
                        nowMonth : selectedMonth;
                    selectedDay = self.selectedDayWhetherLargeThanCurrentDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowDay : selectedDay;
                } else if( 1 === mode ) {    //阴历越界判断
                    selectedMonth = self.selectedLunarMonthWhetherLargeThanCurrentLunarMonth( selectedYear, selectedMonth ) ?
                        nowLunar.lunarMonth : selectedMonth;
                    selectedDay = self.selectedLunarDayWhetherLargeThanCurrentLunarDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowLunar.lunarDay : selectedDay;
                }

                if( 0 === mode ) {
                    solarYear = selectedYear;
                    solarMonth = selectedMonth;
                    solarDay = selectedDay;
                    self.generatorMonthData(selectedMonth, selectedYear);
                    self.generatorDayData(selectedDay, selectedMonth, selectedYear);
                } else if( 1 === mode ) {
                    let solar = self.lunarToSolar(selectedYear, selectedMonth, selectedDay);
                    solarYear = solar.year;
                    solarMonth = solar.month;
                    solarDay = solar.day;
                    self.generateLunarMonthsData(selectedYear, selectedMonth);
                    self.generateLunarDaysData(selectedYear, selectedMonth, selectedDay);
                }

                self.setMonthScrollToSelectedMonth( selectedMonth );
                self.setDayScrollToSelectedDay( selectedDay );

                self.setState({
                    selectedMonth: selectedMonth,
                    selectedDay: selectedDay,
                    solarYear: solarYear,
                    solarMonth: solarMonth,
                    solarDay: solarDay
                });

            }, 50);
        let tempTimer = this.state.monthTimer;
        tempTimer && clearTimeout(tempTimer);
        tempTimer = timer;
        this.setState({
            monthTimer: tempTimer
        });
    }

    //事件： 滚动获取日
    dayScrollHandle() {
        let self = this,
            timer = setTimeout(function() {
                let dayBox = self.refs.scrollDay,
                    scrollTop = dayBox.scrollTop,
                    mod = scrollTop%32,
                    selectedDay;
                scrollTop = ( mod <= 16 ) ? ( scrollTop - mod ) : ( scrollTop -mod + 32 );
                dayBox.scrollTop = scrollTop;    //todo 做个动画，让其慢慢移过去
                selectedDay = 1 + (scrollTop/32);

                let mode = self.state.mode,
                    selectedMonth = self.state.selectedMonth,
                    selectedYear = self.state.selectedYear,
                    solarYear,
                    solarMonth,
                    solarDay;

                let nowDate = self.state.MaxDate,
                    nowYear = nowDate.getFullYear(),
                    nowMonth = nowDate.getMonth() + 1,
                    nowDay = nowDate.getDate(),
                    nowLunar = self.solarToLunar( nowYear, nowMonth, nowDay );

                if( 0 === mode ) {    //阳历越界判断
                    selectedDay = self.selectedDayWhetherLargeThanCurrentDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowDay : selectedDay;
                } else if( 1 === mode ) {    //阴历越界判断
                    selectedDay = self.selectedLunarDayWhetherLargeThanCurrentLunarDay( selectedYear, selectedMonth, selectedDay ) ?
                        nowLunar.lunarDay : selectedDay;
                }

                if( 0 === mode ) {
                    solarYear = selectedYear;
                    solarMonth = selectedMonth;
                    solarDay = selectedDay;
                    self.generatorDayData(selectedDay, selectedMonth, selectedYear);
                } else if( 1 === mode ) {
                    let solar = self.lunarToSolar(selectedYear, selectedMonth, selectedDay);
                    solarYear = solar.year;
                    solarMonth = solar.month;
                    solarDay = solar.day;
                    self.generateLunarDaysData(selectedYear, selectedMonth, selectedDay);
                }

                self.setDayScrollToSelectedDay( selectedDay );

                self.setState({
                    selectedDay: selectedDay,
                    solarYear: solarYear,
                    solarMonth: solarMonth,
                    solarDay: solarDay
                });

            }, 50);
        let tempTimer = this.state.dayTimer;
        tempTimer && clearTimeout(tempTimer);
        tempTimer = timer;
        this.setState({
            dayTimer: tempTimer
        });
    }

    /*solarOrLunarChangeHandle( event ) {
        let target = event.target,
            checked = target.checked,
            mode = checked ? 1 : 0,
            state = this.state,
            selectedYear = state.selectedYear,
            selectedMonth = state.selectedMonth,
            selectedDay = state.selectedDay,
            solarYear,
            solarMonth,
            solarDay;

        if( 0 === mode ) {
            let solar = this.lunarToSolar(selectedYear, selectedMonth, selectedDay);
            selectedYear = solar.year;
            selectedMonth = solar.month;
            selectedDay = solar.day;
            solarYear = solar.year;
            solarMonth = solar.month;
            solarDay = solar.day;
            this.generatorYearData(selectedYear);
            this.generatorMonthData(selectedMonth, selectedYear);
            this.generatorDayData(selectedDay, selectedMonth, selectedYear);
        } else if( 1 === mode ) {
            let lunar = this.solarToLunar(selectedYear, selectedMonth, selectedDay);
            solarYear = selectedYear;
            solarMonth = selectedMonth;
            solarDay = selectedDay;
            selectedYear = lunar.lunarYear;
            selectedMonth = lunar.lunarMonth;
            selectedDay = lunar.lunarDay;
            this.generatorYearData(selectedYear);
            this.generateLunarMonthsData(selectedYear, selectedMonth);
            this.generateLunarDaysData(selectedYear, selectedMonth, selectedDay);
        }


        this.setYearScrollToSelectedYear( selectedYear );
        this.setMonthScrollToSelectedMonth( selectedMonth );
        this.setDayScrollToSelectedDay(selectedDay);

        this.setState({
            mode: mode,
            selectedYear: selectedYear,
            selectedMonth: selectedMonth,
            selectedDay: selectedDay,
            solarYear: solarYear,
            solarMonth: solarMonth,
            solarDay: solarDay
        });
    }*/

    solarOrLunarChangeHandle( event ) {


        let state = this.state,
            mode = state.mode;
        mode = mode ? 0 : 1;
        let selectedYear = state.selectedYear,
            selectedMonth = state.selectedMonth,
            selectedDay = state.selectedDay,
            solarYear,
            solarMonth,
            solarDay;

        if( 0 === mode ) {
            let solar = this.lunarToSolar(selectedYear, selectedMonth, selectedDay);
            selectedYear = solar.year;
            selectedMonth = solar.month;
            selectedDay = solar.day;
            solarYear = solar.year;
            solarMonth = solar.month;
            solarDay = solar.day;
            this.generatorYearData(selectedYear);
            this.generatorMonthData(selectedMonth, selectedYear);
            this.generatorDayData(selectedDay, selectedMonth, selectedYear);
        } else if( 1 === mode ) {
            let lunar = this.solarToLunar(selectedYear, selectedMonth, selectedDay);
            solarYear = selectedYear;
            solarMonth = selectedMonth;
            solarDay = selectedDay;
            selectedYear = lunar.lunarYear;
            selectedMonth = lunar.lunarMonth;
            selectedDay = lunar.lunarDay;
            this.generatorYearData(selectedYear);
            this.generateLunarMonthsData(selectedYear, selectedMonth);
            this.generateLunarDaysData(selectedYear, selectedMonth, selectedDay);
        }


        this.setYearScrollToSelectedYear( selectedYear );
        this.setMonthScrollToSelectedMonth( selectedMonth );
        this.setDayScrollToSelectedDay(selectedDay);

        this.setState({
            mode: mode,
            selectedYear: selectedYear,
            selectedMonth: selectedMonth,
            selectedDay: selectedDay,
            solarYear: solarYear,
            solarMonth: solarMonth,
            solarDay: solarDay
        });
    }

    /**
     * 打开DatePicker
     * @param date {String} 传入的日期 eg: '2015-02-21'
     */
    pickerOpen(date) {

        this.setState({
            displayFlag: true,
            mode: 0
        });

        //this.refs.modecheckbox.checked = false;

        let lastDate = date,
            lastDateArr = [];
        if( lastDate && '' != lastDate ) {
            lastDateArr = lastDate.split('-');
            let i,
                len = lastDateArr.length;
            for(i = 0; i < len; i ++) {
                lastDateArr[i] = parseInt(lastDateArr[i], 10);
            }
            this.generatorYearData( lastDateArr[0] );
            this.generatorMonthData( lastDateArr[1], lastDateArr[0] );
            this.generatorDayData( lastDateArr[2], lastDateArr[1], lastDateArr[0] );

            this.setState({
                selectedYear: lastDateArr[0],
                selectedMonth: lastDateArr[1],
                selectedDay: lastDateArr[2],
                solarYear: lastDateArr[0],
                solarMonth: lastDateArr[1],
                solarDay: lastDateArr[2]
            });

            setTimeout( () => {
                this.setYearScrollToSelectedYear(lastDateArr[0]);
                this.setMonthScrollToSelectedMonth(lastDateArr[1]);
                this.setDayScrollToSelectedDay(lastDateArr[2]);
            }, 4);

        }

    }

    /**
     * 关闭DatePicker
     */
    pickerClose() {
        this.setState({
            displayFlag: false
        });
    }

    /**
     * 事件：关闭DatePicker
     */
    eventCancelClickHandle() {
        this.pickerClose();
    }

    /**
     * 事件：确认所选日期
     */
    eventConfirmClickHandle() {
        var year = this.state.solarYear,
            month = this.state.solarMonth,
            day = this.state.solarDay,
            date = '公历 ' + year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
        try {
            ens && ens.gotBirthDay && ens.gotBirthDay.dispatch(date);
        } catch(e) {
            //todo
        }
        this.pickerClose();
    }

    componentWillMount() {
        try {
            ens && ens.datePickerShown && ens.datePickerShown.add( this.pickerOpen.bind(this) );
        } catch(e) {
            //todo
        }
    }

    componentWillUnmount() {
        try{
            ens && ens.datePickerShown && ens.datePickerShown.add( this.pickerOpen.bind(this) );
        } catch(e) {
            //todo
        }

    }

    componentDidMount() {
        let state = this.state,
            selectedYear = state.selectedYear,
            selectedMonth = state.selectedMonth,
            selectedDay = state.selectedDay;

        this.generatorYearData(selectedYear);
        this.generatorMonthData(selectedMonth, selectedYear);
        this.generatorDayData(selectedDay, selectedMonth, selectedYear);

        //初始化设置位置
        setTimeout( () => {    //这里有点hack的意思
            this.setYearScrollToSelectedYear(selectedYear);
            this.setMonthScrollToSelectedMonth(selectedMonth);
            this.setDayScrollToSelectedDay(selectedDay);
        }, 4);


    }

    componentDidUpdate() {    //todo
        /*let state = this.state,
            selectedYear = state.selectedYear,
            selectedMonth = state.selectedMonth,
            selectedDay = state.selectedDay;

        this.setYearScrollToSelectedYear(selectedYear);
        this.setMonthScrollToSelectedMonth(selectedMonth);
        this.setDayScrollToSelectedDay(selectedDay);*/
    }

    render() {
        let self = this,
            state = self.state,
            style = {
                display: state.displayFlag ? 'block' : 'none'
            };
        return (
            <div className="ryan-date-picker" style={style}>
                <div className="back"
                     id="ryan-picker-back"
                     onClick={this.eventCancelClickHandle.bind(this)}
                    ></div>
                <div className="front">
                    <div className="result">
                        <span>公历</span>
                        <span className="stress">{state.solarYear}</span>
                        <span>年</span>
                        <span className="stress">{state.solarMonth}</span>
                        <span>月</span>
                        <span className="stress">{state.solarDay}</span>
                        <span>日</span>
                    </div>
                    <div className="date-box">
                        <table className="date-table">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="date-common-box" ref="scrollYear" onScroll={this.yearScrollHandle.bind(this)}>
                                        {state.yearData.map(function(data, key) {
                                            return <OneDateItem key={key} data={data} event={this.eventYearClickHandle}/>
                                        }, this)}
                                    </div>
                                </td>
                                <td>
                                    <div className="date-common-box" ref="scrollMonth" onScroll={this.monthScrollHandle.bind(this)}>
                                        {state.monthData.map(function(data, key) {
                                            return <OneDateItem key={key} data={data} event={this.eventMonthClickHandle}/>
                                        }, this)}
                                    </div>
                                </td>
                                <td className="border-none">
                                    <div className="date-common-box" ref="scrollDay" onScroll={this.dayScrollHandle.bind(this)}>
                                        {state.dayData.map(function(data, key) {
                                            return <OneDateItem key={key} data={data} event={this.eventDayClickHandle}/>
                                        }, this)}
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="selected-date-layer"></div>
                    </div>
                    <div className="mode">
                        <div className="mode-left">
                            <span className="pl0d5">农历</span>
                        </div>
                        <div className="mode-right">
                            <div className="checkboxThree">
                                {/*<input type="checkbox"
                                       value="1"
                                       ref='modecheckbox'
                                       id="checkboxThreeInput"
                                       onChange={this.solarOrLunarChangeHandle.bind(this)}
                                    />
                                <label htmlFor="checkboxThreeInput"></label>*/}
                                <div className={state.mode ? 'checked' : ''}
                                       onClick={this.solarOrLunarChangeHandle.bind(this)}
                                    >　</div>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <span className="left-btn"
                              onClick={this.eventCancelClickHandle.bind(this)}
                            >取消</span>
                        <span onClick={this.eventConfirmClickHandle.bind(this)}>确认</span>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = RyanDatePicker;