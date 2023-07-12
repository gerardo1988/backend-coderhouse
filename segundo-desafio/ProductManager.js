const fs= require("fs")

class ProductManager{

    constructor(path){
        this.path= path,
        this.products=[];

    }

    //generador de id
    generateId= async()=>{
        const counter = this.products.length;
        if(counter==0){
            return 1
        }else{
            return (this.products[counter-1].id)+1
        }
    }

    getProducts=async()=>{

        const listProduct = await fs.promises.readFile(this.path,"utf-8");
        const listProductParse= JSON.parse(listProduct);
        return listProductParse;

    }

    addProduct= async(title, description, price, thumbnail, code, stock)=>{
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("no ha ingresado todos los datos del producto, reintente");
            return
        }else{
            const codeFilter = this.products.find(element=>element.code===code);
            if(codeFilter){
                console.error("el codigo del producto esta repetido");
                return
            }else{
                const id= await this.generateId();
                const newProduct={
                    id,title, description, price, thumbnail, code, stock
                }
                this.products.push(newProduct);
                await fs.promises.writeFile(this.path, JSON.stringify(this.products,null,2));
            }
        }
    }

    updateProduct= async(id,title, description, price, thumbnail, code, stock)=>{
        if( !id, !title || !description || !price || !thumbnail || !code || !stock){
            console.error("ingrese todos los datos para actualizar el producto");
            return
        }else{
           
            const currentProducList = await this.getProducts();
            const newProductlist= currentProducList.map(element=>{
            if(element.id===id){
                const updateProduct={
                    ...element,
                    title, description, price, thumbnail, code, stock
                }
                console.log("el producto a sido actualizado.");
                return updateProduct
            }else{
                console.log("error al actualizar el producto.");
                return element
            }
        })
        await fs.promises.writeFile(this.path, JSON.stringify(newProductlist,null,2)); 
            
        }
    }

    deleteProduct= async(id)=>{
        const allproducts= await this.getProducts()
        const productswithoutfound= allproducts.filter(element=>element.id!==id);
        await fs.promises.writeFile(this.path,JSON.stringify(productswithoutfound,null,2));
        

    }


    getProductbyId=async(id)=>{
        const allproducts= await this.getProducts();
        const found= allproducts.find(element=>element.id===id);
        await fs.promises.readFile(this.path,"utf-8");
        return found;
    }
}

async function generator(){
    
    const pm = new ProductManager("./files/product.json");
    
    //await pm.addProduct("silla", "silla de madera", 5000, "imagen", "a001", 150);
    //await pm.addProduct("mesa", "mesa redonda", 15000, "imagen", "a002", 100);
    //await pm.addProduct("estanteria", "estanteria aliminio", 25000, "imagen", "a003", 300);

    //await pm.updateProduct(3, "estanteria", "estanteria aliminio", 45000, "imagen", "a003", 300);

    //await pm.deleteProduct(3);

    const pbyId= await pm.getProductbyId(1);

    //const listp = await pm.getProducts();
    console.log(pbyId);
    
}

generator();
