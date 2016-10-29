import React, { Component, PropTypes } from 'react';

export default class SelectField extends Component {
	render() {
		const { name, optionsValue, value, onChange } = this.props;
		
		return (
			<select 
				name={name}
				value={value}
				onChange={e => onChange(e.currentTarget.value)}
				required
			>
				{optionsValue.map( (item, i) => <option key={i} value={item}>{item}</option>)}
			</select>
		);
	}
}

SelectField.propTypes = {
	value: PropTypes.string.isRequired,
	optionsValue: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
};