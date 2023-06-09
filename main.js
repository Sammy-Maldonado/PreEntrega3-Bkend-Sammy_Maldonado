import ProductManager from "./managers/ProductManagers.js";

const productManager = new ProductManager();

const context = async () => {
  const test = await productManager.getProducts();
  let testProduct = {
    title: 'producto de prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
  }
  let tasaDeGato = {
    title: 'Taza de gato',
    description: 'Una tasa de gato linda',
    price: 500,
    thumbnail: 'Sin imagen',
    code: 'abc2',
    stock: 15
  }
  let televisor = {
    title: 'Televisor Led 32"',
    description: 'Television grande',
    price: 1000,
    thumbnail: 'Sin imagen',
    code: 'abc3',
    stock: 5
  }
  let tablet = {
    title: 'Tablet Samsung',
    description: '8.7", 32gb, WIFI',
    price: 1500,
    thumbnail: 'Sin imagen',
    code: 'abc4',
    stock: 8
  }
  let consola = {
    title: 'Nintendo 64',
    description: 'consola',
    price: 800,
    thumbnail: 'Sin imagen',
    code: 'abc5',
    stock: 7
  }
  let aspiradora = {
    title: 'Aspiradora LG',
    description: 'Aspiradora grande',
    price: 2000,
    thumbnail: 'Sin imagen',
    code: 'abc6',
    stock: 9
  }
  let computador = {
    title: 'Computador Lenovo',
    description: 'Formato escritorio',
    price: 5000,
    thumbnail: 'Sin imagen',
    code: 'abc7',
    stock: 25
  }
  let kindle = {
    title: 'Kindle fire',
    description: 'Lectura',
    price: 6000,
    thumbnail: 'Sin imagen',
    code: 'abc8',
    stock: 8
  }
  let celular = {
    title: 'Celular Xiaomi',
    description: 'Poco M5',
    price: 5000,
    thumbnail: 'Sin imagen',
    code: 'abc9',
    stock: 6
  }
  let mouse = {
    title: 'Razer Viper',
    description: '8khz Negro',
    price: 4000,
    thumbnail: 'Sin imagen',
    code: 'abc10',
    stock: 4
  }


  /* Comentar/descomentar para testear */

  //1) Para agregar nuevos productos, escriba la variable del producto a agregar en el parametro de addProduct.
  //await productManager.addProduct(testProduct);

  //2) Mostrando los productos agregados actualmente:
  /* console.log(await productManager.getProducts()); */

  //3) Para encontrar un producto especifico:
  /* console.log(await productManager.getProductById(2)); */
  
  //4) Para actualizar un producto. No se puede actualizar si se trata de actualizar a una id o un code existente.
  /* const updatedProduct = await productManager.updateProduct(2, {
    id: 2,
    title: 'TAZA GATO',
    description: 'Bella',
    code: "abc1234"
  });
  console.log(updatedProduct); */


//5) Para eliminar un producto. Para que se elimine, ambas id´s deben ser las mismas.
  /* try {
    const deleteProduct = await productManager.getProductById(3);
    await productManager.deleteProduct(3);
    console.log(`Producto: "${deleteProduct.title}" se ha eliminado exitosamente`);
  } catch (error) {
    console.error(error.message);
  } */
}

context();