import { Controller } from '../../es6/controller';

class SplashController extends Controller {

	// injectables
	static $inject = [
		'$scope',
		'$timeout',
		'$log',
		'$state',
		'$ionicLoading'
	];

	constructor ( ...args ) {
		super( ...args );

		const { $timeout, $state, $ionicLoading } = this.$inject;

		$ionicLoading.show({
			template: 'Splash! Get ready.'
		});

		$timeout( () => {
			$ionicLoading.hide();
			$state.go( 'main.dashboard' );
		}, 2000 );

	}

}

export default SplashController;
export { SplashController };
