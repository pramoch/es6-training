function testDestructuring (staff) {
  // ES5
  const name = staff.name;
  const age = staff.age;
  const company = staff.company || 'SCB';

  console.log('==================');
  console.log('name = ' + name);
  console.log('age = ' + age);
  console.log('company = ' + company);
};

function testDestructuringES6 (staff) {
  // ES6
  const { name, age, company = 'SCB' } = staff;

  console.log('==================');
  console.log('name = ' + name);
  console.log('age = ' + age);
  console.log('company = ' + company);
}

// ==============================

const john = {
  name: 'John Noah',
  age: 25,
  company: 'Apple'
};
testDestructuring(john);
testDestructuringES6(john);

const lily = {
  name: 'Lily Lovel',
  age: 20
};
testDestructuring(lily);
testDestructuringES6(lily);