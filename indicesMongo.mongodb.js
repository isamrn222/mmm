/*use('TiendasD1')





indices compuestos:
   
db.Proveedores.createIndex({ Nombre: 1, Telefono: 1 })

db.Proveedores.find({ Nombre:"María González", Telefono:"3017775678" }).pretty()



db.Clientes.createIndex({ Nombre: 1, Apellido: 1 })

db.Clientes.find({ Nombre:"Leonardo", Apellido:"Herrera" }).pretty()

 

db.Productos.createIndex({ "categoria": 1, "productos.Pnombre": 1 })

db.Productos.find({ "categoria": "maquillaje", "productos.Pnombre": "iluminador facial" }).pretty()




indices simples:

db.Clientes.createIndex( {cliente: 1} )

db.Clientes.find({},{ cliente:1 }).sort({ cliente:1 }).pretty()



db.Proveedores.createIndex( {proveedor: 1} )

db.Proveedores.find({},{ proveedor:1 }).sort({proveedor:1 }).pretty()



db.Productos.createIndex( {city : 1} )

db.Productos.find({},{ city:1 }).sort({ city:1 }).pretty()
*/
































/*
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
*/
