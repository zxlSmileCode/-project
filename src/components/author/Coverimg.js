import React from "react";
import "./author.scss";

class Coverimg extends React.Component {
    scrollToAnchor = anchorName => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
<<<<<<< HEAD
                anchorElement.scrollIntoView({behavior: 'smooth'});
=======
                anchorElement.scrollIntoView({behavior:"smooth"});
>>>>>>> 0433095247f248a36bbf5f6b563cbb5c305438d6
            }
        }
    };

    render() {
        return (
            <div>
                <div
                    className="coverimg"
                    style={{
                        background: `url(${this.props.data.topImage}) center center / cover no-repeat`,
                        height: "100vh",
                        position: "relative"
                    }}>
                    <span className="covername">{this.props.data.authorName}</span>
                    <i onClick={() => this.scrollToAnchor("maincontent")}>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAgCAYAAABHA7voAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEY4RTgxQjVBRjZFMTFFOEJFN0JGNTlERjYzMTE0NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEY4RTgxQjZBRjZFMTFFOEJFN0JGNTlERjYzMTE0NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RjhFODFCM0FGNkUxMUU4QkU3QkY1OURGNjMxMTQ2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RjhFODFCNEFGNkUxMUU4QkU3QkY1OURGNjMxMTQ2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtS+P/0AAAJWSURBVHjaYvz//z8DFOwBYmYgdmQY2mAnEHMAsT2YB/SgPBCv+I8AE0GeHqK4C8kfa4BYASTo+x8TNA1Bz1Vj8Yc/TDIJi2TuEPJcMhb3p4CzH5KiYiyK4oaA50KxuLsMJo+uuA2LYtdB7DlbLO7tRFaDTdNMLJrMBqHn9IH4J5o756Krw6V5NZrGb0CsOog8Jw3E79HcuB6bWnyG7EYz4DXU4IH2nBAQP0Jz2wFc6vEZxAjEp9AMug3EnAPoOWYgvoDmJhCfhRwPgjAXEN9FM/DEAHpwH5pbHgAxPz49xBgqA8Rv0AzeMQCeW4Pmhg+glgohfcQaDipgvqJZsIKOnpuFZvcvINYmRi8plpgC8V80i6bSwXMdWKotW2L1k2qZMxbL6mnouQIs9nmTYgY5lsZgsTSLBp7DZk8qqeaQa3kmFssjqeg5byzmF5NjFiWOqMPiCA8qeM4ai7kd5JpHqWN6sDjGlALzNLC0LykqyKiRnBajOegLECuTYY44ED9HM2sDpe6jVp7ZiOawF0AsRoJ+Hiwtpn3UcBs1S73jaA68Bm3qEdIHavOeQdN7EdruHFQeZAfiS2gOPUWEvj1YGvR81HIXLboyj9EcvJ2E/PsWiKWo6SZatD6wNc6XYVE3BU3NDyDWpLZ7aNXE0gXiP2ge6CNQh1rTwi2MSCPb1AagkeUDaGKpQPwZiFegifsC8RaauILGPQG//4RBLC3dwETjeYJNQByPR74AiBfT1AV06rAWYom5ZnrYTc8hh3Ykz82kl720LGSwgc1AzAvEDvSyECDAAFkAWq9hJX5xAAAAAElFTkSuQmCC"
                            className="cover_icon"
                            alt=""
                        />
                    </i>
                </div>

                <div id="maincontent" className="inner infobox">
                    <div>
                        <div
                            className="authorphoto"
                            style={{
                                background: `url(${this.props.data.headImage}) center center / cover no-repeat`
                            }}
                        />
                        <div className="mainname">{this.props.data.authorName}</div>

                        <div className="mainname1">{this.props.data.authorLabel}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coverimg;
