import View from './view.html!text';
import { SplashController } from './controller';

function SplashRoute (Router) {
  Router.route( [
    {
      name: 'splash',
      config: {
        url: '/splash',
        views: {
          'details': {
            template: View,
            controller: SplashController,
            controllerAs: '$ctrl'
          }
        }
      }
    }
  ] );
}

SplashRoute.$inject = ['Router'];

export default SplashRoute;
export { SplashRoute, SplashRoute as Route };
