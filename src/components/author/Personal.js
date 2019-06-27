import React from "react";
import "./author.scss";
import axios from "axios";

class Personal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        this.getList(this.props.id);
        console.log(this);
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

                        {this.renderList(this.state.list)}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;
