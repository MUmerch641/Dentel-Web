// app/blog/[id]/page.tsx
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';

interface Post {
  uuid: string;
  title: string;
  content: string;
  created_at: string;
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  // Return a dummy param to satisfy static export requirements
  // Since blog posts are dynamic, this will generate a placeholder page
  return [{ id: 'placeholder' }]
}

export default async function SinglePostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // For static export, you cannot fetch from Supabase at runtime
  // This page will show a fallback message
  // To properly support blog posts with static export, you need to:
  // 1. Fetch all posts at build time and generate static pages
  // 2. Or use a different deployment method (not static export)
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl min-h-screen">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
          <p className="text-gray-600 mb-6">
            Blog posts require a server to load dynamically from the database.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            To enable blog functionality, either:
          </p>
          <ul className="text-left max-w-md mx-auto list-disc pl-6 space-y-2 text-sm text-gray-600">
            <li>Remove <code className="bg-gray-100 px-1 rounded">output: 'export'</code> from next.config.mjs and deploy to Vercel/Netlify</li>
            <li>Fetch and pre-generate all blog posts at build time</li>
          </ul>
          <Link href="/blog" className="mt-8 inline-block text-blue-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}