const Contenedor = require('./Contenedor');
 

async function main(){
    const product = new Contenedor('./productos.txt');
    
    await product.deleteAll();

   
}   

main();