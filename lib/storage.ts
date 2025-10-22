// lib/storage.ts

export const uploadPaymentProof = async (file: File, appointmentId: string): Promise<string | null> => {
  try {
    // Use API route to upload (bypasses RLS)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('appointmentId', appointmentId);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Upload error:', errorData.error);
      return null;
    }

    const result = await response.json();
    return result.publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
};

export const deletePaymentProof = async (url: string): Promise<boolean> => {
  try {
    // Extract filename from URL
    const fileName = url.split('/').pop();
    if (!fileName) return false;

    // Use API route for deletion too (you can create this later if needed)
    const response = await fetch('/api/delete-file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName })
    });

    return response.ok;
  } catch (error) {
    console.error('Error deleting file:', error);
    return false;
  }
};