import fs from 'fs';

class ProductManager {
  constructor() {
    this.path = './files/Products.json';
  }

  async getProducts() {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, 'utf-8');
      const products = JSON.parse(data);
      return products;
    } else {
      return [];
    }
  }

  async addProduct({ title, description, price, thumbnail, code, stock }) {

    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Datos incompletos");
      return null;
    }

    const products = await this.getProducts();

    // Verificar que el código no esté en uso
    const productWithCode = products.find(product => product.code === code);
    if (productWithCode) {
      throw new Error("El código del producto ya está en uso. Revisa que no hayan productos con el mismo código e intenta nuevamente.");
    }

    if (products.length > 0) {
      product.id = products[products.length - 1].id + 1;
    } else {
      product.id = 1;
    }

    products.push(product);
    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    return product;
  }

  async getProductById(productId) {
    const products = await this.getProducts();
    const product = products.find(product => product.id === productId);
    if (!product) {
      throw new Error("Producto no encontrado. Por favor, ingrese una id válida.");
    }
    console.log(`El producto ${product.id} - "${product.title}" fue encontrado con éxito.`);
    return product;
  }

  async updateProduct(productId, updates) {
    const products = await this.getProducts();
    const index = products.findIndex(product => product.id === productId);

    if (index === -1) {
      throw new Error("Producto no encontrado. Por favor, ingrese una id válida.");
    }

    // Comprobación de que la nueva id no existe en otro producto
    if (updates.id && updates.id !== productId && products.some((p) => p.id === updates.id)) {
      throw new Error("Ya existe un producto con el mismo ID. Por favor, actualice con una ID diferente.");
    }

    // Comprobación de que el nuevo código no existe en otro producto
    const duplicateCode = products.some(product => product.code === updates.code && product.id !== productId)
    if (duplicateCode) {
      throw new Error("Ya existe un producto con el mismo código. Por favor, ingrese otro código.");
    }

    const product = { ...products[index], ...updates };
    products[index] = product;

    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    console.log(`El producto ${product.id} - "${product.title}" fue actualizado con éxito.`);
    return product;
  }

  async deleteProduct(productId) {
    const products = await this.getProducts();
    const index = products.findIndex(product => product.id === productId);

    if (index === -1) {
      throw new Error("Producto no encontrado. Por favor, ingrese una id válida.");
    }

    const product = products[index];
    products.splice(index, 1);

    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
  }
}

export default ProductManager