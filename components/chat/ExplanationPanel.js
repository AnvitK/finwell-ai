import { useState } from 'react';
import { EyeIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ExplanationPanel({ data }) {
    // data: { reason, factors: [] }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-gray-100 pt-2 mt-2 w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium hover:text-gray-600 transition-colors"
            >
                <EyeIcon className="w-3 h-3" />
                Why am I seeing this?
                {isOpen ? <ChevronUpIcon className="w-3 h-3" /> : <ChevronDownIcon className="w-3 h-3" />}
            </button>

            {isOpen && (
                <div className="mt-2 bg-gray-50 p-3 rounded-lg text-xs space-y-2 animate-in fade-in slide-in-from-top-1">
                    <p className="text-gray-700 font-medium">{data.reason}</p>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Factors Considered</p>
                        <div className="flex flex-wrap gap-1">
                            {data.factors.map(factor => (
                                <span key={factor} className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] text-gray-600">
                                    {factor}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 italic pt-1 border-t border-gray-200">
                        *Informational only, not financial advice.
                    </p>
                </div>
            )}
        </div>
    );
}
