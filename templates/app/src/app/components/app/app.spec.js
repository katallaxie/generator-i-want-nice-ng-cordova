// component to test
import {HelloWorldComponent} from 'app/components/app/app';

// description of the test
describe('Hello World:', function() {
  // variable attach the cll
  var helloWorld;
  // init class
  beforeEach(function() {
    todo = new HelloWorldComponent();
  });

  it('expect Hello World to be present', function() {
    expect(todo).not.toBe(null);
  });

});
