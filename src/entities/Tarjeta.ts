import { BaseEntity, Column, CreateDateColumn, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaccion } from "./Transaccion";

@Entity()
export class Tarjeta extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    saldo: number;

    @Column()
    card_number: number;   

    @OneToMany(() => Transaccion, transaccion => transaccion.tarjeta, { cascade: true })
    transacciones: Transaccion[];

    @CreateDateColumn()
    creacion: Date;
}