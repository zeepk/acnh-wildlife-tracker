import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';

export class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: window.localStorage.getItem('bugs')[this.props.row_id] == '1',
		};
	}

	replaceChar(origString, replaceChar, index) {
		console.log('Original: ' + origString);
		console.log('Index: ' + index);
		let firstPart = origString.slice(0, index);
		let lastPart = origString.slice(index + 1);
		console.log('First: ' + firstPart);
		console.log('Last: ' + lastPart);

		let newString = firstPart + replaceChar + lastPart;
		console.log(newString);
		return newString;
	}

	check_func = (checked) => {
		// console.log(checked);
		// console.log(window.localStorage.getItem('bugs')[this.props.row_id]);
		let local_string = window.localStorage.getItem('bugs');
		if (checked) {
			console.log(local_string);
			local_string = this.replaceChar(local_string, '1', this.props.row_id);
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: true,
			});
		} else {
			console.log(local_string);
			local_string = this.replaceChar(local_string, '0', this.props.row_id);
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: false,
			});
		}
	};

	render() {
		// console.log(window.localStorage.getItem('bugs')[this.props.row_id]);
		return (
			<div>
				<Checkbox
					onChange={(e) => this.check_func(e.checked)}
					checked={this.state.checked}
				></Checkbox>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	progress: state.progress.progress,
// });

// export default connect(mapStateToProps, { getProgress })(CheckBox);
export default CheckBox;
