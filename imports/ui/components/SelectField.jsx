import React, { Component, PropTypes } from 'react';

export default class SelectField extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			value: props.value,
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event){
		this.setState({
			value: event.currentTarget.value,
		})
	} 

	render() {
		const {name, optionsValue} = this.props;
		const {value} = this.state;
		return (
			<select 
				name={name}
				value={this.state.value}
				onChange={this.handleOnChange}
				required
			>
				<option value={optionsValue[0]}>{optionsValue[0]}</option>
				<option value={optionsValue[1]}>{optionsValue[1]}</option>
				<option value={optionsValue[2]}>{optionsValue[2]}</option>
				<option value={optionsValue[3]}>{optionsValue[3]}</option>
			</select>
		);
	}
}

SelectField.propTypes = {
	value: PropTypes.string,
	optionsValue: PropTypes.array,
	name: PropTypes.string,
};