/*use('TiendasD1')*/




  

/*db.Proveedores.find()db.Clientes.find()db.Proveedores.find() 

db.Clientes.aggregate([
    { $sortByCount : '$Edad' }
  ]).pretty()
  
db.Proveedores.aggregate([
    { $sortByCount : '$Nombre' }
  ]).pretty()
  

db.Productos.aggregate([
    { $sortByCount : '$categoria' }
  ]).pretty()



  $lookup
db.Productos.aggregate([
    { $match : { "categoria": "bebes" } },
    { $unwind : '$productos' },
    { $lookup : {
    from : 'Clientes',
    localField : 'Nombre',
    foreignField :' Tipo De Compras',
    as : 'cliente'
} }
]).pretty()

db.Productos.aggregate([
    { $match : { "categoria": "bebes" } },
    { $unwind : '$productos' },
    { $lookup : {
    from : 'Proveedores',
    localField : 'Nombre',
    foreignField : 'Nombre empresa',
    as : 'provedor'
} }
]).pretty()
db.Proveedores.aggregate([
    { $match : { country: 'colombia' } },
    { $unwind : '$products' },
    { $lookup : {
    from : 'Clientes',
    localField : 'Nombre',
    foreignField : 'Edad',
    as : 'clientes'
} }


$count
db.Clientes.aggregate([
        { $unwind : '$Correo' },
        { $count : 'total' }
      ]).pretty()


db.Proveedores.aggregate([
        { $unwind : '$Nombre' },
        { $count : 'total' }
      ]).pretty()


db.Productos.aggregate([
        { $unwind : '$productos' },
        { $count : 'total_documents' }
      ]).pretty()
    


$addFields
db.Clientes.aggregate([
    { $match : {Correo: "Herreraleo320@gmail.com"} } ,
    { $addFields : { calidad:'excelente' } }
  ]).pretty()
db.Proveedores.aggregate([
    { $match : {Nombre: 'Juan Perez'} } ,
    { $addFields : { vendedor:'rosa arango' } }
  ]).pretty()
  


  db.Productos.aggregate([
    { $match : { categoria: 'lamparas' } },
    { $addFields : { foundation_year : 1218 } }
  ]).pretty()
  

$limit
db.Productos.aggregate([
    {
        $project: {
            _id: 0,
            categoria: 1,
            "productos.Pnombre": 1
        }
    } ,
    { $sort : { 'productos.Pnombre"' : -1 } },{ $limit : 6 }

]).pretty();

db.Clientes.aggregate([
    {
        $project: {
            _id: 0,
            Apellido: 1,
            Correo: 1,
            Edad: 1,

        }
    },
    { $sort : { 'Edad"' : -1 } },{ $limit : 4}
    
]).pretty();


db.Proveedores.aggregate([
    {
        $project: {
            Telefono: 1,
            Direccion: 1,
            "Nombre empresa": 1,
        }
    },
    { $sort : { 'Direccion' : -1 } },{ $limit : 2 }
]).pretty();

$sort
db.Proveedores.aggregate([
    {
        $project: {
            Telefono: 1,
            Direccion: 1,
            "Nombre empresa": 1,
        }
    },
    { $sort : { 'Direccion' : -1 } }
]).pretty();


db.Clientes.aggregate([
    {
        $project: {
            _id: 0,
            Apellido: 1,
            Correo: 1,
            Edad: 1,

        }
    },
    { $sort : { 'Edad"' : -1 } }
    
]).pretty();
db.Productos.aggregate([
    {
        $project: {
            _id: 0,
            categoria: 1,
            "productos.Pnombre": 1
        }
    } ,
    { $sort : { 'productos.Pnombre"' : -1 } }
]).pretty();




$unwid

db.Proveedores.aggregate([
    { $match : { country: 'colombia' } },
    { $unwind : '$products' }
  ]).pretty()

db.Productos.aggregate([
    { $match : { categoria: 'maquillaje' } },
    { $unwind : '$productos' }
  ]).pretty()



db.Clientes.aggregate([
    { $match : { Apellido: 'González'} },
    { $unwind : '$Tipo De Compras' }
  ]).pretty()









$out

db.Proveedores.aggregate([
    { $group : { _id : '$name', totaldocs : { $sum : 1 } } },
    { $out : 'aggResults' }
  ])

  db.aggResults.find().pretty()


  db.Clientes.aggregate([
    { $group : { _id : '$Apellido', totaldocs : { $sum : 1 } } },
    { $out : 'aggResults' }
  ])


  db.Productos.aggregate([
    { $group : { _id : '$products', totaldocs : { $sum : 1 } } },
    { $out : 'aggResults' }
  ])


$group
db.Proveedores.aggregate([
    { $group : { _id : '$name', totaldocs: { $sum : 1 } } }
]).pretty()
db.Productos.aggregate([
    { $group : { _id : '$categoria', totaldocs : { $sum : 1 } } }
]).pretty()

db.Clientes.aggregate([
    { $group : { _id : '$name', total : { $sum : 1 } } }
]).pretty()


$project
db.Proveedores.aggregate([
    {
        $project: {
            Telefono: 1,
            Direccion: 1,
            "Nombre empresa": 1,
        }
    }
]).pretty();

db.Clientes.aggregate([
    {
        $project: {
            _id: 0,
            Apellido: 1,
            Correo: 1,
            Edad: 1,

        }
    }
]).pretty();


db.Productos.aggregate([
    {
        $project: {
            _id: 0,
            categoria: 1,
            "productos.Pnombre": 1
        }
    }
]).pretty();


match:

db.Clientes.aggregate([
    {
        $match: { "Nombre": "Leonardo" } 
    },
    {
        $unwind: "$Tipo De Compras" 
    },
    {
        $match: { "Tipo De Compras": "lacteos" } 
    }
]).pretty()


db.Productos.aggregate([
    {
        $match: { "categoria": "lamparas" }
    },
    {
        $unwind: "$productos"
    },
    {
        $match: { "productos.sede": "D1 Avenida Central" }
    }
]).pretty()

db.Proveedores.aggregate([
    {
        $match: {"Nombre": "Juan Perez"}
    },
    {
        $unwind: "$tipo productos"
    },
    {
        $match: { "tipo productos": "leche" }
    }
]).pretty()

*/