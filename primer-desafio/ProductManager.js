class ProductManager{
    
    constructor(){
        this.products=[];
    }

    // metodo para traer los productos
    getProducts(){
        return this.products;
    }

    //metodo para añadir productos
    addproduct( title, description, price, thumbnail, code, stock){

        let id = 1;

        const codeExists = this.products.some((product) => product.code === code);
  
        if (codeExists) {
            console.log(`Error: El código ${code} ya existe en otro producto.`);
            return;
        }
        
        //crea el objeto.
         const product={
            id : id,
            title : title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
         };

            //inserta el objeto.
            this.products.push(product);
         
        //recorre el array he incrementa el id
         this.products.forEach((pr)=>{
           
            product.id = id++;
            return pr;
         });

    }

    getProductById(id) {

        //uso la funcion find para buscar el producto, esto lo encontre averiguando en internet.
        const product = this.products.find((product) => product.id === id);
    
        if (product) {
          return product;
        } else {
          console.log('Error: Producto no encontrado.');
          return null;
        }
      }
    
}

//creo instancia de clase
const pm1= new ProductManager();

//trae el array vacio
let emptyProduct = pm1.getProducts();
console.log('array vacio');
console.log(emptyProduct);

//creo productos
pm1.addproduct('fideo', 'fideos largos', 200, 'sin imagen', '001', 45);
pm1.addproduct('arroz', 'arroz parba', 150, 'sin imagen', '002', 50);

//inserto este producto con el mismo codigo para que large el error, solo imprime los otros dos
pm1.addproduct('arverja', 'arverjas en lata', 300, 'sin imagen', '002', 20);

let arrayProduct= pm1.getProducts();
console.log('array de productos')
console.log(arrayProduct);

//traigo un producto por id.
let productbyId= pm1.getProductById(2);
console.log('producto por id');
console.log(productbyId);
