function Person () {
  this.age = 20;
  this.button = document.querySelector('#myButton');

  // ===== ES5 =====

  // ES5 #1
  this.button.addEventListener('click', function(e) {
    const age = this.age;
  });

  // ES5 #2
  const that = this;
  this.button.addEventListener('click', function (e) {
    const age = that.age;
  });

  // ES5 #3
  this.onButtonClick = function () {
    const age = this.age;
  };
  this.onButtonClick = this.onButtonClick.bind(this);
  this.button.addEventListener('click', this.onButtonClick);

  // ===== ES6 =====
  this.button.addEventListener('click', (e) => {
    const age = this.age;
  });
}

const p = new Person();