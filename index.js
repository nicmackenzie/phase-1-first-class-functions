function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function test() {
    console.log("Hey There");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Hey There");
  };
}
