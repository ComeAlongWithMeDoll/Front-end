import { Post, Author } from "@/types";

const authors: Author[] = [
    { id: "1", name: "Boby", bio: "Tech writer", avatar: "/avatars/boby.jpg"},
    { id: "2" , name: "Bob", bio: "React expert", avatar: "/avaatars/bob.jpg"},
];

const posts: Post[] = [
    {
        id: "1",
        title: "Getting Started with Next.js",
        content: "Next.js is a React framework that ...",
        author: "1",
        date: "2026-04-21",
        tags: ["next.js", "react"],
        readTime: 5,
    },
    {
        id: "2",
        title: "Mastering SSG",
        content: "Static site generation is great ...",
        author: "2",
        date: "2026-04-20",
        tags: ["perfomance"],
        readTime: 3,
    },
];

export async function getAllPosts():Promise<Post[]> {
    return posts;
}
export async function getPostById(id:string):Promise<Post | undefined> {
    return posts.find(p => p.id === id);
}
export async function getAuthorById(id:string): Promise<Post | undefined> {
    return authors.find(a => a.id === id);
}