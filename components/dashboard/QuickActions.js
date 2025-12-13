import Link from 'next/link';
import { SparklesIcon, ChartPieIcon, HandThumbUpIcon, FlagIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const actions = [
    { name: 'AI Coach', icon: SparklesIcon, href: '/chat', color: 'bg-purple-100 text-purple-600' },
    { name: 'Insights', icon: ChartPieIcon, href: '/insights', color: 'bg-orange-100 text-orange-600' },
    { name: 'Recommend', icon: HandThumbUpIcon, href: '/recommend', color: 'bg-green-100 text-green-600' },
    { name: 'Goals', icon: FlagIcon, href: '/insights', color: 'bg-pink-100 text-pink-600' },
];

export default function QuickActions() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {actions.map((action) => (
                <Link key={action.name} href={action.href} className="flex flex-col items-center gap-2">
                    <div className={`p-4 rounded-2xl ${action.color} shadow-sm`}>
                        <action.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{action.name}</span>
                </Link>
            ))}
        </div>
    );
}
