function config ($stateProvider, $urlRouterProvider) {
  // default route
  $urlRouterProvider.otherwise('/splash');
}

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

export default config;
export { config as Config };
