import express from 'express';
import { 
    obtenerTodasLasPizzasAsync, 
    obtenerPizzaPorIdAsync, 
    agregarPizzaAsync, 
    actualizarPizzaAsync, 
    borrarPizzaAsync 
} from './repositorios/pizza.repositorio.js';

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/api/v1/pizzas', async (req, res) => {
    const pizzas = await obtenerTodasLasPizzasAsync();
    res.json(pizzas);
});


app.get('/api/v1/pizzas/:id', async (req, res) => {
    const id = req.params.id;
    const pizza = await obtenerPizzaPorIdAsync(id);
    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).json({ mensaje: "Pizza no encontrada" });
    }
});


app.post('/api/v1/pizzas', async (req, res) => {
    const datosNuevaPizza = req.body;
    const pizzaCreada = await agregarPizzaAsync(datosNuevaPizza);
    res.status(201).json(pizzaCreada); // 201 significa "Creado"
});


app.put('/api/v1/pizzas/:id', async (req, res) => {
    const id = req.params.id;
    const datosAActualizar = req.body;
    const pizzaActualizada = await actualizarPizzaAsync(id, datosAActualizar);
    
    if (pizzaActualizada) {
        res.json(pizzaActualizada);
    } else {
        res.status(404).json({ mensaje: "Pizza no encontrada" });
    }
});


app.delete('/api/v1/pizzas/:id', async (req, res) => {
    const id = req.params.id;
    const pizzaBorrada = await borrarPizzaAsync(id);
    
    if (pizzaBorrada) {
        res.json({ mensaje: "Pizza borrada correctamente", pizza: pizzaBorrada });
    } else {
        res.status(404).json({ mensaje: "Pizza no encontrada" });
    }
});


app.listen(PORT, () => {
    console.log(` Servidor de pizzas corriendo en http://localhost:${PORT}`);
});