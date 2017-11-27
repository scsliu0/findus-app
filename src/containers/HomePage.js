import React from 'react';
import logo from '../img/findUs.png';

const logoDiv={
    position:'absolute',
    top: '10%',
    left: '38%',
    height: '50px',
    width: '50px'
};

class HomePage extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div className="HomePage">
                <div style={logoDiv} className="logo">
                    <img alt="findus-logo" src={logo}/>
                </div>

                <div className="loginInfo">
                </div>
            </div>
        )
    }
}

export default HomePage

HomePage.contextTypes = {
    router: React.PropTypes.object
};