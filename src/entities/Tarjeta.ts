import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarjeta extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    saldo: number;

    //hay que ver esto
    @Column()
    transacciones: string;

    @CreateDateColumn()
    creacion: Date;
}