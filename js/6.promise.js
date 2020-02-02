// ===== Callback =====
// function getCityByDistrict (district, callback) {
//   setTimeout(() => {
//     callback('London')
//   }, 500);
// }

// function getCountryByCity(city, callback) {
//   setTimeout(() => {
//     callback('England')
//   }, 500);
// }

// function getContinentByCountry(country, callback) {
//   setTimeout(() => {
//     callback('Europe')
//   }, 500);
// }

const district = 'Westminster';
// getCityByDistrict(district, (city) => {
//   getCountryByCity(city, (country) => {
//     getContinentByCountry(country, (continent) => {
//       console.log(district + ' is in ' + continent);
//     });
//   });
// });

// ===== Promises =====
function getCityByDistrict(district) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('London');
    }, 500);
  });
}

function getCountryByCity(district) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('England');
    }, 500);
  });
}

function getContinentByCountry(district) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Europe');
    }, 500);
  });
}

getCityByDistrict(district)
  .then((city) => {
    return getCountryByCity(city);
  })
  .then((country) => {
    return getContinentByCountry(country);
  })
  .then((continent) => {
    console.log(district + ' is in ' + continent);
  });

// ===== Async/Await =====

async function getAll() {
  const city = await getCityByDistrict(district);
  const country = await getCountryByCity(city);
  const continent = await getContinentByCountry(country);

  console.log(district + ' is in ' + continent);
}

getAll();