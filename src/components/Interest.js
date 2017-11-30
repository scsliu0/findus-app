import React from 'react';
import {Checkbox, Chip} from "material-ui";

const styles ={
    chip: {
        margin: 8
    }
}

class Interest extends React.Component{
    constructor(){
        super();
        this.state={
            checked: false
        }
    }
    componentDidMount(){
        if(this.props.userInterests){
             if(Object.values(this.props.userInterests).indexOf(this.props.details) > -1) {
                 this.setState({
                     checked: true
                 })
             } else {
                 this.setState({
                     checked: false
                 })
             }
        }

    }

    componentWillUpdate(nextProps){
        if(nextProps===this.props){

        } else {
            if(nextProps.userInterests){
                if(Object.values(nextProps.userInterests).indexOf(nextProps.details) > -1) {
                    this.setState({
                        checked: true
                    })
                } else {
                    this.setState({
                        checked: false
                    })
                }
            }
        }
    }

    handleChange = () => {
        if(this.state.checked){
            //Take out of interests
            this.props.removeFromInterests(this.props.index)
        } else {
            this.props.addToInterests(this.props.index, this.props.details)
        }
        this.setState({checked: !this.state.checked});
    };

    render(){
        const {details} = this.props;
        if(this.props.editable){
            return(
                <Checkbox label={details} checked={this.state.checked} onCheck={this.handleChange}/>
            )
        }

        return(
            <Chip style={styles.chip}>{details}</Chip>
            //<Checkbox label={details} checked={this.state.checked} onCheck={this.handleChange}/>
        )

    }
}

export default Interest
