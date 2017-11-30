//Main App page
import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {CircularProgress} from "material-ui";
import {grey500, white} from 'material-ui/styles/colors';

import SearchPage from './SearchPage';
import Requests from './Requests';

import Profile from "./Profile";
import sampleInterests from '../sample-interests';
import {base} from '../base'
import Header from "../components/Header";
import Connections from "../containers/ConnectionsPage"
import Search from "../containers/SearchPage"
import Login from "./Login";

const styles = {
    loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '5%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    paper: {
        padding: 20,
        overflow: 'hidden'
    },
    buttonsDiv: {
        textAlign: 'center',
        padding: 10
    },
    flatButton: {
        color: grey500
    },
    checkRemember: {
        style: {
            float: 'left',
            maxWidth: 180,
            paddingTop: 5
        },
        labelStyle: {
            color: grey500
        },
        iconStyle: {
            color: grey500,
            borderColor: grey500,
            fill: grey500
        }
    },
    loginBtn: {
        float: 'right'
    },
    btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
    },
    btnFacebook: {
        background: '#4f81e9'
    },
    btnGoogle: {
        background: '#e14441'
    },
    btnSpan: {
        marginLeft: 5
    },
    logoDiv: {
        align: 'center',
        paddingLeft: '13%'

    }
};

const url = "/user/:userId/";

class App extends React.Component {

    constructor(){
        super();
        this.getUser = this.getUser.bind(this);
        //initialState
        this.state={
            uid: null,
            urlUid: null,
            owner: null,
            userlist: {},
            interests: {},
            authenticated: false,
            loading: true
        };
    }

    componentWillMount() {
        this.ref = base.syncState('/users/' + this.props.params.userId + '/interests',
            {
                context: this,
                state: 'interests'
            });

            base.fetch('users/', {
                context: this,
                then(data) {
                    if (data === null) {
                        console.log("null data")
                    } else {

                        this.setState({
                            userlist: data
                        })
                    }
                },
            })
        /*this.ref = base.syncState('/users/',{
                context: this,
                state: 'userlist'
        });*/

        this.removeAuthListener = base.auth().onAuthStateChanged((user) => {

            if(user) {
                this.setState({
                    authenticated: true,
                    uid: user.uid,
                    urlUid: this.props.params.userId,
                    loading: false
                })
            } else {
                this.setState({
                    authenticated: false,
                    urlUid: this.props.params.userId,
                    loading: false
                })
            }
        });


    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
        this.removeAuthListener();
    }

    getUser(user){
        const users = {...this.state.users};
        users['users']=user;
        this.setState({ users });
    }

    addInterest(interest){
        const interests = {...this.state.interests};
        const timeStamp = Date.now();
        interests['interest-'+timeStamp] = interest;
        this.setState({interests});
    }

    removeInterest(key) {
        const interests = {...this.state.interests};
        interests[key] = null;
        this.setState({interests});
    }

    handleActive = () => {
        if(this.state.uid){
            this.context.router.transitionTo('/user/'+this.state.uid);
        }
    };

    loadSamples =()=>{
        this.setState({
            interests: sampleInterests
        })
    };

    render(){
        if(this.state.loading === true) {
            return(
                <div>
                    <div style={{textAlign: "center", position: "absolute", top:"25%", left:"50%"}}>
                        <h3>Loading</h3>
                        <CircularProgress size={100} thickness={5} color={"#11C1F7"}/>
                    </div>
                </div>
            )
        }
        if(this.state.authenticated === false) {
            return(
                <div>
                    <Login/>
                </div>
            )
        }

        if(this.props.pattern===url+'profile') {
            return(
                <div>
                    <Header styles={styles.header} authenticated={this.state.authenticated} userId={this.state.uid}/>
                    <Profile uid={this.state.uid} profileId={this.props.params.userId} interests={this.state.interests} loadSamples={this.loadSamples}/>
                </div>
            )
        }

        if(this.props.pattern===url+'search') {
            return(
                <div>
                    <Header styles={styles.header} authenticated={this.state.authenticated} userId={this.state.uid}/>
                    <Search uid={this.state.uid} userlist={this.state.userlist} interests={this.state.interests}/>
                </div>
            )
        }

        if(this.props.pattern===url+'connections') {
            return(
                <div>
                    <Header styles={styles.header} authenticated={this.state.authenticated} userId={this.state.uid}/>
                    <Connections uid={this.state.uid} interests={this.state.interests}/>
                </div>
            )
        }

        if(this.props.pattern===url+'requests') {
            return(
                <div>
                    <Header styles={styles.header} authenticated={this.state.authenticated} userId={this.state.uid}/>
                    <Requests uid={this.state.uid} userlist={this.state.userlist}/>
                </div>
            )
        }



        return(
            <div className="App">
                <Header styles={styles.header} authenticated={this.state.authenticated} userId={this.state.uid}/>

            </div>
        )
    }
}

export default App

App.contextTypes = {
    router: React.PropTypes.object
};

//<Menubar authenticated={this.state.authenticated} />
