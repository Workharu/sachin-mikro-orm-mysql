import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "varchar", length: 255 })
  name!: string;

  @Property({ type: "varchar", length: 255 })
  email!: string;

  @Property({ nullable: true, type: "int" })
  age?: number;
}

@Entity()
export class Post {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "varchar", length: 255 })
  title!: string;

  @Property({ type: "text" })
  content!: string;

  @ManyToOne(() => User, { nullable: false })
  user!: User;
}

@Entity()
export class Comment {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "text" })
  text!: string;

  @ManyToOne(() => User, { nullable: false })
  user!: User;

  @ManyToOne(() => Post, { nullable: false })
  post!: Post;
}
