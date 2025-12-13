import Link from 'next/link';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Header({ user }) {
    const hour = new Date().getHours();
    let greeting = 'Good Morning';
    if (hour >= 12) greeting = 'Good Afternoon';
    if (hour >= 17) greeting = 'Good Evening';

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-10 shadow-sm">
            <div>
                <h1 className="text-sm text-gray-500 font-medium">{greeting},</h1>
                <h2 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h2>
            </div>
            <div className="flex items-center gap-3">
                <Link href="/alerts" className="p-2 rounded-full hover:bg-gray-100 relative">
                    <BellIcon className="w-6 h-6 text-gray-600" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </Link>
                <Link href="/profile" className="p-1">
                    <UserCircleIcon className="w-8 h-8 text-gray-600" />
                </Link>
            </div>
        </header>
    );
}
