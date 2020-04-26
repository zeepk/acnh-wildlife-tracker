import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgress } from '../../actions/progress';

export class Progress extends Component {
	static propTypes = {
		progress: PropTypes.array.isRequired,
		getProgress: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getProgress();
	}

	render() {
		return (
			<div>
				<Fragment>
					<h2>Progress</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Fish</th>
								<th>Bugs</th>
								<th>Paintings</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.props.progress.map((progress) => (
								<tr key={progress.id}>
									<td>{progress.id}</td>
									<td>{progress.fish}</td>
									<td>{progress.bugs}</td>
									<td>{progress.paintings}</td>
									<td>
										{/* <button
											onClick={this.props.deleteLead.bind(this, lead.id)}
											className="btn btn-danger btn-sm"
										>
											Delete
										</button> */}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Fragment>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	progress: state.progress.progress,
});

export default connect(mapStateToProps, { getProgress })(Progress);
