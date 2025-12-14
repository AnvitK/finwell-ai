import Header from '@/components/layout/Header';
import SavingsCard from '@/components/dashboard/SavingsCard';
import SpendingCard from '@/components/dashboard/SpendingCard';
import QuickActions from '@/components/dashboard/QuickActions';
import { DUMMY_DATA } from '@/lib/dummyData';

export default function Home() {
  const { personal_info: user, spending, banking } = DUMMY_DATA;

  // Calculate derived values for UI compatibility
  const savingsAmount = banking.accounts.reduce((acc, curr) => acc + curr.balance, 0) +
    banking.fixed_deposits.reduce((acc, curr) => acc + curr.amount, 0);

  const weeklySpend = Math.round(spending.monthly_spend / 4); // Approximation for UI

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <Header user={user} />

      <div className="px-6 py-4 space-y-6">
        {/* Total Savings */}
        <section>
          <SavingsCard amount={savingsAmount} />
        </section>

        {/* Avg Spending / Weekly Summary */}
        <section>
          <SpendingCard
            amount={weeklySpend}
            transactionsCount={12} // Mock for now
          />
        </section>

        {/* Smart Updates */}
        <section className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Smart Updates</h3>
          <p className="text-gray-800 text-sm">
            You spent <span className="font-bold">₹{weeklySpend.toLocaleString('en-IN')}</span> this week (approx). That's on track with your budget! 🎉
          </p>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Quick Actions</h3>
          <QuickActions />
        </section>
      </div>
    </main>
  );
}
