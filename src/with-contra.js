function f(foo, values) {
    with (foo) {
      console.log(values);
      console.log(foo.values);
    }
  }


f([1, 2, 3, 4], {});