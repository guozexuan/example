import React, { Component } from 'react'

import CommonTitleBorder from  './CommonTitleBorder'

class NameAnalysisPartWuXing extends Component {

    render() {

        let { nameWords, xiShen, paiPan, youLai,zongGe } = this.props,
            shiShen,
            naYin,
            kunZao,
            qianZao,
            zangGan;
        shiShen = paiPan && paiPan.shiShen;
        naYin = paiPan && paiPan.naYin;
        kunZao = paiPan && paiPan.kunZao;
        qianZao = paiPan && paiPan.qianZao;
        zangGan = paiPan && paiPan.zangGang;

        return (
            <div className="wu-xing">
                <CommonTitleBorder text="五行分析" />
                <div className="zi-xing-panel">
                    {/*<div className="title">
                        <div className="auto"><span>八字</span></div>
                    </div>*/}
                    <div className="body">
                        <div className="zi-xing-table">
                            <table>
                                <thead>
                                <tr>
                                    <th className="w12"><span>&nbsp;</span></th>
                                    <th className="w22"><span>年柱</span></th>
                                    <th className="w22"><span>月柱</span></th>
                                    <th className="w22"><span>日柱</span></th>
                                    <th className="w22"><span>時柱</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><span>十神</span></td>
                                    <td><span>{ shiShen && shiShen.y}</span></td>
                                    <td><span>{ shiShen && shiShen.m}</span></td>
                                    <td><span>{ shiShen && shiShen.d}</span></td>
                                    <td><span>{ shiShen && shiShen.h}</span></td>
                                </tr>
                                <tr>
                                    <td><span>八字</span></td>
                                    <td><span>{ qianZao && qianZao.y }</span><br/><span>{ kunZao && kunZao.y }</span></td>
                                    <td><span>{ qianZao && qianZao.m }</span><br/><span>{ kunZao && kunZao.m }</span></td>
                                    <td><span>{ qianZao && qianZao.d }</span><br/><span>{ kunZao && kunZao.d }</span></td>
                                    <td><span>{ qianZao && qianZao.h }</span><br/><span>{ kunZao && kunZao.h }</span></td>
                                </tr>
                                <tr>
                                    <td><span>藏干</span></td>
                                    <td>
                                        {
                                            zangGan && zangGan.y &&
                                            zangGan.y.map(function(val, key) {
                                                return <div key={key}>
                                                    <span>{val}</span>
                                                </div>
                                            })
                                         }
                                    </td>
                                    <td>
                                        {
                                            zangGan && zangGan.m &&
                                            zangGan.m.map(function(val, key) {
                                                return <div key={key}>
                                                    <span>{val}</span>
                                                </div>
                                            })
                                         }
                                    </td>
                                    <td>
                                        {
                                            zangGan && zangGan.d &&
                                            zangGan.d.map(function(val, key) {
                                                return <div key={key}>
                                                    <span>{val}</span>
                                                </div>
                                            })
                                         }
                                    </td>
                                    <td>
                                        {
                                            zangGan && zangGan.h &&
                                            zangGan.h.map(function(val, key) {
                                                return <div key={key}>
                                                    <span>{val}</span>
                                                </div>
                                            })
                                         }
                                    </td>
                                </tr>
                                {
                                    naYin &&
                                    <tr>
                                        <td><span>納音</span></td>
                                        <td><span>{ naYin.y}</span></td>
                                        <td><span>{ naYin.m}</span></td>
                                        <td><span>{ naYin.d}</span></td>
                                        <td><span>{ naYin.h}</span></td>
                                    </tr>
                                 }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="wu-xing-detail">
                    <div className="text1">
                        总格：
                    </div>
                    <p>
                        八字偏强，八字喜<span className="stress">【{xiShen}】</span>。
                    </p>
                    <div className="stress">
                        {xiShen}：{zongGe.title}。
                    </div>
                    <p>
                        {zongGe.content}
                    </p>
                    <div className="stress">
                        五行相生相克的关系：
                    </div>
                    <p>
                        相生：<br/>
                        木生火，火生土，土生金，金生水，水生木。<br/>
                        相克：<br/>
                        木克土，土克水，水克火，火克金，金克木。<br/>
                    </p>
                </div>
                <CommonTitleBorder text="名字释义" />
                <div className="word-analysis">
                    <ul className="analysis-list">
                        {
                            nameWords && nameWords.length > 0 &&
                                nameWords.map( (v, k) => {
                                    return (
                                        <li className="clear" key={k}>
                                            <div className="left">
                                                <div className="word-box">
                                                    <div className="pin-yin">{v.pinYin}</div>
                                                    <div className="word">{v.jianTi}</div>
                                                    <div className="wu-xing-box">
                                                        <span className={"wu-xing c-" + v.className}>{v.wuXing}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="auto" dangerouslySetInnerHTML={{
                                                 __html: v.jieShi
                                            }}>
                                                {/* js generate */}
                                            </div>
                                        </li>
                                    );
                                })
                        }
                    </ul>
                </div>
                {
                    youLai && youLai.title &&
                    <CommonTitleBorder text="名字由来" />
                }
                <div className="reason-box">
                    {/*<p>
                        此名字来源于《瑶瑟怨》中的“雁声远过 潇湘去”，"雁声远过潇湘去" 原诗词如下：
                    </p>*/}
                    <div className="poem-box">
                        <div className="title">{youLai && youLai.title}</div>
                        <div className="author">{youLai && youLai.author}</div>
                        <div className="content" dangerouslySetInnerHTML={{
                            __html: youLai && youLai.content
                        }}>
                            {/*
                            <span>冰簟银床梦不成，碧天如水夜云轻。</span>
                            <br/>
                            <span>雁声远过潇湘去，十二楼中月自明。</span>
                             */}
                        </div>
                    </div>
                    <p dangerouslySetInnerHtml={{
                        __html: youLai && youLai.description
                    }}>
                        {/*头一句正面写女主人公。冰簟银床，指冰 凉的竹席和银饰的床。“梦不成”三字很可玩 味。它不是一般地写因为伤离念远难以成眠， 而是写她寻梦不成。会合渺茫难期，只能将希 望寄托在本属虚幻的梦寐上；而现在，难以成 眠，竟连梦中相见的微末愿望也落空了。这就 更深一层地表现出别离之久远，思念之深挚， 会合之难期和失望之强烈。一觉醒来，才发觉 连虚幻的梦境也未曾有过，伴着自己的，只有 散发着秋天凉意和寂寞气息的冰簟银床。—这 后一种意境，似乎比在冰簟银床上辗转反侧更 隽永有情韵。读者仿佛可以听到女主人公轻轻 的叹息。*/}
                    </p>
                </div>
            </div>
        );

    }

}

module.exports = NameAnalysisPartWuXing;