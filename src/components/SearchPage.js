import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'

const tableStyle={
    margin: '10px',
    height: 500,
    width: 1000,
    position: 'absolute',
    left: '8%'
}

class SearchPage extends React.Component {
    render(){
        return(
            <div className="requestsPaper">
                <div style={tableStyle} className="searchTable">
                    <Paper>
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
                                    <TableRowColumn><FlatButton label="contact" /></TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default SearchPage;
