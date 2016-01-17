class Inject {
  static $inject = [];

  constructor(...args) {
    this.inject( this.constructor.$inject, this, args);
  }

  inject ( $inject = [], instance, args, name = '$inject' ) {
    const inject = instance[name] = instance[name] || {};

    $inject.forEach( ( obj, index) => {
      inject[obj] = args[index];
    } );

  }
}

export default Inject;
export { Inject };
