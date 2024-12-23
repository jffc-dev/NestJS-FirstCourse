import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  fullName: string;

  @Column('boolean')
  isActive: boolean;

  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  roles: string[];
}
