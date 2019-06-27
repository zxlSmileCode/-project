import React, { Component } from 'react';
import { store } from '../../store';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './index.scss';
import { getData } from '../../api';
import Search from '../../components/Search/search';

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
    constructor(props){
        super(props);
        this.state={
          result: [],
          updown:-667
        }
    }
    up(){
        let timer = null;
        let long = -667;
        timer = setInterval(() => {
            long += 40;
            if(long > 0){
                long = 0;
                this.setState({
                    updown:0
                });
                clearInterval(timer);
            }
            this.setState({
                updown:long
            })
        }, 20);
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
                    <img alt="" src="imgs/search.png" onClick={this.up.bind(this)}/>
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
                <Search go={this.state.updown}></Search>
            </div>
        );
    }
}
export default Yigou;
