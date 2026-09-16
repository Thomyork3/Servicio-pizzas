import mongoose from 'mongoose';

// Tu cadena de conexión con la base de datos "pizzeria" agregada
const MONGO_URI = "mongodb+srv://alan:asdfghj@posters.9ztuebm.mongodb.net/pizzeria?appName=Posters";

// Conexión a la base de datos
mongoose.connect(MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Atlas exitosamente"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

// Esquema y Modelo de Mongoose
const pizzaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true }
}, { versionKey: false });

const Pizza = mongoose.model('Pizza', pizzaSchema);

/**
 * Obtiene todas las pizzas almacenadas en la base de datos.
 * @returns {Promise<Array>} Un arreglo de objetos de pizzas.
 */
export async function obtenerTodasLasPizzasAsync() {
    return await Pizza.find();
}

/**
 * Busca y retorna una pizza específica por su ID.
 * @param {String} id - El identificador único de Mongo de la pizza.
 * @returns {Promise<Object|null>} El objeto de la pizza o null si no existe.
 */
export async function obtenerPizzaPorIdAsync(id) {
    return await Pizza.findById(id);
}

/**
 * Crea y guarda una nueva pizza en la base de datos.
 * @param {Object} pizza - Objeto con los datos de la nueva pizza (nombre, descripcion).
 * @returns {Promise<Object>} La pizza creada con su nuevo ID generado por Mongo.
 */
export async function agregarPizzaAsync(pizza) {
    const nuevaPizza = new Pizza(pizza);
    return await nuevaPizza.save();
}

/**
 * Actualiza los datos de una pizza existente por su ID.
 * @param {String} id - El ID de la pizza a actualizar.
 * @param {Object} datosNuevos - Objeto con los campos a actualizar.
 * @returns {Promise<Object|null>} La pizza actualizada o null si no se encontró.
 */
export async function actualizarPizzaAsync(id, datosNuevos) {
    return await Pizza.findByIdAndUpdate(id, datosNuevos, { new: true });
}

/**
 * Elimina una pizza de la base de datos usando su ID.
 * @param {String} id - El ID de la pizza a eliminar.
 * @returns {Promise<Object|null>} La pizza eliminada o null si no se encontró.
 */
export async function borrarPizzaAsync(id) {
    return await Pizza.findByIdAndDelete(id);
}