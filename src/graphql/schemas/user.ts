export const userTypeDefs = `
    type User {
        id: ID!
        name: String!
        age: Int
        email: String!
        posts: [Post]!
        comments: [Comment]!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        user: User!
        comments: [Comment]!
    }

    type Comment {
        id: ID!
        text: String!
        user: User!
        post: Post!
    }

    type Mutation {
        createUser(name: String!, age: Int, email: String!): User
        createPost(title: String!, content: String!, userId: ID!): Post
        createComment(text: String!, userId: ID!, postId: ID!): Comment
    }

    type Query {
        users: [User]!
        posts: [Post]!
        comments: [Comment]!
        getPosts(userId: ID!): [Post]!
        getComments(userId: ID!): [Comment]!
    }
`;
