const http = require("http");
const { getProducts ,getProduct,createProduct,updateProduct,deleteProduct } = require("./controllers/productController");

const server = http.createServer((req, res) => {
  // console.log(123)
  // res.statusCode = 200
  // res.setHeader('Content-Type','text/html')
  // res.write('<h1>Hello Jerry</h1>')
  // res.end()

  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } 

  else if(req.url.match(/\api\/products\/([0-9]+)/) && req.method === 'GET'){
      const id = req.url.split('/')[3] 
       getProducts(req,res,id)
  }

  else if(req.url === '/api/products' && req.method === 'POST'){
    createProduct(req,res)
  }

  else if(req.url.match(/\api\/products\/w+/) && req.method === 'GET'){
    const id = req.url.split('/')[3] 
     updateProduct(req,res,id)
}
  else if(req.url.match(/\api\/products\/w+/) && req.method === 'GET'){
    const id = req.url.split('/')[3] 
     deleteProduct(req,res,id)
}
  
  
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const port = process.env.port || 8000;
server.listen(port, () => {
  console.log(`Server running at http:localhost:${port} succesfully`);
});
