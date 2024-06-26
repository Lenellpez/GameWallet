import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MetodoPago extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;
}