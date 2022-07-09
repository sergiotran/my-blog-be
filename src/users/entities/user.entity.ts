import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({
  name: 'users'
})
class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: String,
    unique: true
  })
  username: string;

  @Column({
    type: String,
    select: false
  })
  password: string;

  @Column({
    type: String,
    unique: true
  })
  email: string;

  @Column({
    type: String
  })
  first_name: string;

  @Column({
    type: String
  })
  last_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({
    default: null
  })
  update_at: Date;

  @DeleteDateColumn({
    default: null
  })
  deleted_at: Date;
}

export default User;
