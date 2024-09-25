import { connectDatabase } from "../database";
import { User, Post, Comment } from "../entities/user";
import { EntityManager } from "@mikro-orm/core";

let em: EntityManager;

const initDatabase = async () => {
  const orm = await connectDatabase();
  em = orm.em.fork();
};

// Function to add a user
export const addUser = async (
  name: string,
  email: string,
  age?: number
): Promise<User> => {
  if (!em) {
    await initDatabase();
  }

  const user = em.create(User, { name, email, age });
  await em.persistAndFlush(user);
  return user;
};

// Function to get all users
export const getUsers = async (): Promise<User[]> => {
  if (!em) {
    await initDatabase();
  }
  const users = await em.find(User, {});
  return users;
};

// Function to add a post
export const addPost = async (
  title: string,
  content: string,
  userId: number
): Promise<Post> => {
  if (!em) {
    await initDatabase();
  }
  const user = await em.findOne(User, { id: userId });
  if (!user) {
    throw new Error(`User with ID ${userId} not found.`);
  }
  const post = em.create(Post, { title, content, user });
  await em.persistAndFlush(post);
  return post;
};

// Function to get all posts by user ID
export const getPostsByUserId = async (userId: number): Promise<Post[]> => {
  if (!em) {
    await initDatabase();
  }
  const posts = await em.find(Post, { user: userId });
  return posts;
};

// Function to add a comment
export const addComment = async (
  text: string,
  userId: number,
  postId: number
): Promise<Comment> => {
  if (!em) {
    await initDatabase();
  }
  const user = await em.findOne(User, { id: userId });
  if (!user) {
    throw new Error(`User with ID ${userId} not found.`);
  }
  const post = await em.findOne(Post, { id: postId });
  if (!post) {
    throw new Error(`Post with ID ${postId} not found.`);
  }
  const comment = em.create(Comment, { text, user, post });
  await em.persistAndFlush(comment);
  return comment;
};

// Function to get all comments by user ID
export const getCommentsByUserId = async (
  userId: number
): Promise<Comment[]> => {
  if (!em) {
    await initDatabase();
  }
  const comments = await em.find(Comment, { user: userId });
  return comments;
};

// Function to get all comments for a specific post
export const getCommentsByPostId = async (
  postId: number
): Promise<Comment[]> => {
  if (!em) {
    await initDatabase();
  }
  const comments = await em.find(Comment, { post: postId });
  return comments;
};
