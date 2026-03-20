import { Post, Author, User, Notification } from "@/types";

const authors: Author[] = [
  { 
    id: "1", 
    name: "John Doe", 
    bio: "Tech writer with 10 years of experience in JavaScript.", 
    avatar: "/avatars/john.jpg" 
  },
  { 
    id: "2", 
    name: "Jane Smith", 
    bio: "React expert and Next.js enthusiast.", 
    avatar: "/avatars/jane.jpg" 
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework that makes Server-Side Rendering (SSR) and Static Site Generation (SSG) incredibly easy. It provides a great developer experience out of the box.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react", "ssr"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding SSG vs SSR",
    content: "Static Site Generation (SSG) is great for performance, while Server-Side Rendering (SSR) is essential for personalized, dynamic content that needs to be fresh on every request.",
    author: "2",
    date: "2026-03-05",
    tags: ["nextjs", "performance"],
    readTime: 3,
  }
];

export async function getAllPosts(): Promise<Post[]> {
  // Имитируем небольшую задержку сети
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find(a => a.id === id);
}

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

export async function getUserNotifications(userId: string): Promise<Notification[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { 
      id: "1", 
      type: "info", 
      message: "Welcome to the dashboard!", 
      read: false, 
      createdAt: "2026-03-01" 
    },
    { 
      id: "2", 
      type: "success", 
      message: "Your profile was updated successfully", 
      read: true, 
      createdAt: "2026-02-28" 
    },
  ];
}

export async function getUserAnalytics(userId?: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}