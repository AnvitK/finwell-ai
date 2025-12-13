import { NextResponse } from 'next/server';
import { DUMMY_DATA } from '@/lib/dummyData';

export async function GET() {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(DUMMY_DATA);
}
