import React from 'react';
import {Chip, FloatingActionButton, TableRow, TableRowColumn} from "material-ui";
import {blue500, white, green400} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
            width: '20%'
        },
        interests: {
            width: '62%'
        },
        edit: {
            width: '20%'
        }
    },
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        width:500,

        flexWrap: 'wrap',
    },
};

class Request extends React.Component{

    render(){
        const {user, uid, index} = this.props;
        return(
            <TableRow>
                <TableRowColumn style={styles.columns.name}>

                    {user.name}

                </TableRowColumn>

                <TableRowColumn style={styles.columns.interests}>

                        <div style={styles.wrapper}>
                            {Object.values(user.interests).map((interests) => {
                                return (
                                    <Chip style={styles.chip} key={interests}>{interests}</Chip>
                                )
                            })}
                        </div>

                </TableRowColumn>
                <TableRowColumn style={styles.columns.requests}>

                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={green400}
                                          iconStyle={styles.editButton}
                                          onClick={ ()=> this.props.acceptRequest(index,user.name,user.interests)}
                    >
                        <ContentAdd/>
                    </FloatingActionButton>
                </TableRowColumn>
            </TableRow>
        )
    }
}

export default Request;