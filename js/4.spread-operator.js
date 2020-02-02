function testSpread () {
  // ===== Object =====
  const obj1 = {
    color: 'red',
    price: 100
  };

  // Clone object
  const clonedObj = { weight: 50, ...obj1 };
  clonedObj.color = 'blue';

  console.log('clonedObj = ');
  console.log(clonedObj);

  console.log('obj1 = ');
  console.log(obj1);

  // Merge object
  const obj2 = {
    width: 20,
    height: 30
  };
  const mergedObj = { ...obj1, ...obj2 }

  console.log('mergedObj = ');
  console.log(mergedObj);

  // ===== Array =====
  const arr1 = [ 10, 20, 30];
  const arr2 = [ 40, 50, 60];
  const mergedArr = [...arr1, ...arr2];

  console.log('mergedArr = ');
  console.log(mergedArr);
}

testSpread();