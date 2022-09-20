// https://www.omnicalculator.com/health/pearl-index

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pearlindexRadio = document.getElementById('pearlindexRadio');
const noofwomeninthestudyRadio = document.getElementById('noofwomeninthestudyRadio');
const studydurationRadio = document.getElementById('studydurationRadio');
const noofpregnanciesRadio = document.getElementById('noofpregnanciesRadio');

let pearlindex;
let noofwomeninthestudy = v1;
let studyduration = v2;
let noofpregnancies = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

pearlindexRadio.addEventListener('click', function() {
  variable1.textContent = 'No. of women in the study';
  variable2.textContent = 'Study duration';
  variable3.textContent = 'No. of pregnancies';
  noofwomeninthestudy = v1;
  studyduration = v2;
  noofpregnancies = v3;
  result.textContent = '';
});

noofwomeninthestudyRadio.addEventListener('click', function() {
  variable1.textContent = 'Pearl index';
  variable2.textContent = 'Study duration';
  variable3.textContent = 'No. of pregnancies';
  pearlindex = v1;
  studyduration = v2;
  noofpregnancies = v3;
  result.textContent = '';
});

studydurationRadio.addEventListener('click', function() {
  variable1.textContent = 'Pearl index';
  variable2.textContent = 'No. of women in the study';
  variable3.textContent = 'No. of pregnancies';
  pearlindex = v1;
  noofwomeninthestudy = v2;
  noofpregnancies = v3;
  result.textContent = '';
});

noofpregnanciesRadio.addEventListener('click', function() {
  variable1.textContent = 'Pearl index';
  variable2.textContent = 'No. of women in the study';
  variable3.textContent = 'Study duration';
  pearlindex = v1;
  noofwomeninthestudy = v2;
  studyduration = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pearlindexRadio.checked)
    result.textContent = `Pearl index = ${computepearlindex().toFixed(2)}`;

  else if(noofwomeninthestudyRadio.checked)
    result.textContent = `No. of women in the study = ${computenoofwomeninthestudy().toFixed(2)}`;

  else if(studydurationRadio.checked)
    result.textContent = `Study duration = ${computestudyduration().toFixed(2)}`;

  else if(noofpregnanciesRadio.checked)
    result.textContent = `No. of pregnancies = ${computenoofpregnancies().toFixed(2)}`;
})

// calculation

// pearlindex = (noofpregnancies * 12) * 100 / (noofwomeninthestudy * studyduration)

function computepearlindex() {
  return (Number(noofpregnancies.value) * 12) * 100 / (Number(noofwomeninthestudy.value) * Number(studyduration.value));
}

function computenoofwomeninthestudy() {
  return (Number(noofpregnancies.value) * 12) * 100 / (Number(pearlindex.value) * Number(studyduration.value));
}

function computestudyduration() {
  return (Number(noofpregnancies.value) * 12) * 100 / (Number(noofwomeninthestudy.value) * Number(pearlindex.value));
}

function computenoofpregnancies() {
  return (Number(pearlindex.value) * (Number(noofwomeninthestudy.value) * Number(studyduration.value))) / (100 * 12);
}