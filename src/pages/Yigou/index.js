import React, { Component } from 'react';
import { store } from '../../store';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './index.scss';
import { getData } from '../../api';

const tabs = [
    { title: <Badge >画品</Badge> },
    { title: <Badge >画展</Badge> },
    // { title: <Badge >Third Tab</Badge> },
];

const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    // { title: 'Third Tab', sub: '3' },
];
class Yigou extends Component {
    state = {
        result: []
    }
    async componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "yigou" })
        let { data: { data: { result } } } = await getData('/rest/topicList');
        console.log(result);
        this.setState({ result })
    }
    render() {
        return (
            <div className="yigou">
                <div className="header">
                    <img src="imgs/search.png" />
                    <span>艺购</span>
                </div>
                <div style={{height:'44px'}}></div>
                <Tabs 
                    tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="list" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <ul>
                            {
                                this.state.result.map(item =>
                                    <li key={item.id}>
                                        <div className="tupian" style={{ width: '335px', height: '170px', background: "url(" + item.topicImg + ")center center / cover no-repeat" }}></div>
                                        <div className="wenzi">{item.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <ul>
                            {
                                this.state.result.map(item =>
                                    <li key={item.id}>
                                        <div className="tupian" style={{ width: '335px', height: '170px', background: "url(" + item.topicImg + ")center center / cover no-repeat" }}></div>
                                        <div className="wenzi">{item.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </Tabs>
            </div>
        );
    }
}
export default Yigou;
