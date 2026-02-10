import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ name: 'short_name', type: 'text', nullable: false, unique: true })
  shortName: string;

  @Column({ name: 'full_name', type: 'text', nullable: true })
  fullName?: string;

  @Column('varchar', { array: true, nullable: true })
  keywords?: string[];

  @Column({ type: 'text', nullable: false })
  url: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
