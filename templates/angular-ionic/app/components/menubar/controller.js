import { Controller } from '../../es6/controller';

class MenuBarController extends Controller {

	// injectables
	static $inject = [
		'$scope',
		'$log'
	];

	constructor ( ...args ) {
		super( ...args );
	}
}

export default MenuBarController;
export { MenuBarController };
