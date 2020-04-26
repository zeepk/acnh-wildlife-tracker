import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';

export class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: window.localStorage.getItem('bugs')[this.props.row_id] == '1',
		};
	}

	// static propTypes = {
	// 	progress: PropTypes.array.isRequired,
	// 	getProgress: PropTypes.func.isRequired,
	// };

	// componentDidMount() {
	// 	this.props.getProgress();
	// 	if (typeof Storage !== 'undefined') {
	// 		if (!window.localStorage.getItem('bugs')) {
	// 			console.log('No local storage found, creating...');
	// 			window.localStorage.setItem(
	// 				'bugs',
	// 				'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
	// 			);
	// 			window.localStorage.setItem(
	// 				'fish',
	// 				'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
	// 			);
	// 			window.localStorage.setItem(
	// 				'art',
	// 				'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
	// 			);
	// 		}
	// 	}
	// }
	is_checked = () => {
		if (window.localStorage.getItem('bugs')[this.props.row_id] == '1') {
			return true;
		} else {
			return false;
		}
	};

	replaceAt = (s, n, t) => {
		return s.substring(0, n) + t + s.substring(n + 1);
	};

	check_func = (checked) => {
		console.log(checked);
		console.log(window.localStorage.getItem('bugs')[this.props.row_id]);
		let local_string = window.localStorage.getItem('bugs');
		if (checked) {
			// local_string[this.props.row_id] = '1';
			console.log(local_string);
			local_string = this.replaceAt(local_string, this.props.row_id, '1');
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: true,
			});
		} else {
			console.log(local_string);
			local_string = this.replaceAt(local_string, this.props.row_id, '0');
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: false,
			});
		}
	};

	render() {
		console.log(window.localStorage.getItem('bugs')[this.props.row_id]);
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
