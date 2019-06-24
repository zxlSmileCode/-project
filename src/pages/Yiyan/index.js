import React, { Component } from 'react';
import { store } from '../../store';
class Yiyan extends Component {
    componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "yiyan" })
      }

    render() {
        return (
            <div>
                艺眼
            </div>
        )
    }
}
export default Yiyan;
