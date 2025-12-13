import Link from 'next/link';
import { ArrowLeftIcon, ExclamationTriangleIcon, BoltIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

export default function AlertsPage() {
    const alerts = [
        {
            id: 1,
            type: 'critical',
            title: 'Phone Bill Due Soon',
            message: 'Your bill of ₹2,000 is due tomorrow. You have ₹1,500 left in your budget.',
            icon: ExclamationTriangleIcon,
            action: 'Top Up',
            color: 'bg-red-50 text-red-600 border-red-100'
        },
        {
            id: 2,
            type: 'warning',
            title: 'Spending Spike Detected',
            message: 'You spent ₹8,200 this week, which is higher than your average of ₹6,500.',
            icon: BoltIcon,
            action: 'Check Spending',
            color: 'bg-orange-50 text-orange-600 border-orange-100'
        },
        {
            id: 3,
            type: 'info',
            title: 'Goal Reminder',
            message: 'You are ₹5,000 away from your monthly saving target. Keep it up!',
            icon: ClockIcon,
            action: 'View Goal',
            color: 'bg-blue-50 text-blue-600 border-blue-100'
        },
        {
            id: 4,
            type: 'offer',
            title: 'Offer Expiring Soon',
            message: 'Get 10% cashback on Groceries. Valid until Sunday.',
            icon: TagIcon,
            action: 'View Offer',
            color: 'bg-green-50 text-green-600 border-green-100'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <div className="bg-white px-6 py-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
                <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-gray-900">Smart Alerts</h1>
            </div>

            <div className="px-6 py-6 space-y-4">
                {alerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-xl border ${alert.color} flex flex-col gap-3 shadow-sm`}>
                        <div className="flex items-start gap-3">
                            <alert.icon className="w-6 h-6 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-sm font-semibold bg-white/50 px-3 py-1.5 rounded-lg hover:bg-white/80 transition-colors">
                                {alert.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
