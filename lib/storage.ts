// lib/storage.ts
import { supabase } from './supabase';

export const uploadPaymentProof = async (file: File, appointmentId: string): Promise<string | null> => {
  try {
    // Create a unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `payment_${appointmentId}_${Date.now()}.${fileExt}`;

    // Upload directly to Supabase Storage (no API route needed)
    const { data, error } = await supabase.storage
      .from('payment-proofs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('payment-proofs')
      .getPublicUrl(fileName);

    return urlData.publicUrl;
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

    // Delete directly from Supabase Storage
    const { error } = await supabase.storage
      .from('payment-proofs')
      .remove([fileName]);

    if (error) {
      console.error('Delete error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting file:', error);
    return false;
  }
};