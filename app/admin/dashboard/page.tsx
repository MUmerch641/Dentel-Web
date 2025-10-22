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
  appointment_type?: 'online' | 'clinic';
  service_type?: string;
  payment_proof_url?: string;
}

function AppointmentsList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'online' | 'clinic'>('all');
  const [showPaymentProof, setShowPaymentProof] = useState<string | null>(null);

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

  // Filter appointments based on selected filter
  useEffect(() => {
    if (filter === 'all') {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(appointments.filter(apt => apt.appointment_type === filter));
    }
  }, [appointments, filter]);

  const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('Appointments')
        .update({ status: newStatus })
        .eq('id', appointmentId);

      if (error) throw error;

      // Update local state
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === appointmentId ? { ...apt, status: newStatus } : apt
        )
      );
    } catch (err) {
      console.error('Error updating appointment status:', err);
      setError('Failed to update appointment status');
    }
  };

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Patient Appointments</h2>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            All ({appointments.length})
          </button>
          <button
            onClick={() => setFilter('online')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'online'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            💻 Online ({appointments.filter(a => a.appointment_type === 'online').length})
          </button>
          <button
            onClick={() => setFilter('clinic')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'clinic'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            🏥 In-Clinic ({appointments.filter(a => a.appointment_type === 'clinic').length})
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left p-4 font-semibold">Patient</th>
              <th className="text-left p-4 font-semibold">Contact</th>
              <th className="text-left p-4 font-semibold">Service</th>
              <th className="text-left p-4 font-semibold">Type</th>
              <th className="text-left p-4 font-semibold">Scheduled</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Payment</th>
              <th className="text-left p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{appt.patient_name}</td>
                <td className="p-4">
                  <a href={`tel:${appt.patient_contact}`} className="text-blue-600 hover:underline">
                    {appt.patient_contact}
                  </a>
                </td>
                <td className="p-4 text-sm">{appt.service_type || 'General'}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${appt.appointment_type === 'online'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                    }`}>
                    {appt.appointment_type === 'online' ? '💻 Online' : '🏥 In-Clinic'}
                  </span>
                </td>
                <td className="p-4 text-sm">{new Date(appt.scheduled_time).toLocaleString()}</td>
                <td className="p-4">
                  <select
                    value={appt.status}
                    onChange={(e) => updateAppointmentStatus(appt.id, e.target.value)}
                    className={`px-2 py-1 text-xs font-semibold rounded border text-white ${appt.status === 'Confirmed' ? 'bg-green-600' :
                        appt.status === 'Pending Payment' ? 'bg-yellow-600' :
                          appt.status === 'Completed' ? 'bg-blue-600' :
                            appt.status === 'Cancelled' ? 'bg-red-600' : 'bg-gray-600'
                      }`}
                  >
                    <option value="Pending Payment">Pending Payment</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-4">
                  {appt.payment_proof_url ? (
                    <button
                      onClick={() => setShowPaymentProof(appt.payment_proof_url!)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium underline"
                    >
                      View Proof
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">Clinic payment</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {appt.appointment_type === 'online' ? (
                      <Link
                        href={`/consultation/${appt.id}`}
                        target="_blank"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded text-sm"
                      >
                        Video Call
                      </Link>
                    ) : (
                      <span className="bg-gray-400 text-white font-semibold py-1 px-3 rounded text-sm cursor-not-allowed">
                        In-Person
                      </span>
                    )}

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No {filter !== 'all' ? filter : ''} appointments found.
          </div>
        )}
      </div>

      {/* Payment Proof Modal */}
      {showPaymentProof && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment Proof</h3>
              <button
                onClick={() => setShowPaymentProof(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="text-center">
              <img
                src={showPaymentProof}
                alt="Payment Proof"
                className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={showPaymentProof}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Full Size
              </a>
            </div>
          </div>
        </div>
      )}
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