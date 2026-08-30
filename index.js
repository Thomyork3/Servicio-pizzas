const express = require("express");
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

// aquí definiríamos las rutas
app.get("/", (req, res) => {
  const saludo = { mensaje: "Hola mundo V1" };
  return res.json(saludo);
});

app.get("/api/v1/saludos", (req, res)=>{
  const saludo = { mensaje: "Hola mundo, desde nodejs" }
  return res.json(saludo)
})

app.get("/api/v1/error", (req, res)=>{
  const respuesta = { mensaje: "Oops ocurrio un error" }
  return res.status(500).json(respuesta)
});


//prueba

app.get("/api/v1/202", (req, res)=>{
  const respuesta = { mensaje: "aceptado" }
  return res.status(500).json(respuesta)
});

app.get("/api/v1/error400", (req, res)=>{
  const respuesta = { mensaje: "mala solicitud" }
  return res.status(500).json(respuesta)
});

app.get("/api/v1/error401", (req, res)=>{
  const respuesta = { mensaje: "Oops ocurrio un error" }
  return res.status(500).json(respuesta)
});

app.get("/api/v1/error404", (req, res)=>{
  const respuesta = { mensaje: "pOos no se encontrò" }
  return res.status(500).json(respuesta)
});

app.get("/api/v1/201", (req, res)=>{
  const respuesta = { mensaje: "creado" }
  return res.status(500).json(respuesta)
});

//tarea
app.get("/api/v1/pizzas", (req, res)=>{
  const respuesta = { mensaje: "pizzas escoge sabor" }
  return res.status(500).json(respuesta)
  });

app.get("/api/v1/pizzas/peperoni", (req, res)=>{
  const respuesta = { mensaje: "pizza sabor peperoni" }
  return res.status(500).json(respuesta)
  });

app.get("/api/v1/pizzas/hawaiana", (req, res)=>{
  const respuesta = { mensaje: "pizza sabor hawaiana" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/pizzas/3quesos", (req, res)=>{
  const respuesta = { mensaje: "pizza sabor 3 quesos" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/bebidas", (req, res)=>{
  const respuesta = { mensaje: "selecciona bebida" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/bebidas", (req, res)=>{
  const respuesta = { mensaje: "selecciona bebida" }
  return res.status(500).json(respuesta)
  });

   app.get("/api/v1/bebidas/aguaHorchata", (req, res)=>{
  const respuesta = { mensaje: "bebida agua de horchata" }
  return res.status(500).json(respuesta)
  });

   app.get("/api/v1/bebidas/aguaJamaica", (req, res)=>{
  const respuesta = { mensaje: "bebida agua de jamaica" }
  return res.status(500).json(respuesta)
  });

 app.get("/api/v1/bebidas/aguaLimon", (req, res)=>{
  const respuesta = { mensaje: "bebida agua de limon" }
  return res.status(500).json(respuesta)
  });

 app.get("/api/v1/tamanios", (req, res)=>{
  const respuesta = { mensaje: "selecciona tamanio" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/tamanios/chico", (req, res)=>{
  const respuesta = { mensaje: "tamanio chico" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/tamanios/mediano", (req, res)=>{
  const respuesta = { mensaje: "tamanio mediano" }
  return res.status(500).json(respuesta)
  });

  app.get("/api/v1/tamanios/grande", (req, res)=>{
  const respuesta = { mensaje: "tamanio grande" }
  return res.status(500).json(respuesta)
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});