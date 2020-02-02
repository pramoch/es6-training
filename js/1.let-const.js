// ===== var =====
function testVar () {
  for (var i = 0; i < 2; i++) {
    console.log('i (inside for) = ' + i);
  }
  // for (var i = 0; i++; i < 2) {

  // }

  console.log('i (outside for)= ' + i);
};
// testVar();

// ===== let =====

function testLet() {
  for (let i = 0; i < 2; i++) {
    console.log('i (inside for) = ' + i);
  }

  console.log('i (outside for)= ' + i);
}
// testLet();

// ===== const =====
function testConst() {
  let color = 'red';
  color = 'blue';

  const name = 'David';
  name = 'robert';
}
testConst();