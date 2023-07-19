const express = require('express');
const ProductManager = require('./ProductManager');
const app = express();

const PORT = 8080;
const path= "./files/product.json";
const products=[];

async function generator(){
  
  const productManager = new ProductManager(path);

  const gn = await productManager.getProducts();
  products.push(...gn);
}

generator();


app.use(express.urlencoded({extended:true}));

app.get('/products', (req, res) => {

  let limit= req.query.limit;

  if(!limit){return res.send(products);}

  let productsWhitLimit = products.slice(0, parseInt(limit));
  res.send({products:productsWhitLimit});

});

app.get('/products/:idProduct', (req, res) => {
  let idProduct = parseInt(req.params.idProduct);
  let prod= products.find(p=>p.id===idProduct);

  if(!prod){return res.send({error:"no se pudo encontrar el producto"})};
  res.send(prod);
});


/*app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});*/
