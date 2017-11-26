import React from 'react';
import Header from '../components/Header';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ConnectionsPage extends React.Component {
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
            columns: {
              name: {
                width: '40%'
              },
              interests: {
                width: '40%'
              },
              profile: {
                width: '20%'
              },
            }
        };

        return(
            <div className="requestPaper">
                <Header styles={styles.header}/>

                <div style={styles.container}>
                    <Subheader style={styles.title}>Connections</Subheader>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                      <TableHeaderColumn style={styles.columns.interests}>Interests Matched</TableHeaderColumn>
                      <TableHeaderColumn style={styles.columns.profile}>Profile Link</TableHeaderColumn>

                    </TableRow>
                  </TableHeader>
                  <TableBody>

                  </TableBody>
                </Table>
            </div>
        )
    }
}

export default ConnectionsPage;
