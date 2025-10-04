// app/blog/[id]/page.tsx
import { supabaseServer } from '@/lib/supabase-server';
import Link from 'next/link';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { id } = params;

  const { data: post, error } = await supabaseServer
    .from('posts')
    .select('uuid, title, content, created_at')
    .eq('uuid', id)
    .single();

  if (error || !post) {
    console.error('Error fetching post:', error?.message || 'Post not found');
    return <p className="container mx-auto px-4 py-8">Post not found.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
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
  );
}