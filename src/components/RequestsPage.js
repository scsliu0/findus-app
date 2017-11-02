import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const paperStyle={
    height: 500,
    width: 500
}

const acceptedStyle={
    position: 'absolute',
    margin: '30px',
    left: '5%'
}


const receivedStyle={
    position: 'absolute',
    left: '50%',
    margin: '30px'
}
class RequestsPage extends React.Component {

    render(){
        return(
            <div className="requestPaper">
                <div style={acceptedStyle} className="acceptedRequests">
                    <Paper style={paperStyle}>
                        <Subheader style={{textAlign: 'center'}}>Accepted Requests</Subheader>
                        <Divider />
                            <Table>
                                <TableHeader adjustforCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>name</TableHeaderColumn>
                                        <TableHeaderColumn>matched interest</TableHeaderColumn>
                                        <TableHeaderColumn>profile</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody  displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>Shane</TableRowColumn>
                                        <TableRowColumn>Football</TableRowColumn>
                                        <TableRowColumn>
                                            <FlatButton label="Profile" secondary={true} />
                                        </TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                    </Paper>
                </div>
                <div style={receivedStyle} className="receivedRequests">
                    <Paper style={paperStyle}>
                        <Subheader style={{textAlign: 'center'}}>Received Requests</Subheader>
                        <Divider />
                            <Table>
                                <TableHeader adjustforCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>name</TableHeaderColumn>
                                        <TableHeaderColumn>matched interest</TableHeaderColumn>
                                        <TableHeaderColumn>request</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody  displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>Shane</TableRowColumn>
                                        <TableRowColumn>Football</TableRowColumn>
                                        <TableRowColumn><FlatButton label="Accept" primary={true} /></TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                    </Paper>
                </div>
                </div>
        )
    }
}

export default RequestsPage;
