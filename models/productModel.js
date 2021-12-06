const products = require("../data/products");
const {v4:uuidv4} = require('uuid')

const {writeDataToFile} =  require('../utils')


function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id){
  return new Promise((resolve,reject)=>{
    const product = products.find((p) => p.id === id)
    resolve(product)
  })
}

function create(product){
  return new Promise((resolve,reject)=>{
    const newProduct = {id:uuidv4(),...product}
    product.push(newProduct)

    if(process.env.NODE_ENV!== 'test'){
      writeDataToFile('./data/products.json')
    }

    resolve(newProduct)
  })
}

function update(id,product){
  return new Promise((resolve,reject)=>{ 
    const index = products.findIndex((p) => p.id === id)
    products [index] = {id,...product}

    if(process.env.NODE_ENV !== 'test'){
      writeDataToFile('./data/products.json')
    }

    resolve(products[index])
  })
}

function remove(id){
  return new Promise((resolve,reject)=>{
    products = products.filter((p)>p.id == 'id')

    if(process.env.NODE_ENV!== 'test'){
      writeDataToFile('./data/products.json')
    }

    resolve()
  })
}



module.exports = {
  findAll,findById,create,update,remove
};
