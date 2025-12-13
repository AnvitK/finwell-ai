import { StarIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/24/solid';

export default function ProductTile({ data, onAction }) {
    // data: { category: 'Loan'|'Invest', title, subtitle, tags, badge }

    const isLoan = data.category === 'Loan';

    return (
        <div className="bg-white p-0 rounded-xl border border-gray-100 shadow-sm mb-2 w-full max-w-xs overflow-hidden">
            <div className={`p-3 ${isLoan ? 'bg-orange-50' : 'bg-green-50'} flex justify-between items-start`}>
                <div className="flex gap-3">
                    <div className={`p-2 rounded-lg ${isLoan ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                        {isLoan ? <BanknotesIcon className="w-5 h-5" /> : <StarIcon className="w-5 h-5" />}
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">{data.category}</p>
                        <h4 className="font-bold text-sm text-gray-900 leading-tight">{data.title}</h4>
                    </div>
                </div>
                {data.badge && (
                    <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold">
                        {data.badge}
                    </span>
                )}
            </div>

            <div className="p-4 space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                    {data.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                    {data.tags?.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-[10px] font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onAction(`I want to explore ${data.title}`)}
                        className="flex-1 py-2 text-xs font-semibold border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                        Explore
                    </button>
                    <button
                        onClick={() => onAction('Connect with RM')}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg text-white ${isLoan ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'}`}
                    >
                        I'm Interested
                    </button>
                </div>
            </div>
        </div>
    );
}
