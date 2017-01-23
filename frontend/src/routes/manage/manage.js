import React from 'react';
import Input from './components/input.js';
import Output from './components/output.js';

export default class Manage extends React.Component {
	render() {
		return (
			<div className="Manage">
				<div className="row">
					<div className="col-xs-4">
						<Input></Input>
					</div>
					<div className="col-xs-8">
						<Output></Output>
					</div>
				</div>				
			</div>
		);
	}
}
