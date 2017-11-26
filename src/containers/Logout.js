import React from 'react';
import {CircularProgress} from "material-ui";
import {base} from '../base'

class Logout extends React.Component {
    componentWillMount(){
        base.auth().signOut().then(() => {
            this.context.router.transitionTo('/login');
        })
    }

    render() {

        return(
            <div style={{textAlign: "center", position: "absolute", top:"25%", left:"50%"}}>
                <h3>Logging Out</h3>
                <CircularProgress size={100} thickness={5} color={"#11C1F7"}/>
            </div>
        )
    }
}

export default Logout;

Logout.contextTypes = {
    router: React.PropTypes.object
};