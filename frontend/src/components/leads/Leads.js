import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgress } from '../../actions/progress';
import { DataTable, Column } from 'primereact/datatable';
import { bugs } from './bugs.json';

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
				<i className="pi pi-check" style={{ fontSize: '3em' }}></i>
				<h2>Progress</h2>
				<DataTable value={bugs}>
					<Column field="name" header="Name" />
					<Column field="rarity" header="Rarity" />
					<Column field="price" header="Price" />
					<Column field="location" header="Location" />
					<Column field="january" header="January" />
					<Column field="february" header="February" />
					<Column field="march" header="March" />
					<Column field="april" header="April" />
					<Column field="may" header="May" />
					<Column field="june" header="June" />
					<Column field="july" header="July" />
					<Column field="august" header="August" />
					<Column field="september" header="September" />
					<Column field="october" header="October" />
					<Column field="november" header="November" />
					<Column field="december" header="December" />
					<Column field="time" header="Time" />
				</DataTable>
				{/* {this.props.progress.map((progress) => (
								<tr key={progress.id}>
									<td>{progress.id}</td>
									<td>{progress.fish}</td>
									<td>{progress.bugs}</td>
									<td>{progress.paintings}</td>
									<td></td> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	progress: state.progress.progress,
});

export default connect(mapStateToProps, { getProgress })(Progress);
