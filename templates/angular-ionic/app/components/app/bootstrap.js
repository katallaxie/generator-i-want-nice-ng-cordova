// bootstrap
function bootstrap ( app, strict = true ) {
  angular.element(document).ready(() => {
    angular.bootstrap(document, [app], {
      // should be passed; you, know, minification
      strictDi: strict
    });
  });
}

// defered
function resume ( app, deps = [] ) {
  angular.element(document).ready( () => {
    // some debug info
    console.log( `Boostrapped ${app} (Ionic: ${ionic.version}, Angular: ${angular.version.full})` );
    // continue bootstrap
    angular.resumeBootstrap([].concat(app, deps));
  } );
}

// module export
export default bootstrap;
export { bootstrap, bootstrap as Bootstrap, resume, resume as BootstrapResume };
