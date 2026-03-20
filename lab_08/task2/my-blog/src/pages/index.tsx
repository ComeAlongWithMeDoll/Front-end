import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <Link href={`/posts/${post.id}`}>
              <h2 style={{ color: "blue", cursor: "pointer" }}>{post.title}</h2>
            </Link>
            <p>By Author ID: {post.author} | {post.readTime} min read</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // ISR: страница обновится максимум раз в 60 секунд
  };
};