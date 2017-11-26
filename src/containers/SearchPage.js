import React from 'react';
import Header from '../components/Header';
import Subheader from 'material-ui/Subheader';

class SearchPage extends React.Component {
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
                <Header styles={styles.header}/>

                <div style={styles.container}>
                    <Subheader style={styles.title}>Search</Subheader>
                </div>
            </div>
        )
    }
}

export default SearchPage;
