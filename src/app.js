import express from 'express';
import ProductManager from '../managers/ProductManagers.js';

const app = express();
const productManager = new ProductManager();

app.get('/products', async (req, res) => {
  try {
    let products;
    if (req.query.limit) {
      const limit = parseInt(req.query.limit);
      products = await productManager.getProducts(limit);
    } else {
      products = await productManager.getProducts();
    }
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/products/:pId', async (req, res) =>{
  try {
    const productId = parseInt(req.params.pId);
    const product = await productManager.getProductById(productId)
    if(product) {
      res.send(product);
    } else {
      res.status(400).send('Producto no encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Producto no encontrado, por favor, ingrese una ID válida.')
  }
});

app.listen(8080, () => console.log('Listening on PORT 8080'))