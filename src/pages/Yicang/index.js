import React, { Component } from 'react';
import { store } from '../../store';

class Yicang extends Component {
    
    componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "yicang" })
      }


    render() {
        return (
            <div>
                艺藏
            </div>
        )
    }
}
export default Yicang;
