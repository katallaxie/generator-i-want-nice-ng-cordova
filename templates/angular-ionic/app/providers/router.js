import { Inject } from '../es6/inject';

class RouterProvider extends Inject {

  static $inject = [
    '$stateProvider'
  ];

  constructor ( ...args ) {
    super( ...args );
  }

  $get ( { $stateProvider } = this.$inject ) {
    return {
      route: function ( states = [] ) {
        states.forEach( state => {
          $stateProvider.state( state.name, state.config );
        } );
      }
    };
  }

}

class Route extends Inject {

  constructor ( ...args ) {
    super( ...args );
  }

}

export default RouterProvider;
export { RouterProvider, Route };
