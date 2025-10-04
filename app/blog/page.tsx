// app/blog/page.tsx

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { supabaseServer } from "@/lib/supabase-server"
import Link from "next/link"

interface Post {
  uuid: number;
  title: string;
  content: string;
  created_at: string;
}

// This tells Next.js to re-fetch the data every 60 seconds
export const revalidate = 60 

// Make the component async
export default async function BlogListPage() {
  // Fetch the data from Supabase
  const { data: posts, error } = await supabaseServer
    .from('posts')
    .select('uuid, title, content, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
  }

  const postsData: Post[] = posts || [];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Educational articles and practical tips curated by our clinicians.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {postsData.length === 0 ? (
            <p className="col-span-full text-center text-foreground/60">No blog posts available.</p>
          ) : (
            postsData.map((post) => (
              <article key={post.uuid} className="flex flex-col rounded-lg border border-border bg-card p-5">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 flex-grow text-sm text-foreground/80">
                  {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <Link 
                    className="inline-block text-sm font-medium text-accent hover:underline" 
                    href={`/blog/${post.uuid}`}
                  >
                    Read more →
                  </Link>
                  <span className="text-xs text-foreground/60">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}