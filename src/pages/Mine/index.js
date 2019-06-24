import React, { Component } from 'react';
import { store } from '../../store';
import './index.scss';

class Mine extends Component {
    componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "mine" })
    }
    goto(path) {
        let { history } = this.props;
        history.push(path);
    }
    render() {
        return (
            <div className="my">
                <div className="my_info">

                    <div className="my_info_bg" style={{ width: '100%', height: '172px', background: 'url(imgs/beijing.png)no-repeat 50%/cover' }}>
                        <img src="imgs/mine.png" />
                        <sapn>138****4855</sapn>
                    </div>
                    <div className="total_assets">
                        <div className="totle">
                            <p>总资产(元) <span>></span></p>
                            <span>0</span>
                        </div>
                        <div className="jiange"></div>
                        <div className="leiji totle">
                            <p>累计优惠(元) <span>></span></p>
                            <span>0</span>
                        </div>
                    </div>
                </div>

                <div    className="order_state" 
                        style={{ background: '#fff URL(imgs/huobei.png)no-repeat 50%/contain' }}
                        onClick={this.goto.bind(this, 'indent')}
                >
                    <ul>
                        <li>
                            <img src="imgs/fahuo.png" />
                            <span>待发货</span>
                        </li>
                        <li>
                            <img src="imgs/shouhuo.png" />
                            <span>待收货</span>
                        </li>
                        <li>
                            <img src="imgs/shouhuo2.png" />
                            <span>已收货</span>
                        </li>
                        <li>
                            <img src="imgs/dingdang.png" />
                            <span>全部订单</span>
                        </li>
                    </ul>
                </div>
                <div className="my_list1 my_list">
                    <ul>
                        <li>
                            <span>我的收藏</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>
                        <li>
                            <span>资金明细</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>                   
                    </ul>
                </div>
                <div className="my_list2 my_list">
                    <ul>
                        <li>
                            <span>邀请好友</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>
                        <li>
                            <span>我的红包</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>  
                        <li>
                            <span>我的邀请</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>   
                        <li>
                            <span>我的预约</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>   
                        <li>
                            <span>我的收藏</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>   
                        <li>
                            <span>地址管理</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>                    
                    </ul>
                </div>
                <div className="my_list3 my_list">
                    <ul>
                        <li>
                            <span>设置</span>
                            <img src="imgs/jiantou.png"/ >
                        </li>            
                    </ul>
                </div>
            </div>
        )
    }
}
export default Mine;
