import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function SpendingCard({ amount, transactionsCount }) {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
                <p className="text-gray-500 text-sm font-medium">Spending this week</p>
                <Link href="/spending" className="text-blue-600 text-xs font-semibold flex items-center">
                    View All <ArrowRightIcon className="w-3 h-3 ml-1" />
                </Link>
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
                Across {transactionsCount} transactions
            </p>

            {/* Simple Bar Chart Visual */}
            <div className="flex items-end gap-1 h-8 mt-4">
                <div className="bg-blue-100 w-1/5 h-3/5 rounded-sm"></div>
                <div className="bg-blue-100 w-1/5 h-2/5 rounded-sm"></div>
                <div className="bg-blue-100 w-1/5 h-4/5 rounded-sm"></div>
                <div className="bg-blue-100 w-1/5 h-2/5 rounded-sm"></div>
                <div className="bg-blue-500 w-1/5 h-full rounded-sm"></div>
            </div>
        </div>
    );
}
