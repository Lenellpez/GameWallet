import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}