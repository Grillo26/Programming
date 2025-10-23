//WearSet

const weakset = new WeakSet(); //Solo puedes agregar objectos

const cliente = {
       nombre: 'Carlos',
       saldo: 100
}


weakset.add(cliente);
// console.log(weakset.has('nombre'))
weakset.delete(cliente);

//no existe size en un weakset, no son iterables