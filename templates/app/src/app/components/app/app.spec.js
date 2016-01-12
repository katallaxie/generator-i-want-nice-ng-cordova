// component to test
import {HelloWorldComponent} from 'src/app/components/app/app';

// description of the test
describe('Hello World:', function() {
  // variable attach the cll
  var helloWorld;
  // init class
  beforeEach(function() {
    helloWorld = new HelloWorldComponent();
  });

  it('expect Hello World to be present', function() {
    helloWorld.should.exist;
  });

});
