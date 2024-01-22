import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request) {
    // const cookieStore = cookies()
    // const testCookie = cookieStore.get('test')

    // console.log("test cookie",testCookie.value)
    return NextResponse.next()
}

