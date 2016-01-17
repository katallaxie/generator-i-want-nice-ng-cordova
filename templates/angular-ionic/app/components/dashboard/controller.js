import { Controller } from '../../es6/controller';

class DashboardController extends Controller {
	static $inject = [
		'$log'
	];
	constructor ( ...args ) {
		super( ...args );
		this.title = `${this.constructor.name}`;
	}
}

export default DashboardController;
export { DashboardController };
