import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import {grey200, grey500} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {base} from '../base';

class SearchPage extends React.Component {

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
              fill: grey500
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
                          <TableHeaderColumn style={styles.columns.request}>Request Profile</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        {Object.values(this.props.userlist).map((user) => {
                            if(this.props.uid !== user.uid){
                                return (
                                    <TableRow>
                                      <TableRowColumn  style={styles.columns.name}>{user.name}</TableRowColumn>
                                      <TableRowColumn  style={styles.columns.interests}>Interests</TableRowColumn>
                                      <TableRowColumn  style={styles.columns.requests}>
                                          <FloatingActionButton zDepth={0}
                                                                mini={true}
                                                                backgroundColor={grey200}
                                                                iconStyle={styles.editButton}
                                                                onClick={() => {
                                                                    console.log(user.uid);
                                                                    console.log(this.props.uid);
                                                                    this.handleTouchTap();
                                                                    base.push('users/'+user.uid + '/requestList', {
                                                                       data:{
                                                                           uid: this.props.uid
                                                                           },
                                                                           then(err){
                                                                               if(!err){
                                                                                   console.log("request sent")
                                                                               }
                                                                           }
                                                                       });
                                                                }}>
                                              <ContentAdd  />
                                          </FloatingActionButton>
                                      </TableRowColumn>
                                    </TableRow>
                                )
                            }
                        })}
                      </TableBody>
                    </Table>
                    <Snackbar
                              open={this.state.open}
                              message="Request Sent"
                              autoHideDuration={3000}
                              onRequestClose={this.handleRequestClose}
                    />
                </div>
            </div>
        )
    }
}

export default SearchPage;
