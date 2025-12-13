export default function GoalCard({ goal }) {
    const percentage = Math.round((goal.saved / goal.goalAmount) * 100);

    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-gray-900">{goal.name}</h3>
                    <p className="text-xs text-gray-500">Target: ₹{goal.goalAmount.toLocaleString('en-IN')}</p>
                </div>
                <span className="font-bold text-blue-600">{percentage}%</span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>

            <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">Saved: ₹{goal.saved.toLocaleString('en-IN')}</span>
                <button className="text-blue-600 font-semibold hover:underline">Top Up</button>
            </div>
        </div>
    );
}
