function Ford() {
  return { doSomething: doSomething, type: 'SomeCar' };

  function doSomething() {
    gs.debug('I am a Ford');
  }
}

function Chevrolet() {
  return { doSomething: doSomething, type: 'SomeCar' };

  function doSomething() {
    gs.debug('I am a Chevy');
  }
}

function GMC() {
  return { doSomething: doSomething, type: 'SomeCar' };

  function doSomething() {
    gs.debug('I am a GMC');
  }
}
