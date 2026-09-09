

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let pizzas = [{ id: 1, nombre: "Hawaiina", descripcion: "Jamon y piña" }]

/**

 * @returns []
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000)
    return pizzas
}

/**

 * @param {*} id
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000)
    const pizza = pizzas.find(x => x.id == id)
    return pizza
}

/**
 
 * @param {*} pizza 
 */
export async function agregarPizzaAsync(pizza) {
    await sleep(1000)
   
    const maxId = pizzas.length > 0 ? Math.max(...pizzas.map(p => p.id)) : 0;
    const nuevaPizza = { id: maxId + 1, ...pizza };
    pizzas.push(nuevaPizza)
    return nuevaPizza
}

/**
 
 * @param {*} id 
 * @param {*} pizzaActualizada 
 */
export async function actualizarPizzaAsync(id, pizzaActualizada) {
    await sleep(1000)
    const index = pizzas.findIndex(x => x.id == id)
    
    if (index !== -1) {
        pizzas[index] = { ...pizzas[index], ...pizzaActualizada, id: pizzas[index].id }
        return pizzas[index]
    }
    return undefined 
}

/**
 
 * @param {*} id 
 */
export async function borrarPizzaAsync(id) {
    await sleep(1000)
    const index = pizzas.findIndex(x => x.id == id)
    
    if (index !== -1) {
        const pizzaBorrada = pizzas.splice(index, 1)
        return pizzaBorrada[0]
    }
    return undefined
}