import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgress } from '../../actions/progress';
import { DataTable, Column } from 'primereact/datatable';
import { bugs } from './bugs.json';
import { Checkbox } from 'primereact/checkbox';
import './Progress.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';

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

	check_func = (checked, id) => {
		// console.log(checked);
		// console.log(window.localStorage.getItem('bugs')[this.props.row_id]);
		let local_string = window.localStorage.getItem('bugs');
		if (checked) {
			console.log(local_string);
			local_string = this.replaceChar(local_string, '1', id);
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: true,
			});
		} else {
			console.log(local_string);
			local_string = this.replaceChar(local_string, '0', id);
			console.log(local_string);
			window.localStorage.setItem('bugs', local_string);
			this.setState({
				checked: false,
			});
		}
	};

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
		const checkBoxTemplate = (rowData) => {
			// console.log(rowData.id);
			return (
				<div>hey</div>
				// <div>
				// 	<Checkbox
				// 		onChange={(e) => this.check_func(e.checked, rowData.id)}
				// 		checked={window.localStorage.getItem('bugs')[rowData.id] == '1'}
				// 	></Checkbox>
				// </div>
			);
		};
		return (
			<div className="chart-container">
				<MaterialTable
					title="Wildlife"
					options={{
						search: false,
						exportButton: false,
						filtering: false,
						grouping: false,
						selection: false,
						sorting: false,
						paging: false,
					}}
					columns={[
						{
							field: 'caught',
							title: 'Caught',
							render: (rowData) => (
								<Checkbox
									onChange={(e) => this.check_func(e.checked, rowData.id)}
									checked={
										window.localStorage.getItem('bugs')[rowData.id] == '1'
									}
								></Checkbox>
							),
						},
						{ field: 'name', title: 'Name' },
						{ field: 'rarity', title: 'Rarity' },
						{ field: 'price', title: 'Price' },
						{ field: 'location', title: 'Location' },
					]}
					data={bugs}
				/>
				{/* <TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell align="right">Rarity</TableCell>
								<TableCell align="right">Price</TableCell>
								<TableCell align="right">Location</TableCell>
								<TableCell align="right">Caught</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{bugs.map((bug) => (
								<TableRow key={bug.id}>
									<TableCell component="th" scope="row">
										{bug.name}
									</TableCell>
									<TableCell align="right">{bug.rarity}</TableCell>
									<TableCell align="right">{bug.price}</TableCell>
									<TableCell align="right">{bug.location}</TableCell>
									<TableCell align="right">{checkBoxTemplate}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer> */}

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
