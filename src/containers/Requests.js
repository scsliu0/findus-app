import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import {green500, white} from 'material-ui/styles/colors';
import ActionDone from 'material-ui/svg-icons/action/done';
import Request from '../components/Request';
import {base} from '../base';

const styles={
    container: {
        margin: '80px 20px 20px 15px'
    },
    form:{
        margin: '0px 40px 40px 40px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '30px'
    },
    editButton: {
        fill: green500
    },
    columns: {
        name: {
            width: '40%'
        },
        interests: {
            width: '40%'
        },
        edit: {
            width: '20%'
        }
    }
};

class Requests extends React.Component {

    constructor(){
        super();
        this.state = {
            open: false,
            snackText: "",
            userList: {},
            requestList: {}
        };
    }

    componentWillMount(){
        base.fetch('users/', {
            context: this,
            then(data) {

                if (data === null) {
                    //don't set userlist or username yet, you're on the login page
                } else {
                    this.setState({
                        userList: data
                    })
                }
            },
        });

        base.fetch('users/'+this.props.uid+'/requestList', {
            context: this,
            then(data) {

                if (data === null) {
                    //don't set userlist or username yet, you're on the login page
                } else {
                    this.setState({
                        requestList: data
                    })
                }
            },
        });
    }

    handleTouchTap = () => {
        this.setState({
          open: true,
        });
      };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleAcceptRequest = (targetId,targetName,targetInterests) => {
        base.update('users/'+this.props.uid+'/acceptedList/'+targetId, {
           data:{
               name: targetName,
               interests: targetInterests
           },
           then(err){
               if(!err){
                   //added user to your acceptedList
               }
           }
        });
        base.update('users/'+targetId+'/acceptedList/'+this.props.uid, {
            data:{
                name: this.state.userList[this.props.uid].name,
                interests: this.state.userList[this.props.uid].interests
            },
            then(err){
                if(!err){
                    //added user to your acceptedList
                }
            }
        });
        // base.remove('users/'+this.props.uid+'/requestList/'+targetId).then(() => {
        //     const requestList = {...this.state.requestList};
        //     delete requestList[targetId];
        //     this.setState({requestList})
        // }).catch(err => {
        //     console.log(err);
        // });
        base.update('users/'+this.props.uid+'/requestList/'+targetId, {
            data:{
                name: null,
                interests: null
            },
            then(err){
                if(!err){
                    //added user to your acceptedList
                }
            }
        });

        const requestList = {...this.state.requestList};
        delete requestList[targetId];
        this.setState({requestList});
};
    handleDeclineRequest = (targetId) => {

    };

    handleRequestSubmit = (user) =>  {
        console.log(user);
        // this.handleTouchTap();
        // base.update('users/'+this.props.uid+'/acceptedList'+user.uid, {
        //     data:{
        //         uid: user.uid,
        //         name: user.name,
        //         interests: user.interests
        //     },
        //     then(err){
        //         if(!err){
        //             console.log("added to own acceptedList");
        //         }
        //     }
        // })
        /*base.update('users/'+user.uid + '/acceptedList/'+this.props.uid, {
           data:{
               uid: this.props.uid,
               name: this.props.userlist[this.props.uid].name,
               interests: this.props.userlist[this.props.uid].interests
               },
               then(err){
                   if(!err){
                       console.log("Request Accepted");
                   }
                   console.log(this.props.uid);
                   base.remove('users/'+this.props.uid+'/requestedList/'+user.uid, function(err){
                     if(!err){
                       console.log('Request Removed from List');
                     }
                   });
               }
           });
      /*base.update('users/'+this.props.uid + '/acceptedList/'+user.uid, {
              data:{
                  uid: user.uid,
                  name: user.userlist[this.props.uid].name,
                  interests: user.userlist[this.props.uid].interests
                  },
                  then(err){
                      if(!err){
                          console.log("request sent")
                      }
                  }
              });*/
    };


    render(){


        return(
            <div className="SearchPage">
                <div style={styles.container}>
                    <Subheader style={styles.title}>Incoming Requests</Subheader>
                    <Table>
                      <TableHeader  displaySelectAll={false}
                                    adjustForCheckbox={false}>
                        <TableRow>
                          <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                          <TableHeaderColumn style={styles.columns.interests}>Interests</TableHeaderColumn>
                          <TableHeaderColumn style={styles.columns.request}>Accept Request</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                          <TableBody displayRowCheckbox={false}>
                              {
                                  Object
                                      .keys(this.state.requestList)
                                      .map(user => <Request key={user} user={this.state.requestList[user]} index={user} uid={this.props.uid} acceptRequest={this.handleAcceptRequest}/>)
                              }
                          </TableBody>
                          {/*
                          {Object.values(this.props.userlist[this.props.uid].requestList).map((user) => {
                              if(this.props.uid !== user.uid){
                                  return (
                                      <TableRow>
                                        <TableRowColumn  style={styles.columns.name}>{user.name}</TableRowColumn>
                                        <TableRowColumn  style={styles.columns.interests}>
                                          <ul>
                                          {Object.values(user.interests).map((interests) =>{
                                              return(
                                                  <li>{interests}</li>
                                              )
                                          })}
                                          </ul>
                                        </TableRowColumn>
                                        <TableRowColumn  style={styles.columns.requests}>
                                            <FloatingActionButton zDepth={0}
                                                                  mini={true}
                                                                  backgroundColor={white}
                                                                  iconStyle={styles.editButton}
                                                                  onClick={this.handleRequestSubmit(user)}>
                                                <ActionDone  />
                                            </FloatingActionButton>
                                        </TableRowColumn>
                                      </TableRow>
                                  )
                              }
                          })}*/}
                    </Table>
                    <Snackbar
                              open={this.state.open}
                              message={this.state.snackText}
                              autoHideDuration={3000}
                              onRequestClose={this.handleRequestClose}
                    />
                </div>
            </div>
        )
    }
}

export default Requests;
