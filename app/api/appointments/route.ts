import { createClient } from '@supabase/supabase-js'

// Use service role key (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export async function POST(request: Request) {
  try {
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