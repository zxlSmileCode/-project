import React, { Component } from 'react';
import { store } from '../../store';

class Mine extends Component {
    componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "mine" })
      }
    render() {
        return (
            <div>
                我的
            </div>
        )
    }
}
export default Mine;
