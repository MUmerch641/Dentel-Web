import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl) {
      console.error('Missing NEXT_PUBLIC_SUPABASE_URL')
      return Response.json({ error: 'Missing Supabase URL' }, { status: 500 })
    }

    if (!supabaseServiceKey) {
      console.error('Missing SUPABASE_SERVICE_ROLE_KEY')
      return Response.json({ error: 'Missing Supabase service key' }, { status: 500 })
    }

    // Create Supabase admin client
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    const body = await request.json()
    console.log('Received appointment data:', body)
    
    const { data, error } = await supabaseAdmin
      .from('Appointments')
      .insert(body)
      .select()
    
    if (error) {
      console.error('Supabase error:', error)
      return Response.json({ error: error.message }, { status: 400 })
    }
    
    return Response.json({ data: data[0] }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}