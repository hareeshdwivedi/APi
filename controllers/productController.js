const Product = require("../models/productModel");

//  Get All Product

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//  Get Single Product

async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

//  Create a Product

async function createProduct(req, res) {
  try {
    const body = await getPOstData(req);

    const { name, description, price } = JSON.parse(body);

    const product = {
      name,
      description,
      price,
    };

    const newProduct = await Product.create(product);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

//  Update Product

async function updateProduct(req, res, id) {
  try {
    const Product = await Product.findById(id);

    if (!product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      const body = await getPostData(req);
      const { name, description, price } = JSON.parse(body);

      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updateProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

//  Delete Product

async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
