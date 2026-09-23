import express from "express";
import cors from 'cors';
import { 
  obtenerTodasLasPizzasAsync, 
  obtenerPizzaPorIdAsync,
  agregarPizzaAsync,
  actualizarPizzaAsync,
  borrarPizzaAsync
} from './pizza_repositorio.js';

const app = express();
app.use(cors());

const PORT = 3000;

// Configuración para procesar JSON en el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET: Buscar todas las pizzas
app.get("/api/v1/pizzas", async (req, res) => {
  const pizzas = await obtenerTodasLasPizzasAsync();
  return res.status(200).json(pizzas);
});

// GET: Buscar una pizza por ID
app.get("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id;
  try {
      const pizza = await obtenerPizzaPorIdAsync(id);
      if (!pizza) {
          return res.status(404).json({ mensaje: "Pizza no encontrada" });
      }
      return res.status(200).json(pizza);
  } catch (error) {
      return res.status(400).json({ mensaje: "ID inválido o error en el servidor" });
  }
});

// POST: Crear una nueva pizza
app.post("/api/v1/pizzas", async (req, res) => {
  const nuevaPizza = req.body;
  const pizzaCreada = await agregarPizzaAsync(nuevaPizza);
  return res.status(201).json(pizzaCreada);
});

// PUT: Actualizar una pizza existente
app.put("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id;
  const datosAActualizar = req.body;
  
  try {
      const pizzaActualizada = await actualizarPizzaAsync(id, datosAActualizar);
      if (!pizzaActualizada) {
          return res.status(404).json({ mensaje: "Pizza no encontrada" });
      }
      return res.status(200).json(pizzaActualizada);
  } catch (error) {
      return res.status(400).json({ mensaje: "ID inválido o error al actualizar" });
  }
});

// DELETE: Borrar una pizza
app.delete("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id;
  try {
      const pizzaBorrada = await borrarPizzaAsync(id);
      if (!pizzaBorrada) {
          return res.status(404).json({ mensaje: "Pizza no encontrada" });
      }
      return res.status(200).json({ mensaje: "Pizza eliminada exitosamente", pizza: pizzaBorrada });
  } catch (error) {
      return res.status(400).json({ mensaje: "ID inválido o error al eliminar" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});
