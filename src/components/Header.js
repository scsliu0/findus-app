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

class Header extends React.Component{

    constructor(props) {
      super(props);
      this.state = {open: false};
    }

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
                float: 'left',
                display: 'block',
                marginRight: 15,
                boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
              },
              span: {
                paddingTop: 12,
                display: 'block',
                color: 'white',
                fontWeight: 300,
                textShadow: '1px 1px #444'
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
                          <Avatar src={avatar}
                                  size={50}
                                  style={drawerstyles.avatar.icon}/>
                          <span style={drawerstyles.avatar.span}>Username</span>
                        </div>
                        <div>
                            <MenuItem style={drawerstyles.logoutItem} onClick={this.handleClose}>Sign Out</MenuItem>
                            <MenuItem style={drawerstyles.menuItem} onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem style={drawerstyles.menuItem} onClick={this.handleClose}>Search</MenuItem>
                            <MenuItem style={drawerstyles.menuItem} onClick={this.handleClose}>Requests</MenuItem>
                            <MenuItem style={drawerstyles.menuItem} onClick={this.handleClose}>Connections</MenuItem>
                        </div>
                </Drawer>

            </div>
        )
    }
}

export default Header;
