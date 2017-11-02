import React, { Component, PropTypes } from 'react';
import CheckboxMat from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class Checkbox extends Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (

            <CheckboxMat
                type={"checkbox"}
                label={label}
                checked={isChecked}
                onCheck={this.toggleCheckboxChange}
            />
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;