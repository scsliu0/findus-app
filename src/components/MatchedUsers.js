import React, { Component } from 'react';

var users = [
    {
        userName: "Blake",
        userInterests: ["Hockey", "Gaming", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Shane",
        userInterests: ["Cricket", "Gaming", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Luke",
        userInterests: ["Warhammer", "Gaming", "Hiking", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Kayla",
        userInterests: ["Reading", "Exercise", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Chris",
        userInterests: ["Dancing", "Gaming", "Dying", "Soccer", "Baseball"],
        userLocation: [0,0]
    }
];

class MatchedUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users
        };
    }

    render(){
        return(
            <div className={"container"}>
                <div className={"page-header"}>
                    <h1>Matched Users List</h1>
                </div>
                <hr/>
                <h4>
                    Matched Users: <span className={"badge"}>{this.state.users.length}</span>
                </h4>

                <ul className={"list-group"}>
                    { this.state.users.map((user, index) =>
                        <li className={"list-group-item"} key={index}>
                            <h4 className={"list-group-item-heading"}>{user.userName}</h4>
                            <p>{user.userInterests[1]}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default MatchedUsers;