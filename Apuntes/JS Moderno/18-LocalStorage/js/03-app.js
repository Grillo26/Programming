const mesesArray = JSON.parse( localStorage.getItem('Meses'));
console.log(mesesArray);

mesesArray.push('NUevo mes');
console.log(mesesArray);

localStorage.setItem('Meses',JSON.stringify(mesesArray));