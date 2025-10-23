import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      return Response.json({ error: 'Missing Supabase configuration' }, { status: 500 })
    }

    // Create Supabase admin client
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    const formData = await request.formData()
    const file = formData.get('file') as File
    const appointmentId = formData.get('appointmentId') as string

    if (!file || !appointmentId) {
      return Response.json({ error: 'File and appointmentId are required' }, { status: 400 })
    }

    // Create a unique filename
    const fileExt = file.name.split('.').pop()
    const fileName = `payment_${appointmentId}_${Date.now()}.${fileExt}`

    // Upload the file to Supabase storage using service role
    const { data, error } = await supabaseAdmin.storage
      .from('payment-proofs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Upload error:', error)
      return Response.json({ error: error.message }, { status: 400 })
    }

    // Get the public URL
    const { data: urlData } = supabaseAdmin.storage
      .from('payment-proofs')
      .getPublicUrl(fileName)

    return Response.json({ 
      publicUrl: urlData.publicUrl,
      path: data.path
    }, { status: 200 })

  } catch (error) {
    console.error('Storage API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}