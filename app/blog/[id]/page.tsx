// app/blog/[id]/page.tsx
"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface Post {
  uuid: string;
  title: string;
  content: string;
  created_at: string;
}

export default function SinglePostPage() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('posts')
          .select('uuid, title, content, created_at')
          .eq('uuid', id)
          .single();

        if (error) {
          console.error('Error fetching post:', error.message);
          setError('Post not found');
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('Failed load post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-3xl min-h-screen">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8 min-h-screen">
          <p>{error || 'Post not found.'}</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl min-h-screen">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
          Published on {new Date(post.created_at).toLocaleDateString()}
        </p>
        <div className="prose lg:prose-lg">
          {/* You might want to render markdown here if content is markdown */}
          <p>{post.content}</p>
        </div>
        <Link href="/blog" className="mt-8 inline-block text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </main>
      <Footer />
    </>
  );
}