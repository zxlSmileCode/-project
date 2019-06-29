import React, { Component } from 'react';
import { getData } from '../../api';
import './index.scss';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            data: {},
        }
        this.goBack = this.goBack.bind(this)
    }
    async componentDidMount() {
        let { id } = this.props.match.params;
        let { data: { data }} = await getData(`/rest/borrow/${id}`);
        this.setState({ data });
        console.log(data)
    }
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="gobuy">
                <div className="gb_header">
                    <img onClick={this.goBack.bind(this)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAkCAYAAABrLwHZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODcyMTRBQTk0QUM2MTFFODhEQzRGQTYyODVBN0RGOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODcyMTRBQUE0QUM2MTFFODhEQzRGQTYyODVBN0RGOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRTA4RDAzNDRBQzYxMUU4OERDNEZBNjI4NUE3REY4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NzIxNEFBODRBQzYxMUU4OERDNEZBNjI4NUE3REY4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGqB70AAAVvSURBVHjalFZpbFRVFD53ecvsMy3QBUppQQoEEcpSMIBV4w+MgIkQtyD+aCrR8MfIFiMxJqUa0RCjGEMimhjTYNIfRgImGAyksoXIIoJiaIFulG4z0zczb7n3emZaQRLaTs/k5GVm3vvuOd/5zjmPQB5WMjkM33/4MiipQCqV+03hlVKqB4L6TmC0TgnZxPMBI0SBZtggJYBAkByQokGfP/g5AN0shQJOaWleYKAIqIwJgGAYAQBTphk2PlGEbVZKgsHpuTu220AhX8NjPSJBcQWm3/8GpbyeYNqc0LNOSu4gg3A1L7BsWvF+DzJpCmZIf0Yz1S4pBHBOLwoQu4dk5rjh9yCvNLt6k+BmbCgsodW6Zn4lHFnEfbw1lUrXD8QHz2ZRCH7ugUVCBtRvrMYokB/k4R75+N1nGjClctJSg6tm4cpp/oh+y+t21yZPJ69gbbJV/Y+JEbCAD95a/wRWTIEAhecMp5cVAvPDq31D6UYh6LRI1Lxx+MxfG/bsPXZFJj1gGoMRtdwH8xCkO54aAUPDK0VEZrAdylO7iCQRn1/r7vgnvunbz07/rpICKGc57f2vRvdJdlw796dQIidOX8Dchg804AEMrSOesF7vudTz2+7nVoER4A8r+Ag3mJCuOSByygTkyb+B6/x9KSWjlNxQnnwvfdc7FqqKYLTIkYLRwbLEx4cCmKaEQIgsYBpvkEL6KaO3hJIfWJbdpIU0MLmRy2IUKQ5bd78FyAsEAnqJ6VNfYLqzmcEt13PeGbTiP0gugWRJxENz1XkY2Lpl5bkbwiiNYIFdpOm+Q1j+lf6g4QVd9krXhcSPukOAcX38Hm47tCWbI0jDrLlrwz7U2PJo2Gddv9P72qd7jzdnOlzQ/HzU1B6IrNNmQDh9kXjkIwKy3NB55m7PUN2Od39q/rOzZ/iuwTzblxD5AuH8SyJEjBDSn0qnd7a39DTVzV0A4RU+mIhxBNpCpIwNzy04aCWdA4EqE+YvCsFEjQd8+mDa9oaV78mKYChYEAyH+ylM3BiWu21t7bwa2/aKULBzKCEFlmMdTeCQcmUG0sKGTJ7Ozl2+3YnSuLhmdVXlUMqpwNZejEINdzjqaIdLIS4ZDHgUBsT4zrLhnbrQ1t7bJ36trZkZc1xnoU7Z8hDTIrZ0f9aJCybD0ZyHs3XrdKiqYtCZbI1XlkWOlITKim3hVGuMrJisE18AyIko4SLGGETp2M62bxcwZ46AefMAbvZfF4FA7EhZ4fQK23Yfk0BXcqqb2LcXKXCLEA5jOSsu4tDRTuFOF4eBPgGXW/+WTjLcMv+R8gWpjD0LdbgMOziE7XgZ91uCMhycdBQfrcyNbz+7ePP6JU1t7X2zGGcWNv4BxxE7iaI2yfb6Q7qLjQb2y6nrXTOmFtx+fNGMpxLJTAwltIgR5qa9zElPuSAJ7iXwHnA2lgiPnLx2bVZZYevyhdMfTVqZYkrV0wSVctP2zvR4uP5wjvajD4w4G0/Vh09cvVoQil2onjt1ZsZxZ2iUrzFA6x5w5XmcNQ/wRBZXm2OCebhsGW7xxjc3lpVEy7+zPGu1hmx7wq6zbPtrfOfASg5Dkv37x++5jIdTaACgtmJTaVF0evNQOlmDz7vSo1txIX+DA9HODmBWWUmht5eM6fF+AxIJD651XUoGZHnLlILCla5ySymVT5CsVIj6A/dwmlRU6JDfaxUBRzgQ9Gmwb9tLz0+bNPXgUCoZJZT2oGz2eq7zMdnTMLExk00Zg4HamfXbo75YY9q1KA6GbuF4W9mqVbgmRf5O8ZN2FbQPnm8pjcz3AnpoiSedSYSxpaz2SRheXfk6bl+NazjnJHQnrp4sjlTdMphvNi6itn8FGAAfKPA9i+gb5wAAAABJRU5ErkJggg==" />
                    <span className="title">确认购买</span>
                </div>
                <div className="product_info">
                    <div className="inner">
                        <div className="top flex align_items flex-pack-justify">
                            <div className="left" style={{background: 'url('+this.state.data.borImageFirst+') center center / cover no-repeat'}}></div>
                            <div className="right flex flex_direction ">
                                <div className="product_name flex flex_direction">
                                    <span style={{color: 'rgb(51, 51, 51)'}}>{this.state.data.name}</span>
                                    <span className="bianma">{this.state.data.jWorksNo}</span>
                                </div>
                                <div className="infos flex flex_direction" >
                                    <div className="infos_item">
                                        价格：
                                        <span className="price_val">￥{this.state.data.account}</span>
                                    </div>
                                    <div className="infos_item">
                                        折扣：
                                        <span>{this.state.data.discount*10}折</span>
                                    </div>
                                    <div className="infos_item">
                                        期限：
                                        <span>{this.state.data.timeLimit}天</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom flex flex-pack-justify">
                            <span>优惠金额</span>
                            <span className="increment_val">{(this.state.data.account-this.state.data.account*this.state.data.discount).toFixed(2)}元</span>
                        </div>
                    </div>
                </div>
                <div className="redpacket_yue">
                    <div className="redpacket ry_main">
                        <div className="inner redpacket_main  align_items">
                            <span>红包选择</span>
                            <span id="hongbao" className="choose_redpacket yellow">3个可用</span>
                        </div>
                    </div>
                    <div className="yue ry_main" >
                        <div className="inner redpacket_main  align_items">
                            <span>实付余额</span>
                            <span>{(this.state.data.account*this.state.data.discount).toFixed(2)}元</span>
                        </div>
                    </div>
                    <div className="yue ry_main">
                        <div className="inner redpacket_main  align_items  align_item">
                            <span>可用余额</span>
                            <span>0元</span>
                        </div>
                    </div>
                </div>
 
                <div className="goubuy_btn">
                    <div className="goubuy_btnmain inner">
                        确认购买
                    </div>
                </div>
                <div className="reminder">
                    客服电话：400-926-0055
                </div>
                
            </div>
        )
    }
}
export default Cart;
