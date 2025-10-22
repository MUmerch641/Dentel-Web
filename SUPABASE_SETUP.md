# Supabase Setup Instructions

## Database Schema

Your `Appointments` table needs these columns:
- `id` (uuid, primary key)
- `created_at` (timestamp with time zone)
- `patient_name` (text)
- `patient_contact` (text)
- `scheduled_time` (timestamp with time zone)
- `status` (text, default: 'Pending Payment')
- `appointment_type` (text) - 'online' or 'clinic'
- `service_type` (text)
- `payment_proof_url` (text, nullable)

## Storage Setup

1. Go to your Supabase dashboard
2. Navigate to Storage
3. Create a new bucket called `payment-proofs`
4. Set it to **Public** access
5. Add RLS policies:

```sql
-- Allow anyone to upload files
CREATE POLICY "Allow uploads" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'payment-proofs');

-- Allow anyone to read files
CREATE POLICY "Allow public read" ON storage.objects 
FOR SELECT USING (bucket_id = 'payment-proofs');
```

## Environment Variables

Make sure you have these in your `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Features Implemented

✅ **Appointment Form**
- Online vs In-Clinic selection
- Service type selection
- Payment integration for online appointments
- File upload for payment proofs

✅ **Admin Dashboard**
- Filter appointments by type (All/Online/In-Clinic)
- View payment proofs in modal
- Update appointment status
- Click-to-call patient numbers
- Separate buttons for video calls vs in-person

✅ **Payment System**
- JazzCash/EasyPaisa payment instructions
- Screenshot upload to Supabase Storage
- Payment verification workflow

## Usage

1. **Patients**: Select appointment type, fill details, make payment (if online), upload screenshot
2. **Admin**: View all appointments, filter by type, verify payments, update status
3. **Consultation**: Click video call for online appointments or in-person for clinic visits

## Next Steps

- Test the payment upload functionality
- Verify the filtering works correctly
- Ensure payment proofs display properly in the modal