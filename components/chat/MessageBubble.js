import { UserCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';
import InsightCard from './InsightCard';
import PlanCard from './PlanCard';
import ProductTile from './ProductTile';
import ExplanationPanel from './ExplanationPanel';
import EscalationCard from './EscalationCard';

export default function MessageBubble({ role, message }) {
    const isUser = role === 'user';
    const { type, data, explanation } = message;

    return (
        <div className={cn("flex gap-3 mb-4", isUser ? "flex-row-reverse" : "flex-row")}>
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", isUser ? "bg-gray-200" : "bg-blue-100")}>
                {isUser ? <UserCircleIcon className="w-6 h-6 text-gray-500" /> : <SparklesIcon className="w-5 h-5 text-blue-600" />}
            </div>

            <div className={cn(
                "max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed",
                isUser ? "bg-black text-white rounded-tr-sm" : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm"
            )}>
                {message.content && <p className={cn("mb-2", !data && "mb-0")}>{message.content}</p>}

                {!isUser && type === 'insight' && <InsightCard data={data} onAction={console.log} />}
                {!isUser && type === 'plan' && <PlanCard data={data} onAction={console.log} />}
                {!isUser && type === 'product' && <ProductTile data={data} onAction={console.log} />}
                {!isUser && type === 'escalation' && <EscalationCard onAction={console.log} />}

                {!isUser && explanation && <ExplanationPanel data={explanation} />}
            </div>
        </div>
    );
}
