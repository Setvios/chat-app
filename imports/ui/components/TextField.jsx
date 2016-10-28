import React, { Component, PropTypes } from 'react';

export default class TextField extends Component {
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
		const {type, name, placeholder} = this.props;
		const {value} = this.state;

		return (
			<input 
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={this.handleOnChange}
			/>
		);
	}
}

TextField.propTypes = {
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
};