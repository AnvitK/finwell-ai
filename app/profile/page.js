"use client";

import Link from 'next/link';
import {
    ArrowLeftIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    BellIcon,
    ShieldCheckIcon,
    MoonIcon,
    ArrowRightOnRectangleIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';
import { DUMMY_DATA } from '@/lib/dummyData';

export default function ProfilePage() {
    // Fix: correct destructuring matching dummyData structure
    const { personal_info: user, banking, goals } = DUMMY_DATA;
    // Fix: Access accounts from banking object and savings from goals
    const accounts = banking.accounts;
    const savings = goals.emergency_fund.saved;

    // Fix: Add safety check for reduce
    const totalBalance = accounts ? accounts.reduce((acc, curr) => acc + curr.balance, 0) : 0;

    const settings = [
        { icon: BellIcon, label: 'Notifications', value: 'On' },
        { icon: ShieldCheckIcon, label: 'Privacy & Security', value: '' },
        { icon: MoonIcon, label: 'Dark Mode', value: 'Off' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm relative">
                <div className="flex items-center gap-3">
                    <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                        <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                    </Link>
                    <h1 className="text-lg font-bold text-gray-900">My Profile</h1>
                </div>
                <button className="p-2 text-gray-500 hover:text-gray-900">
                    <Cog6ToothIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="px-6 py-6 space-y-6">
                {/* Profile Header */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-3 border-4 border-white shadow-md">
                        <UserCircleIcon className="w-20 h-20 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                    <p className="text-gray-400 text-sm mt-1">{user.phone}</p>
                </div>

                {/* Account Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total Balance</p>
                        <p className="text-xl font-bold text-gray-900 mt-1">₹{totalBalance.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Rewards</p>
                        <p className="text-xl font-bold text-yellow-500 mt-1">2,450 pts</p>
                    </div>
                </div>

                {/* Full Savings Card */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 rounded-2xl shadow-lg text-white">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-blue-100 font-medium">Total Savings</p>
                        <span className="bg-white/20 text-xs px-2 py-1 rounded-md backdrop-blur-sm">+12%</span>
                    </div>
                    <p className="text-3xl font-bold">₹{savings.toLocaleString('en-IN')}</p>
                </div>

                {/* Settings Menu */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {settings.map((item, index) => (
                        <button key={item.label} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
                            <div className="flex items-center gap-3">
                                <item.icon className="w-5 h-5 text-gray-500" />
                                <span className="font-medium text-gray-700">{item.label}</span>
                            </div>
                            {item.value && <span className="text-sm text-gray-400">{item.value}</span>}
                            {!item.value && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
                        </button>
                    ))}
                    <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors text-red-600">
                        <div className="flex items-center gap-3">
                            <ArrowRightOnRectangleIcon className="w-5 h-5" />
                            <span className="font-medium">Log Out</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
