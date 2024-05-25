import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column()
  username: string;

  @Column()
  fullName: string;

  @Column()
  relationshipType: string;

  @Column()
  email: string;

  @Column()
  city: string;
}


