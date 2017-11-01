import React from 'react';

var Users = [
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
    ]



export class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {userInterests: ["Warhammer", "Gaming", "Hiking", "Baseball"]};
    };

    handleRemoveInterest(index){
        this.setState({
            userInterests2: this.state.userInterests.filter(function (e, i) {

            return i !== index;
       })

    })

    }
    render(){
        return(
            <div className='container'>
				<h4>Account signed in as: <span className='Badge'>Luke</span></h4>
                <h3>Your interests are:</h3>
                <ul className='list-group'>
                    {this.state.userInterests.map((user, index) =>
                        <li className='list-group-item' key={index}>
                            <h4 className="list-group-item-heading">{user}</h4>

                            <button className='btn btn-danger btn-sm' onClick={this.handleRemoveInterest.bind(this, index)}><span className='glyphicon glyphicon-trash'></span>Remove</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ProfilePage;
