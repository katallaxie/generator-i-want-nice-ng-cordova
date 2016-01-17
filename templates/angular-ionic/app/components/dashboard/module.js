// imports
import { DashboardRoute } from './route';

// consts
const name = 'dashboard';

// module
let Dashboard = angular
  .module( name, [] )
  .run( DashboardRoute );

// exports
export default Dashboard;
export { Dashboard };
