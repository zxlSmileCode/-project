import React, {Component} from 'react';
import connect from 'react-redux';
import './search.css';
// import axios from 'axios';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            last:[]
        }
    }
    getLast(){
        var arr = JSON.parse(localStorage.getItem('search') || '[]');
        this.setState({
            last:arr
        })
    }
    setLast(){
        if(this.refs.hSearch.value){
            var flag = false;
            this.state.last.some((item)=>{
                if(this.refs.hSearch.value == item){
                    console.log(item);
                    flag = true;
                    return true;
                }
            })
            if(!flag){
                this.setState({
                    last:this.state.last.push(this.refs.hSearch.value)
                })
                localStorage.setItem('search', JSON.stringify(this.state.last));
                console.log(this.state.last);
            }
        }
    }
    showList(index){
        this.refs.hSearch.value = this.state.last[index];
    }
    clearLast(){
        localStorage.setItem('search',[]);
        this.setState({
            last:[]
        })
    }
    componentDidMount(){
        window.onkeypress = (ev) =>{
            if(ev.keyCode == 13){
                if(this.refs.hSearch.value){
                    
                }
            }
        }
        this.setState({
            last:JSON.parse(localStorage.getItem('search') || '[]')
        })
    }
    goDown(){
        let timer = null;
        let long = 0;
        timer = setInterval(() => {
            long +=40;
            if(long>=667){
                long = 667;
                clearInterval(timer);
            }
            this.refs.box.style.bottom = -long + 'px';
        }, 20);
    }
    render() {
        return (
            <div
                ref="box"
                data-v-34d9b3dc=""
                id="search_main"
                style={{
                    width: '100%',
                    height: '100%',backgroundColor: 'rgb(243, 243, 243)',position:'fixed',bottom: `${this.props.go}px`,zIndex: 999999, display: 'block'
                }}>
                <div data-v-34d9b3dc="" className="s_box">
                    <div data-v-34d9b3dc="" className="s_title">
                        <div data-v-34d9b3dc="" className="s_titlemain inner clearfix">
                            <form
                                data-v-34d9b3dc=""
                                action="#"
                                accept-charset="UTF-8"
                                style={{
                                    width: '5.5rem',float:'left'
                                }}>
                                <input
                                    ref="hSearch"
                                    data-v-34d9b3dc=""
                                    placeholder="搜索画家姓名，作品风格"
                                    type="search"
                                    className="s_content"
                                    onBlur={this.setLast.bind(this)}
                                    onFocus={this.getLast.bind(this)} /></form>
                                <span data-v-34d9b3dc="" className="cancel" onClick={this.goDown.bind(this)}>取消</span>
                            </div>
                        </div>
                        <div data-v-34d9b3dc="" className="history inner clearfix">
                            <span data-v-34d9b3dc="">历史搜索</span>
                            <img
                                alt=""
                                data-v-34d9b3dc=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhGQTQ4RTQ2NzBEMTFFODg3MDhDMTk1QkNDQ0QyQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZCODhCN0U2NzBGMTFFODg3MDhDMTk1QkNDQ0QyQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEZBNDhFMjY3MEQxMUU4ODcwOEMxOTVCQ0NDRDJBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOEZBNDhFMzY3MEQxMUU4ODcwOEMxOTVCQ0NDRDJBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoXCvBAAAAGmSURBVHja7Ja7SgNBFIY3iUZE1CZYCAqCVqKgldgE9A28gFiI190nECtbESsbhX0Ga8HKTgtLEQsNqCh4jWih0RV3/Y+cgWF0dicZC4sc+PLn7G7Ov3NmsrMp13UdTWTBJpgGGSc5jsGM7/sHv52sifnhAJgDV+A0xixizYN1MFiu0RvrBNjTXYQRfKvneWTYpLsuhdatQHvBBwhBGjSAVtANzsAFXZvQujzrLiiBd65Fg3mkj3HQGdOWDiYpIr6ZIV3rukAOfIItMAx6QDGhtT+6wx0JwAYYA33gkkYnCj2wvrAemVYXcyQH5qvIX09w/tXhHqpLmqLFsYt61pzJqhOxDNrBAuezPPHztIBw9yPQUcpx9yVdkbSB0RIXFUH/rSlp1LSYJkFbXBETo3Mlv1Hye9bQ1ijS5Dqt2OhPompUNfqfRllNLnbcWiWv2KhRyetYA8U4iCti8lClfaVZyhf5peWW81WwzbuwldG+kh8yYj8qQArlzpFow53l3D+r9dURZaT2PBm8kNBuqh4KpfeGUGdE+3I/WLMcET3Jd8C1OPAlwAAji1qk1LITPQAAAABJRU5ErkJggg=="
                                className="delete_history"
                                onClick={this.clearLast.bind(this)}/>
                            <div
                                data-v-34d9b3dc=""
                                className="history_list clearfix"
                                style={{
                                    width: '100%',float: 'left'
                                }}>
                            </div>
                            <ul>
                            {
                                Array.from(this.state.last).map((item,index)=>{
                                    return <li onClick={this.showList.bind(this,index)} key={index}>{item}</li>
                                })
                            }
                            </ul>
                        </div>
                        <div data-v-34d9b3dc="" className="s_result" style={{display: 'none'}}>
                            <div
                                data-v-34d9b3dc=""
                                id="showDiv"
                                className="works_list zq-waterfall inner"
                                style={{marginTop: '0px'}}>
                                <div data-v-34d9b3dc="" className="zq-waterfall-left2"></div>
                                <div data-v-34d9b3dc="" className="zq-waterfall-right2"></div>
                            </div>
                            <div
                                data-v-34d9b3dc=""
                                style={{
                                    textAlign: 'center',fontSize: '0.24rem', height: '0.8rem',lineHeight: '0.8rem',color: 'rgb(102, 102, 102)',marginBottom: '2rem', display:'none'
                                }}>没有更多~</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search;