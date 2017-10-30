import React from 'react';
import {headerStyle} from './Styles';

export class Header extends React.Component {
    render(){
        return(
            <div>
				<header style={headerStyle}>
					<h1>FindUs</h1>
				</header>
            </div>
        )
    }
}

export default Header;
