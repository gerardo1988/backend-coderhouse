export const getproductsErroInfo= (product)=>{
    return `no se pudo traer la informacion requerida:
              .informacion requeria: ${product}  ` 
}

export const createproductsErroInfo= (product)=>{
    return `no se pudo traer la informacion requerida:
              .informacion requeria: ${product.tilte}, ${product.description}, 
                                        ${product.price}, ${product.code}, ${product.stock}  ` 
}