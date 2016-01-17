// imports
import { MainRoute } from './route';

// consts
const name = 'main';

// module
let Main = angular
  .module( name, [] )
  .run( MainRoute );

// exports
export default Main;
export { Main as Main };
