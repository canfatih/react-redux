import React, { Component } from 'react'
import { connect } from 'react-redux';
import{increasebytwocounter} from '../redux/actions/counteractions';
import { bindActionCreators } from 'redux'

 class increasebytwocounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increasebytwocounter());
                
                }}>2 arttır</button>
            </div>
        )
    }
}
function mapdispatchtoprops(dispatch){
    return{actions:bindActionCreators(increasebytwocounter,dispatch)}
}
export default connect(mapdispatchtoprops)(increasebytwocounter);