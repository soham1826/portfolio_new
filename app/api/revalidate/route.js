import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function POST(request) {
  const path = request.nextUrl.searchParams.get('path')
  const secret  = request.nextUrl.searchParams.get('secret')

  if(secret !== process.env.MY_SECRET_TOKEN){
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
 
  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
  }
 
  revalidatePath(path)
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}