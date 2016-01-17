import View from './view.html!text';
import { DashboardController } from './controller';

function DashboardRoute (Router) {
  let state = [
    {
      name: 'main.dashboard',
      config: {
        url: '/',
        views: {
          'view': {
            template: View,
            controller: DashboardController,
            controllerAs: '$ctrl'
          }
        }
      }
    }
  ];
  Router.route(state);
}

DashboardRoute.$inject = ['Router'];

export default DashboardRoute;
export { DashboardRoute };
