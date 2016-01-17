import { Controller } from '../../es6/controller';

class AppController extends Controller {

	// injectables
	static $inject = [
		'$scope',
		'$timeout',
		'$log'
	];

	constructor ( ...args ) {
		super( ...args );
	}
}

export default AppController;
export { AppController };
