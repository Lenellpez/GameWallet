import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    contraseña: string;

    @Column()
    telefono: number;

    @CreateDateColumn()
    creacion: Date;

    @Column()
    rol: string;
}