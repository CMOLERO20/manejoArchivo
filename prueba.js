const Contenedor = require('./Contenedor');
 

async function main(){
    const product = new Contenedor('./productos.txt');

    console.log('Muestro todos los productos');
    let allProducts = await product.getAll();
    console.log(allProducts);

    const idToSearch = 6 ;
    console.log(`Muestro productos id ${idToSearch}`);
    let productById = await product.getById(idToSearch);
    console.log(productById);

   const obj = {
   title: 'Calculadora',
       price: 234.56,
     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
       };
    let newIdSave =  await product.save(obj);
   console.log(`Nuevo producto id ${newIdSave}`);

   const idToDel = 7;
   await product.deleteById(idToDel);
}   

main();
