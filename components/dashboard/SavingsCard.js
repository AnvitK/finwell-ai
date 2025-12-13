export default function SavingsCard({ amount }) {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white shadow-lg shadow-blue-200">
            <p className="text-blue-100 text-sm font-medium mb-1">Total Savings</p>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="mt-4 flex gap-2">
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    +12% this month
                </div>
            </div>
        </div>
    );
}
