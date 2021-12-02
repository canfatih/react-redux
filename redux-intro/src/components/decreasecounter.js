import React, { Component } from 'react'
import { connect } from 'react-redux';
import{decreasecounter} from '../redux/actions/counteractions';
import { bindActionCreators } from 'redux'
 class decreasecounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreasecounter());
                
                }}>1 eksilt</button>
            </div>
        )
    }
}
function mapdispatchtoprops(dispatch){
    return{actions:bindActionCreators(decreasecounter,dispatch)}
}
export default connect(mapdispatchtoprops)(decreasecounter);