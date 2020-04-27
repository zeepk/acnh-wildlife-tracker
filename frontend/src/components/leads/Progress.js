import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgress } from '../../actions/progress';
import { DataTable, Column } from 'primereact/datatable';
import { bugs } from './bugs.json';
import { CheckBox } from './CheckBox';
import './Progress.css';

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

	checkBoxTemplate(rowData, column) {
		// console.log(rowData.id);
		return (
			<div>
				<CheckBox row_id={rowData.id} />
			</div>
		);
	}
	monthTemplate(rowData, column) {
		// console.log(rowData[column.field]);
		if (rowData[column.field] == '1') {
			return (
				<div style={{ textAlign: 'center' }}>
					<i
						className="pi pi-check"
						style={{ color: 'green', fontSize: '2em' }}
					></i>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
	render() {
		// console.log('PROGRESS');
		// console.log(this.props.progress);
		return (
			<div className="chart-container">
				{/* <h2>Progress</h2> */}
				<DataTable value={bugs}>
					<Column
						sortable={true}
						field="name"
						header="Name"
						className="name-column"
					/>
					<Column
						sortable={true}
						body={this.checkBoxTemplate}
						header="Caught"
						style={{ textAlign: 'center' }}
					/>
					<Column sortable={true} field="rarity" header="Rarity" />
					<Column sortable={true} field="price" header="Price" />
					<Column sortable={true} field="location" header="Location" />
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="january"
						header="Jan"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="february"
						header="Feb"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="march"
						header="Mar"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="april"
						header="Apr"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="may"
						header="May"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="june"
						header="June"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="july"
						header="July"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="august"
						header="Aug"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="september"
						header="Sept"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="october"
						header="Oct"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="november"
						header="Nov"
					/>
					<Column
						sortable={true}
						body={this.monthTemplate}
						field="december"
						header="Dec"
					/>
					<Column sortable={true} field="time" header="Time" />
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
