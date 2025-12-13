import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

export default function EscalationCard({ onAction }) {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-2 w-full max-w-xs">
            <h4 className="font-bold text-sm text-gray-900 mb-2">Need Expert Advice?</h4>
            <p className="text-xs text-gray-600 mb-4">
                Our Relationship Managers can help you create a personalized wealth plan.
            </p>
            <div className="space-y-2">
                <button
                    onClick={() => onAction("Schedule Call")}
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-gray-800"
                >
                    <CalendarDaysIcon className="w-4 h-4" />
                    Schedule a Call
                </button>
                <button
                    onClick={() => onAction("Request Callback")}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2 rounded-lg text-xs font-semibold hover:bg-gray-50"
                >
                    <PhoneIcon className="w-4 h-4" />
                    Request Callback
                </button>
            </div>
        </div>
    );
}
