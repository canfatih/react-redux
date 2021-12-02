import React, { Component } from 'react'
import { connect } from 'react-redux';
import{increasecounter} from '../redux/actions/counteractions';
import { bindActionCreators } from 'redux'



 class increasecounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increasecounter());
                
                }}>1 arttır</button>
            </div>
        )
    }
}


function mapdispatchtoprops(dispatch){
    return{actions:bindActionCreators(increasecounter,dispatch)}
}
export default connect(mapdispatchtoprops)(increasecounter);