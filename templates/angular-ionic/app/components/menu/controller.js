import { Controller } from '../../es6/controller';

class MenuController extends Controller {

	// injectables
	static $inject = [
		'$log'
	];

	constructor ( ...args ) {
		super( ...args );
		this.title = `${this.constructor.name}`;
	}
}

export default MenuController;
export { MenuController };
