"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, CreditCardIcon, BriefcaseIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

const CATEGORIES = [
    { id: 'cards', name: 'Credit Cards', icon: CreditCardIcon },
    { id: 'invest', name: 'Investments', icon: BriefcaseIcon },
    { id: 'insurance', name: 'Insurance', icon: ShieldCheckIcon },
];

const PRODUCTS = {
    cards: [
        {
            id: 1,
            name: 'Millennial Rewards Card',
            tags: ['Top Pick', 'No Annual Fee'],
            benefits: ['5% Cashback on Online Shopping', 'Free Airport Lounge Access', 'Zomato Gold Membership'],
            color: 'bg-gradient-to-r from-purple-500 to-indigo-600'
        },
        {
            id: 2,
            name: 'Travel Miles Card',
            tags: ['For Travelers'],
            benefits: ['3x Miles on Flights', 'Low Forex Markup', 'Travel Insurance Included'],
            color: 'bg-gradient-to-r from-blue-400 to-cyan-500'
        }
    ],
    invest: [
        {
            id: 3,
            name: 'Tech Growth Mutual Fund',
            tags: ['High Return', 'Equity'],
            benefits: ['25% 3Y CAGR', 'Zero Exit Load', 'Invest in Top Tech Companies'],
            color: 'bg-white border-l-4 border-green-500 text-gray-900',
            isLight: true
        },
        {
            id: 4,
            name: 'Sovereign Gold Bond',
            tags: ['Safe', 'Tax Free'],
            benefits: ['2.5% Annual Interest', 'Capital Appreciation', 'RBI Backed'],
            color: 'bg-white border-l-4 border-yellow-500 text-gray-900',
            isLight: true
        }
    ],
    insurance: [
        {
            id: 5,
            name: 'Health Guard Plus',
            tags: ['Comprehensive'],
            benefits: ['₹10L Cover', 'No Room Rent Capping', 'Free Health Checkup'],
            color: 'bg-teal-50 text-teal-900 border border-teal-200',
            isLight: true
        }
    ]
};

export default function RecommendPage() {
    const [activeTab, setActiveTab] = useState('cards');

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <div className="bg-white px-6 py-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
                <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-gray-900">Recommended for You</h1>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto px-6 py-4 gap-3 no-scrollbar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium",
                            activeTab === cat.id
                                ? "bg-gray-900 text-white shadow-md"
                                : "bg-white text-gray-600 border border-gray-200"
                        )}
                    >
                        <cat.icon className="w-4 h-4" />
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="px-6 space-y-4">
                {PRODUCTS[activeTab].map((product) => (
                    <div
                        key={product.id}
                        className={cn(
                            "rounded-2xl p-5 shadow-sm relative overflow-hidden",
                            product.isLight ? "bg-white" : "text-white " + product.color
                        )}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="flex gap-2 mb-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full", product.isLight ? "bg-gray-100 text-gray-600" : "bg-white/20 backdrop-blur-sm")}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold">{product.name}</h3>
                            </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                            {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-3">
                            <button className={cn("flex-1 py-2.5 rounded-xl font-semibold text-sm", product.isLight ? "bg-black text-white" : "bg-white text-gray-900")}>
                                Apply Now
                            </button>
                            <button className={cn("flex-1 py-2.5 rounded-xl font-semibold text-sm border", product.isLight ? "border-gray-200 hover:bg-gray-50" : "border-white/30 hover:bg-white/10")}>
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
