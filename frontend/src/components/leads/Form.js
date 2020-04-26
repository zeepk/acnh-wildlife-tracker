import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addProgress } from '../../actions/progress';

export class Form extends Component {
	state = {};

	static propTypes = {
		addProgress: PropTypes.func.isRequired,
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addProgress();
	};

	render() {
		return (
			<div className="card card-body mt-4 mb-4">
				<h2>Add Lead</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, { addProgress })(Form);
