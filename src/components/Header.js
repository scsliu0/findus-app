import React from 'react';
import AppBar from 'material-ui/AppBar';
import {red800, white, blue600} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import avatar from '../img/stock.svg';
import {RaisedButton} from "material-ui";

class Header extends React.Component{

    constructor(props) {
      super(props);
      this.state = {open: false};
    }

    goToLogin = () => {
        this.context.router.transitionTo('/login');
    };

    goToLogout = () => {
        this.context.router.transitionTo('/logout');
    };

    goToSearch = () => {
        this.context.router.transitionTo('/user/' + this.props.userId + '/search');
    };

    goToRequests = () => {
        this.context.router.transitionTo('/user/' + this.props.userId +  '/requests');
    };

    goToConnections = () => {
        this.context.router.transitionTo('/user/' + this.props.userId + '/connections');
    };

    goToProfile = () => {
        this.context.router.transitionTo('/user/' + this.props.userId + '/profile');
    };

    render(){

        const drawerstyles ={
            logo: {
              cursor: 'pointer',
              fontSize: 22,
              color: typography.textFullWhite,
              lineHeight: `${spacing.desktopKeylineIncrement}px`,
              fontWeight: typography.fontWeightLight,
              backgroundColor: blue600,
              paddingLeft: 40,
              height: 56,
            },
            menuItem: {
              color: white,
              fontSize: 14
            },
            logoutItem: {
              color: red800,
              fontSize: 14
            },
            avatar: {
              div: {
                padding: '15px 0 20px 15px',
                height: 45
              },
              icon: {
                  paddingTop:8,
                  float: 'left',
                  display: 'block',
                  marginRight: 15,
                  textAlign: 'center',
                  backgroundColor: blue600
              },
              span: {
                paddingTop: 12,
                display: 'block',
                color: 'white',
                fontWeight: 300,
                textShadow: '1px 1px #444'

              },
                letter: {
                  textAlign: 'center'
                }
            }
          };

        const style = {
          appBar: {
            position: 'fixed',
            top: 0,
            overflow: 'hidden',
            maxHeight: 57
          },

          menuButton: {
            marginLeft: 10
          },
          iconsRightContainer: {
            marginLeft: 20
          },

        };

        return(
            <div className="Header">
                {!this.props.authenticated
                    ?
                    <div>
                        <AppBar
                            style={style.appBar}
                            title="FindUs"
                            iconElementLeft={
                                <IconButton style={style.menuButton} onClick={() => this.setState({open: !this.state.open})}>
                                  <Menu color={white} />
                                </IconButton>
                            }
                            iconElementRight={<RaisedButton onClick={this.goToLogin} label={"Login/Signup"}/>}
                        />

                        <Drawer
                                docked={false}
                                width={200}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}
                                >
                                <div style={drawerstyles.logo}>
                                  FindUs
                                </div>
                                <div style={drawerstyles.avatar.div}>
                                    <Avatar><span style={drawerstyles.avatar.letter}>{this.props.username.charAt(0)}</span></Avatar>
                                </div>
                                <div>
                                    <MenuItem style={drawerstyles.logoutItem} onClick={this.goToLogin}>Log in/Sign Up</MenuItem>
                                    <MenuItem style={drawerstyles.menuItem} onClick={this.goToProfile}>Profile</MenuItem>
                                    <MenuItem style={drawerstyles.menuItem} onClick={this.goToSearch}>Search</MenuItem>
                                    <MenuItem style={drawerstyles.menuItem} onClick={this.goToRequests}>Requests</MenuItem>
                                    <MenuItem style={drawerstyles.menuItem} onClick={this.goToConnections}>Connections</MenuItem>
                                </div>
                        </Drawer>
                    </div>
                :
                    <div>
                        <AppBar
                            style={style.appBar}
                            title="FindUs"
                            iconElementLeft={
                                <IconButton style={style.menuButton} onClick={() => this.setState({open: !this.state.open})}>
                                    <Menu color={white} />
                                </IconButton>
                            }

                        />

                        <Drawer
                            docked={false}
                            width={200}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <div style={drawerstyles.logo}>
                                FindUs
                            </div>
                            <div style={drawerstyles.avatar.div}>
                                <Avatar size={50}
                                        style={drawerstyles.avatar.icon}><span style={drawerstyles.avatar.letter}>{this.props.username.charAt(0)}</span></Avatar>
                                <span style={drawerstyles.avatar.span}>{this.props.username}</span>
                            </div>
                            <div>
                                <MenuItem style={drawerstyles.logoutItem} onClick={this.goToLogout}>Log Out</MenuItem>
                                <MenuItem style={drawerstyles.menuItem} onClick={this.goToProfile}>Profile</MenuItem>
                                <MenuItem style={drawerstyles.menuItem} onClick={this.goToSearch}>Search</MenuItem>
                                <MenuItem style={drawerstyles.menuItem} onClick={this.goToRequests}>Requests</MenuItem>
                                <MenuItem style={drawerstyles.menuItem} onClick={this.goToConnections}>Connections</MenuItem>
                            </div>
                        </Drawer>
                    </div>

                    }
            </div>
        )
    }
}

export default Header;

Header.contextTypes = {
    router: React.PropTypes.object
};