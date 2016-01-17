import {Component, View} from 'angular2/core';

@Component({
  selector: 'hello-world',
})

@View({
  template: '<h4>Hello World. I am ... {{name}}</h4>'
})

class HelloWorldComponent {
  constructor() {
    this.name = '';
    setTimeout(() => {
      this.name = 'Angular 2.0';
    }, 1500);
  }
}

export default HelloWorldComponent;
export {HelloWorldComponent};
