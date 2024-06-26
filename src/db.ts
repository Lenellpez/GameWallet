import { DataSource } from "typeorm";
import { Usuario } from "./entities/Usuario";
import { MetodoPago } from "./entities/MetodoPago";
import { Tarjeta } from "./entities/Tarjeta";
import { Transaccion } from "./entities/Transaccion";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password123",
    database: "pysw",
    synchronize: true,
    entities: [Usuario, MetodoPago, Tarjeta, Transaccion],
});