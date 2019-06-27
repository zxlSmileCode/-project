import React from "react";
import "./author.scss";
import axios from "axios";

class Personal extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        this.getList(this.props.id);
    }

    async getList(id) {
        return await axios.post(`https://api.jinyishe.cn/rest/authorInfo?authorId=${id}`).then(res => {
            let { list } = res.data.data;
            this.setState({
                list: list
            });
        });
    }

    renderList(arr) {
        return arr.map((item,index) => {
            return (
                <li className="worksitem fl" key={index}>
                    <img src={item.img} className="worksitem_img" style={{ pointerEvents: "none" }} alt="" />
                    <div>{item.imgName}</div>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="personal_profile inner">
                    <div className="p1">个人简介</div>
                    <div className="p2">{this.props.data.authorDescribe}</div>
                </div>

                <div className="personal_profile inner worksshow clearfix">
                    <div className="p1">作品展示</div>
                    <div id="images" className="pictures">
                        {/* <li className="worksitem fl">
                            <img
                                src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/b70b9d356d2a4c47a194c594b0f5b859.jpg?x-oss-process=image/resize,s_200"
                                data-imgurl="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/b70b9d356d2a4c47a194c594b0f5b859.jpg"
                                className="worksitem_img"
                                style={{ pointerEvents: "none" }}
                                alt=""
                            />
                            <div>杜甫 客至</div>
                        </li> */}

                        {this.renderList(this.state.list)}
                        {/* {this.renderList()} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;
