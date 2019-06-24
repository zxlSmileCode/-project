import React, { Component } from 'react';
import { getData } from '../../api';

import { Tabs, Button, WhiteSpace, WingBlank, Badge } from 'antd-mobile';
import { store } from '../../store';


const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];
const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
];

class Home extends Component {
    state = {
        jingPingBeanList: []
    }

    async componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "home" })
        let {data:{jingPingBeanList}} = await getData('/rest/indexApp?Hflag=22');
        console.log(jingPingBeanList);
        this.setState({ jingPingBeanList })
    }
    
    render() {
        return (
            <div>
                {/* <ul>
                    {
                        this.state.jingPingBeanList.map(item => <li key={item.borrowId} >
                            <img alt={item.borrowName} src={item.img} />
                            <h4>{item.borrowName}</h4>
                            <p className="price"><span>{item.account}</span></p>
                        </li>)
                    }
                </ul> */}

                <Button type="primary">primary</Button>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default Home;
