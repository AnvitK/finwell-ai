"use client";

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(true);

    // Logic to hide on chat page could be added here if needed, 
    // but for now we'll just show it globally or rely on parent to not render it on /chat.

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link href="/chat">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-400" />
                    <span className="font-medium pr-1">Ask FinWell AI</span>
                    <span className="bg-blue-600 text-[10px] px-1.5 py-0.5 rounded text-white font-bold group-hover:bg-white group-hover:text-blue-600 transition-colors">BETA</span>
                </motion.button>
            </Link>
        </div>
    );
}
