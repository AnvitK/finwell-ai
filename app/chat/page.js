import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ChatInterface from '@/components/chat/ChatInterface';

export default function ChatPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white px-6 py-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
                <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                </Link>
                <div>
                    <h1 className="text-lg font-bold text-gray-900">FinWell Coach</h1>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <p className="text-xs text-green-600 font-medium">Online</p>
                    </div>
                </div>
            </div>

            <ChatInterface />
        </div>
    );
}
