const getMovie = function (name, start) {
  return `${name} ${start}`;
}

const getMovie2 = (name, start) => {
  return `${name} ${start}`;
}

const getMovie3 = (name, start) => `${name} ${start}`;
const getMovie4 = name => name;
const getMovie5 = () => 'Averages5';


console.log(getMovie('Averages', '2018'));
console.log(getMovie2('Averages2', '2019'));
console.log(getMovie3('Averages3', '2017'));
console.log(getMovie4('Averages4'));
console.log(getMovie5());