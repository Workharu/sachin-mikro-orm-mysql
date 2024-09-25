import {
  addUser,
  getUsers,
  addPost,
  addComment,
  getPostsByUserId,
  getCommentsByUserId,
} from "../../controllers/user";
import { User, Post, Comment } from "../../entities/user";

export const userResolvers = {
  Query: {
    users: async () => {
      try {
        return await getUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Could not retrieve users");
      }
    },
    getPosts: async (_: unknown, { userId }: { userId: number }) => {
      try {
        return await getPostsByUserId(userId);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        throw new Error("Could not retrieve user posts");
      }
    },
    getComments: async (_: unknown, { userId }: { userId: number }) => {
      try {
        return await getCommentsByUserId(userId);
      } catch (error) {
        console.error("Error fetching user comments:", error);
        throw new Error("Could not retrieve user comments");
      }
    },
  },
  Mutation: {
    createUser: async (
      _: unknown,
      { name, email, age }: { name: string; email: string; age?: number }
    ) => {
      try {
        return await addUser(name, email, age);
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Could not create user");
      }
    },
    createPost: async (
      _: unknown,
      {
        title,
        content,
        userId,
      }: { title: string; content: string; userId: number }
    ) => {
      try {
        return await addPost(title, content, userId);
      } catch (error) {
        console.error("Error creating post:", error);
        throw new Error("Could not create post");
      }
    },
    createComment: async (
      _: unknown,
      { text, userId, postId }: { text: string; userId: number; postId: number }
    ) => {
      try {
        return await addComment(text, userId, postId);
      } catch (error) {
        console.error("Error creating comment:", error);
        throw new Error("Could not create comment");
      }
    },
  },
};
