import Link from 'next/link';
import { ArrowLeftIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import GoalCard from '@/components/dashboard/GoalCard';
import SpendingBarChart from '@/components/charts/SpendingBarChart';
import TrendLineChart from '@/components/charts/TrendLineChart'; // Reuse for now
import { DUMMY_DATA } from '@/lib/dummyData';

export default function InsightsPage() {
    const { goals, expenses } = DUMMY_DATA;
    const { goals, expenses } = DUMMY_DATA;
    // Fix: Access correct key 'emergency_fund' and map to structure expected by GoalCard
    const emergencyFund = {
        name: "Emergency Fund",
        saved: goals.emergency_fund.saved,
        goalAmount: goals.emergency_fund.target
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                        <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                    </Link>
                    <h1 className="text-lg font-bold text-gray-900">Insights & Goals</h1>
                </div>
            </div>

            <div className="px-6 py-6 space-y-6">
                {/* Spending vs Savings (Reusing Trend Chart for visual demo) */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-900 font-semibold mb-4">Savings Growth</h3>
                    <div className="h-40 w-full">
                        <TrendLineChart />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">Consistent growth over last 5 months</p>
                </div>

                {/* Goals */}
                <div className="space-y-4">
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Your Goals</h3>
                    <GoalCard goal={emergencyFund} />

                    {/* Hardcoded 2nd goal for demo if not in dummy data properly structured for generic loop */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 opacity-60">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-gray-900">New Car</h3>
                                <p className="text-xs text-gray-500">Target: ₹8,00,000</p>
                            </div>
                            <span className="font-bold text-gray-400">0%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2"></div>
                        <button className="text-blue-600 text-xs font-semibold hover:underline">Start Saving</button>
                    </div>
                </div>

                {/* Peer Comparison */}
                <section className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600">
                            <UserGroupIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-indigo-900">Compare to Peers</h3>
                    </div>
                    <p className="text-sm text-indigo-800 mb-3">
                        You save <span className="font-bold">15% more</span> than people of your age in your city.
                    </p>
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold text-sm shadow-indigo-200 shadow-lg">
                        View Detailed Report
                    </button>
                </section>

                {/* Expense Breakdown */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-900 font-semibold mb-4">Expense Analysis</h3>
                    <div className="h-48 w-full">
                        <SpendingBarChart expenses={expenses} />
                    </div>
                </div>
            </div>
        </div>
    );
}
