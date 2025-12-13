"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, ChartBarIcon, ChatBubbleLeftRightIcon, UserIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolid, ChartBarIcon as ChartBarSolid, ChatBubbleLeftRightIcon as ChatBubbleSolid, UserIcon as UserSolid } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/', icon: HomeIcon, activeIcon: HomeSolid },
        { name: 'Insights', href: '/insights', icon: ChartBarIcon, activeIcon: ChartBarSolid },
        { name: 'AI Coach', href: '/chat', icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleSolid },
        { name: 'Profile', href: '/profile', icon: UserIcon, activeIcon: UserSolid },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 pb-safe flex justify-between items-center z-50">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center gap-1 min-w-[64px]",
                            isActive ? "text-blue-600" : "text-gray-500"
                        )}
                    >
                        <Icon className="w-6 h-6" />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
