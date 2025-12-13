import { ChartBarIcon } from '@heroicons/react/24/solid';

export default function PlanCard({ data, onAction }) {
    // data: { title, current, target, subtitle, progress }

    const percentage = Math.min(100, Math.round((data.current / data.target) * 100));

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-2 w-full max-w-xs">
            <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                    <ChartBarIcon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">{data.title}</h4>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-bold text-gray-900">{percentage}%</span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                    <span>₹{data.current.toLocaleString('en-IN')}</span>
                    <span>Target: ₹{data.target.toLocaleString('en-IN')}</span>
                </div>

                <div className="bg-indigo-50 p-3 rounded-lg text-xs text-indigo-800 leading-relaxed">
                    {data.subtitle}
                </div>

                {data.actions && (
                    <div className="flex gap-2 pt-1">
                        {data.actions.map((action, idx) => (
                            <button
                                key={idx}
                                onClick={() => onAction(action.value)}
                                className="flex-1 text-xs font-semibold bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
