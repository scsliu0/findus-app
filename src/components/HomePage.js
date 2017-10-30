import React from 'react';
import {Header} from './Header';
import {NavBar} from './NavBar';

class HomePage extends React.Component {
    render(){
        return(
            <div>
               <Header />
			   <NavBar />
            </div>
        )
    }
}

export default HomePage;
