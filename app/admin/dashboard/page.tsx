'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  uuid: number;
  title: string;
  content: string;
  created_at: string;
}

interface Appointment {
  id: string;
  created_at: string;
  patient_name: string;
  patient_contact: string;
  scheduled_time: string;
  status: string;
}

function AppointmentsList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase
          .from('Appointments')
          .select('*')
          .order('scheduled_time', { ascending: true });

        if (error) {
          console.error('Error fetching appointments:', error);
          setError('Failed to load appointments');
        } else {
          setAppointments(data || []);
          setError(null);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred while loading appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left p-4 font-semibold">Patient Name</th>
              <th className="text-left p-4 font-semibold">Contact</th>
              <th className="text-left p-4 font-semibold">Scheduled Time</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{appt.patient_name}</td>
                <td className="p-4">{appt.patient_contact}</td>
                <td className="p-4">{new Date(appt.scheduled_time).toLocaleString()}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                    {appt.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link 
                    href={`/consultation/${appt.id}`}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm"
                  >
                    Start/Join Call
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  
  const router = useRouter();

  const fetchPosts = async () => {
    setFetchLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('uuid, title, content, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts for admin:', error.message);
        setError('Failed to load posts.');
      } else {
        setPosts(data || []);
      }
    } catch (err) {
      console.error('Unexpected error fetching posts:', err);
      setError('An unexpected error occurred while loading posts');
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from('posts').insert([
        { title, content },
      ]);

      if (error) {
        setError(error.message);
      } else {
        setTitle('');
        setContent('');
        fetchPosts();
      }
    } catch (err) {
      console.error('Unexpected error creating post:', err);
      setError('An unexpected error occurred while creating the post');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (uuid: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    console.log('Attempting to delete post with uuid:', uuid);
    
    try {
      const { error } = await supabase.from('posts').delete().eq('uuid', uuid);

      if (error) {
        console.error('Delete error:', error);
        setError(`Failed to delete post: ${error.message}`);
      } else {
        console.log('Post deleted successfully');
        setError(null);
        fetchPosts();
      }
    } catch (err) {
      console.error('Unexpected error deleting post:', err);
      setError('An unexpected error occurred while deleting the post');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Create New Blog Post</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            rows={8}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Publishing...' : 'Publish Post'}
        </button>
        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
      </form>

      <h2 className="text-2xl font-bold mb-6">Existing Blog Posts</h2>
      {fetchLoading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.uuid} className="border p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600 text-sm">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(post.uuid)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <AppointmentsList />
    </div>
  );
}