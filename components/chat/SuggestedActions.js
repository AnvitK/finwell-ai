export default function SuggestedActions({ onSelect }) {
    const actions = [
        "Check my balance",
        "Show proactive insights",
        "Analyze financial health",
        "Plan emergency fund",
        "Investment options",
        "Tax saving help",
        "Loan eligibility"
    ];

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar px-6">
            {actions.map((action) => (
                <button
                    key={action}
                    onClick={() => onSelect(action)}
                    className="whitespace-nowrap bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                >
                    {action}
                </button>
            ))}
        </div>
    );
}
