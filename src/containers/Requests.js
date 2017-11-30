import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import {green500, white} from 'material-ui/styles/colors';
import ActionDone from 'material-ui/svg-icons/action/done';
import {base} from '../base';

class Requests extends React.Component {

    constructor(){
        super();
        this.state = {
            open: false,
        };
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

        return(
            <div className="SearchPage">
                <div style={styles.container}>
                    <Subheader style={styles.title}>Search for Users</Subheader>
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
                          {/*{Object.values(this.props.userlist[this.props.uid].requestList).map((user) => {
                              console.log(this.pr)
                              console.log(user);
                              if(this.props.uid !== user.uid){
                                  return (
                                      <TableRow>
                                        <TableRowColumn  style={styles.columns.name}>{user.name}</TableRowColumn>
                                        <TableRowColumn  style={styles.columns.interests}>Interests</TableRowColumn>
                                        <TableRowColumn  style={styles.columns.requests}>
                                            <FloatingActionButton zDepth={0}
                                                                  mini={true}
                                                                  backgroundColor={white}
                                                                  iconStyle={styles.editButton}
                                                                  onClick={() => {
                                                                      console.log("Person requested for "+user.name);
                                                                      console.log("Person sending "+this.props.uid);
                                                                      this.handleTouchTap();
                                                                      /*base.update('users/'+user.uid + '/acceptedList/'+this.props.uid, {
                                                                         data:{
                                                                             uid: this.props.uid,
                                                                             name: this.props.userlist[this.props.uid].name,
                                                                             interests: this.props.userlist[this.props.uid].interests
                                                                             },
                                                                             then(err){
                                                                                 if(!err){
                                                                                     console.log("request sent")
                                                                                 }
                                                                             }
                                                                         });
                                                                         base.update('users/'+this.props.uid + '/acceptedList/'+user.uid, {
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
                                                                            });
                                                                  }}>
                                                <ActionDone  />
                                            </FloatingActionButton>
                                        </TableRowColumn>
                                      </TableRow>
                                      */}
                                  )
                              }
                          })}
                      </TableBody>
                    </Table>
                    <Snackbar
                              open={this.state.open}
                              message="Request Accepted"
                              autoHideDuration={3000}
                              onRequestClose={this.handleRequestClose}
                    />
                </div>
            </div>
        )
    }
}

export default Requests;
