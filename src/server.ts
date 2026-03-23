import express from 'express'
import cors from 'cors'
import rutasGuitarras from './router'
import db from './config/db'

const iniciarBaseDeDatos = async () => {
  try {
    await db.authenticate()
    db.sync()
    console.log("Base de datos conectada correctamente")
  } catch (error) {
    console.error(error)
    console.log("Fallo la conexión a la BD PostgreSQL")
  }
}

iniciarBaseDeDatos()

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json())

// Definición de las rutas
app.use('/api/guitarras', rutasGuitarras)

export default app