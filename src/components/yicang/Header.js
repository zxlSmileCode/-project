import React from "react";
import Search from '../Search/search'
import "./yicang.scss";
class Header extends React.Component {
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
    render() {
        return (
            <div className="yt_header">
                <span className="header_title">艺藏</span>

                <div>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAhCAYAAAAh3nDkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTJEQzAxRUM0QUMzMTFFODhEQzRGQTYyODVBN0RGOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTlEOENGMTA0QUM0MTFFODhEQzRGQTYyODVBN0RGOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMkRDMDFFQTRBQzMxMUU4OERDNEZBNjI4NUE3REY4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMkRDMDFFQjRBQzMxMUU4OERDNEZBNjI4NUE3REY4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnLw+jUAAAsZSURBVHja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"
                        className="search"
                        alt=""
                        onClick={this.up.bind(this)}
                    />
                </div>
                <Search go={this.state.updown}></Search>
            </div>
        );
    }
}

export default Header;
