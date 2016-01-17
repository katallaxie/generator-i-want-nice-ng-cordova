// imports
import { Route } from './route';

// consts
const name = 'splash';

// module
let Splash = angular
  .module( name, [] )
  .run( Route );

// exports
export default Splash;
export { Splash };
