import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {blue900, white} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {base} from '../base';
import FriendsList from '../components/FriendsList'

class ConnectionsPage extends React.Component {

    constructor(){
        super();
        this.state = {
            userList: {},
            acceptedList: {}
        };
    }

    componentWillMount(){
    /*    base.fetch('users/', {
            context: this,
            then(data) {
                console.log(data);
                if (data === null) {
                    //don't set userlist or username yet, you're on the login page
                } else {
                    this.setState({
                        userList: data
                    })
                    console.log(this.state.userlist);
                }
            },
        });
        */

        base.fetch('users/'+this.props.uid+'/acceptedList', {
            context: this,
            then(data) {
                console.log(data);
                console.log(this.state.acceptedList);
                if (data === null) {
                    //don't set userlist or username yet, you're on the login page
                } else {
                    this.setState({
                        acceptedList: data
                    })
                    console.log(this.state.acceptedList);
                }
            },
        });
    }

      handleViewProfile = (targetId) => {
          console.log("Target "+targetId);
          this.context.router.transitionTo('/user/' + targetId + '/profile');
          console.log("context")
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
                                  .keys(this.state.acceptedList)
                                  .map(user => <FriendsList key={user} user={this.state.acceptedList[user]} index={user} uid={this.props.uid} viewProfile={this.handleViewProfile}/>)
                          }
                      </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

ConnectionsPage.contextTypes = {
    router: React.PropTypes.object
};

export default ConnectionsPage;
