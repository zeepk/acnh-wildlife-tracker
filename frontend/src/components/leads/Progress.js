import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgress } from '../../actions/progress';
import { DataTable, Column } from 'primereact/datatable';
import { bugs } from './bugs.json';
import { CheckBox } from './CheckBox';

export class Progress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supports_local: true,
			using_local: true,
		};
	}

	static propTypes = {
		progress: PropTypes.array.isRequired,
		getProgress: PropTypes.func.isRequired,
		auth: PropTypes.object.isRequired,
	};

	componentDidMount() {
		// if (this.props.getProgress()) {
		// 	console.log('got progress');
		// } else {
		// 	alert('cannot get progress');
		// }
		// alert(this.props.auth);
		console.table(this.props.auth);
		if (this.props.auth.isLoading) {
			console.log('loading auth...');
		} else if (this.props.auth.isAuthenticated) {
			console.log('auth!');
			this.props.getProgress();
		}
		if (typeof Storage !== 'undefined') {
			if (!window.localStorage.getItem('bugs')) {
				console.log('No local storage found, creating...');
				window.localStorage.setItem(
					'bugs',
					'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
				);
				window.localStorage.setItem(
					'fish',
					'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
				);
				window.localStorage.setItem(
					'art',
					'00000000000000000000000000000000000000000000000000000000000000000000000000000000'
				);
			}
		} else {
			this.setState({
				supports_local: false,
			});
			alert(
				'Your browser does not support local storage. You may still use this site as a reference. Please register an account or use a different browser to track your progress.'
			);
		}
	}

	actionTemplate(rowData, column) {
		console.log(rowData.id);
		return (
			<div>
				<CheckBox row_id={rowData.id} />
			</div>
		);
	}
	render() {
		console.log('PROGRESS');
		console.log(this.props.progress);
		return (
			<div>
				{/* <i className="pi pi-check" style={{ fontSize: '3em' }}></i> */}
				<h2>Progress</h2>
				<DataTable value={bugs}>
					<Column
						body={this.actionTemplate}
						header="Caught"
						style={{ textAlign: 'center', width: '6em' }}
					/>
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
	auth: state.auth,
});

export default connect(mapStateToProps, { getProgress })(Progress);
