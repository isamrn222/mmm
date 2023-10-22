/* use('TiendasD1')



aqui se hace el insertar de provedores 
db.Proveedores.insertMany([
    {
        country: 'colombia',
        city: 'medellin',
        proveedor: {
            name: 'tomas marin'
        }, 
        products: [
            {tipo:'carne'},
            {tipo:'lacteos'},
        ]
    }
]);

aqui se inserta en productos;
db.Productos.insertMany([
    {
       country: 'colombia',
        city: 'medellin',
    
        location: {
                name:'D1 Santo Domingo'
        },
        products: [
            {Pnombre:'"chocolates de almendra',precio:2500},
            {Pnombre:'chocolates de cereza', precio:2500}
        ]
    }

]);
aqui se inserta en coleccion clientes
db.Clientes.insertMany([
    {
       country: 'colombia',
        city: 'medellin',
    
        cliente: {
                name:'juan',
                apellido:'ramirez'
        },
        products: [
            {Tipocompra:'Hogar'},
            {Tipocompra:'libros'}
        ]
    }

]);


crud actualizar productos, proveedores y clientes:

db.Productos.updateOne({country:'medellin'},{$set:{'location.name':'daniela velez'}});
db.Proveedores.updateOne({country:'colombia'},{$set:{'location.name':'D1 san pablo'}})
db.Clientes.updateOne({country:'colombia'},{$set:{'Cliente.name':'santiago'}})

*/

/*
crud delete  productos, proveedores y clientes:

db.Clientes.deleteOne({'Cliente.name':'santiago'})
db.Productos.deleteOne({'location.name':'daniela velez'})
db.Proveedores.deleteOne({'location.name':'D1 san pablo'})*/




