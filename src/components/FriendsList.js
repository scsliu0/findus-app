import React from 'react'
import {Chip, RaisedButton, TableRow, TableRowColumn} from "material-ui";
import {blue500, white} from 'material-ui/styles/colors';

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
    profileButton: {
        color: 'white',
        align: 'left'

    },
    columns: {
        name: {
            width: '20%'
        },
        interests: {
            width: '58%'
        },
        edit: {
            width: '22%'
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

class FriendsList extends React.Component{
    render(){
        const {user, uid} = this.props;
            return (
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
                        <RaisedButton         label="View Profile"
                                              labelColor={white}
                                              backgroundColor={blue500}
                                              style={styles.profileButton}
                                              onClick={() => this.props.viewProfile(this.props.index)}
                        />
                    </TableRowColumn>
                </TableRow>
            )

    }
}

export default FriendsList
