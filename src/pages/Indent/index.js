import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './index.scss';

const tabs = [
    { title: <Badge >全部</Badge> },
    { title: <Badge >待发货</Badge> },
    { title: <Badge >待收货</Badge> },
    { title: <Badge >已发货</Badge> },
];

const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
    { title: 'Four Tab', sub: '4' },
];
class Indent extends Component {
    // 返回上次点击页面
    backClick() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="indent">
                <div className="header">
                    <img src="imgs/jiantou_l.png" onClick={this.backClick.bind(this)} />
                    <span>我的订单</span>
                </div>
                <div style={{ height: '44px' }}></div>
                <Tabs
                    tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        很爱很爱你
                    </div>
                    <div className="list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        很爱很爱                       
                    </div>
                    <div className="list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        很爱很                        
                    </div>
                    <div className="list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        很爱                       
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default Indent;