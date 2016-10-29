import React, {Component, PropTypes} from 'react';

export default class SelectField extends Component {
	render() {
		const {name, onChange} = this.props;
		const optionsValue = [
			"Select location...",
			"London",
			"Chicago",
			"Boston",
			"Madrid",
		];
		return (
			<select
				name={name}
				onChange={e => onChange(e.currentTarget.value)}
				children={optionsValue.map( (item, i) => <option key={i} value={item}>{item}</option>)}
				required
			/>
		);
	}
}

SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
