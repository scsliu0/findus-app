import React from 'react';
import Header from '../components/Header';
import Subheader from 'material-ui/Subheader';

class RequestsPage extends React.Component {
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
            }
        }
        return(
            <div className="requestPaper">
                <div style={styles.container}>
                    <Subheader style={styles.title}>Requests</Subheader>
                </div>
            </div>
        )
    }
}

export default RequestsPage;
