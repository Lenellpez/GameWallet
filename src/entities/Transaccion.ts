import { BaseEntity, Column, CreateDateColumn, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tarjeta } from "./Tarjeta";

@Entity()
export class Transaccion extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monto: number;

    @Column()
    tipo: string;

    @CreateDateColumn()
    fecha: Date;

    @Column()
    estado: string;

    @ManyToOne(() => Tarjeta, tarjeta => tarjeta.transacciones)
    tarjeta: Tarjeta;
}