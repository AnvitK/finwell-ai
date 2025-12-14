import Link from 'next/link';
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import SpendingBarChart from '@/components/charts/SpendingBarChart';
import TrendLineChart from '@/components/charts/TrendLineChart';
import { DUMMY_DATA } from '@/lib/dummyData';

export default function SpendingPage() {
    const { spending } = DUMMY_DATA;
    const totalSpent = spending.monthly_spend;

    // Mock missing data for UI
    const insights = { transactionsCount: 12 };
    const transactions = [
        { id: 1, description: "Grocery Store", date: "Today, 10:23 AM", amount: 450 },
        { id: 2, description: "Uber Ride", date: "Yesterday, 6:45 PM", amount: 320 },
        { id: 3, description: "Netflix Subscription", date: "Dec 12, 2025", amount: 649 },
        { id: 4, description: "Starbucks", date: "Dec 11, 2025", amount: 280 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                        <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                    </Link>
                    <h1 className="text-lg font-bold text-gray-900">Weekly Spending</h1>
                </div>
                <button className="p-2 text-blue-600">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="px-6 py-6 space-y-6">
                {/* Breakdown Card */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Total Spent this Month</p>
                    <h2 className="text-3xl font-bold text-gray-900">₹{totalSpent.toLocaleString('en-IN')}</h2>
                    <p className="text-xs text-gray-400 mt-1">{insights.transactionsCount} transactions</p>
                </div>

                {/* Category Chart */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-900 font-semibold mb-4">Category-wise Spend</h3>
                    <div className="h-48 w-full">
                        <SpendingBarChart expenses={spending.top_categories} />
                    </div>
                </div>

                {/* Trend Chart */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-900 font-semibold mb-4">5-Month Trend</h3>
                    <div className="h-40 w-full">
                        <TrendLineChart />
                    </div>
                </div>

                {/* Transactions List (Simplified) */}
                <div>
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Recent Transactions</h3>
                    <div className="space-y-3">
                        {transactions.map((tx) => (
                            <div key={tx.id} className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm">
                                <div>
                                    <p className="font-semibold text-gray-800">{tx.description}</p>
                                    <p className="text-xs text-gray-400">{tx.date}</p>
                                </div>
                                <span className="font-bold text-gray-900">-₹{tx.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
