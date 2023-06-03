import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  splash: string;

  @Column()
  eShopLink: string;

  @Column()
  size: string;

  @Column()
  category: string;

  @Column()
  magnet: string;

  @Column()
  views: number;
}
