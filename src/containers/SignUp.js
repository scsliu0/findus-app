import React from 'react';

class SignUp extends React.Component {
    render(){
        return(
            <div className="ProfilePage">
                SignUp
            </div>
        )
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;
