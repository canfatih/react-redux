import React, { Component } from 'react'
import{connect} from "react-redux";
 class counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counterreducer}</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{counter:state.counterreducer}
};
 export default connect(mapStateToProps)(counter);