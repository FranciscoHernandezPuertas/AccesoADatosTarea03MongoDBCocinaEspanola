// 1. Escribe una consulta en MongoDB para mostrar todos los documentos en la colección restaurantes.
db.restaurantes.find()

// 2. Escribe una consulta en MongoDB para mostrar los campos id_restaurante, nombre, distrito y cocina para todos los documentos en la colección restaurantes.
db.restaurantes.find(
  {},
  { id_restaurante: 1, nombre: 1, distrito: 1, cocina: 1 }
)

// 3. Escribe una consulta en MongoDB para mostrar los campos id_restaurante, nombre, distrito y cocina, 
// pero excluir el campo _id para todos los documentos en la colección restaurantes.
db.restaurantes.find(
  {},
  { _id: 0, id_restaurante: 1, nombre: 1, distrito: 1, cocina: 1 }
)

// 4. Escribe una consulta en MongoDB para mostrar los campos id_restaurante, nombre, distrito y código_postal, 
// pero excluir el campo _id para todos los documentos en la colección restaurantes.
db.restaurantes.find(
  {},
  {
    _id: 0,
    id_restaurante: 1,
    nombre: 1,
    distrito: 1,
    "dirección.código_postal": 1
  }
)

// 5. Escribe una consulta en MongoDB para mostrar todos los restaurantes que están en el distrito "Centro".
db.restaurantes.find({ distrito: "Centro" })

// 6. Escribe una consulta en MongoDB para mostrar los primeros 5 restaurantes que están en el distrito "Centro".
db.restaurantes.find({ distrito: "Centro" }).limit(5)

// 7. Escribe una consulta en MongoDB para mostrar los siguientes 5 restaurantes, después de omitir los primeros 5 que están en el distrito "Centro" de Madrid.
db.restaurantes.find({ distrito: "Centro" }).skip(5).limit(5)

// 8. Escribe una consulta en MongoDB para encontrar los restaurantes en Madrid que han obtenido un puntaje superior a 5 en alguna de sus calificaciones.
db.restaurantes.find({
  "calificaciones.puntaje": { $gt: 5 }
})

// Si se desea mostrar únicamente las calificaciones mayores a 5:
db.restaurantes.find(
  { "calificaciones.puntaje": { $gt: 5 } },
  { nombre: 1, calificaciones: { $elemMatch: { puntaje: { $gt: 5 } } }, _id: 0 }
)

// 9. Escribe una consulta en MongoDB para encontrar los restaurantes en Madrid que han obtenido un puntaje superior a 7 pero inferior a 10 en alguna de sus calificaciones.
db.restaurantes.find({
  "calificaciones.puntaje": { $gt: 7, $lt: 10 }
})

// 10. Escribe una consulta en MongoDB para encontrar los restaurantes cuya latitud es menor que 3.723340.
// Se asume que la latitud se encuentra en la posición 1 del arreglo "coordenadas" dentro del campo "dirección".
db.restaurantes.find({
  "dirección.coordenadas.1": { $lt: 3.723340 }
})