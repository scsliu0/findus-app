import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import {blue900, white} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {base} from '../base';
import FriendsList from '../components/FriendsList'

class ConnectionsPage extends React.Component {

    constructor(){
        super();
        this.state = {
            open: false,
            snackText: "",
            userList: {},
            acceptedtList: {}
        };
    }

    componentWillMount(){
        base.fetch('users/', {
            context: this,
            then(data) {

                if (data === null) {
                    //don't set userList or username yet, you're on the login page
                } else {
                    this.setState({
                        userList: data
                    })
                }
            },
        });

        base.fetch('users/'+this.props.uid+'/acceptedtList', {
            context: this,
            then(data) {

                if (data === null) {
                    //don't set userlist or username yet, you're on the login page
                } else {
                    this.setState({
                        acceptedList: data
                    })
                }
            },
        });
    }

    componentDidUpdate(){

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

      requestSent = () => {
          this.setState({
              open:true,
              snackText: "Request Sent!"
          });
      };

      handleSendRequest = (targetId) => {
          if (this.state.userList[this.props.uid].name && this.state.userList[this.props.uid].interests) {
              base.update('users/' + targetId + '/requestList/' + this.props.uid, {
                  data: {
                      name: this.state.userList[this.props.uid].name,
                      interests: this.state.userList[this.props.uid].interests
                  },
                  then(err) {
                      if (!err) {
                          console.log("request sent");
                      }
                  }
              });

              this.setState({
                  open:true,
                  snackText: "Request Sent!"
              });
          } else {
              this.setState({
                  open:true,
                  snackText: "Configure your account correctly first"
              })
          }

      };




    render(){

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
              fill: white
            },
            columns: {
              name: {
                width: '30%'
              },
              interests: {
                width: '50%'
              },
              edit: {
                width: '20%'
              }
            }
        };
        return(
            <div className="ConnectionsPage">
                <div style={styles.container}>
                    <Subheader style={styles.title}>Friends</Subheader>
                    <Table>
                      <TableHeader  displaySelectAll={false}
                                    adjustForCheckbox={false}>
                        <TableRow>
                          <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                          <TableHeaderColumn style={styles.columns.interests}>Interests</TableHeaderColumn>
                          <TableHeaderColumn style={styles.columns.request}>Profile</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                          {
                              Object
                                  .keys(this.state.userList)
                                  .map(user => <FriendsList key={user} user={this.state.userList[user]} index={user} uid={this.props.uid} sendRequest={this.handleSendRequest}/>)
                          }
                      </TableBody>
                    </Table>
                    <Snackbar
                              open={this.state.open}
                              message={this.state.snackText}
                              bodyStyle={{background: blue900}}
                              autoHideDuration={3000}
                              onRequestClose={this.handleRequestClose}
                    />
                </div>
            </div>
        )
    }
}

export default ConnectionsPage;
