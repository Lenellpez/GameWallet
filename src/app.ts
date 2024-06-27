import cors from 'cors'
import morgan from 'morgan'
import express from 'express';
import usuarioRoutes from "./routes/usuario.router";
import metodoPagoRoutes from "./routes/metodopago.router";
import tarjetaRoutes from "./routes/tarjeta.router";
import transaccionRoutes from "./routes/transaccion.router";
const app = express()
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
app.use("/api", usuarioRoutes);
app.use("/api", metodoPagoRoutes);
app.use("/api/tarjeta", tarjetaRoutes);
app.use("/api/transaccion", transaccionRoutes);

export default app;