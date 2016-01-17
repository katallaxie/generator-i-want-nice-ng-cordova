import { Controller } from '../../es6/controller';

class MainController extends Controller {

	static $inject = [
		'$log'
	];

	constructor ( ...args ) {
		super( ...args );
	}

}

export default MainController;
export { MainController };
