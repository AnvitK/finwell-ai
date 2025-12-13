import { ExclamationCircleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

export default function InsightCard({ data, onAction }) {
    // data: { title, message, type: 'warning'|'success'|'info', actions: [{label, value}] }

    const icons = {
        warning: ExclamationCircleIcon,
        success: CheckCircleIcon,
        info: InformationCircleIcon
    };

    const colors = {
        warning: 'text-amber-600 bg-amber-50 border-amber-100',
        success: 'text-green-600 bg-green-50 border-green-100',
        info: 'text-blue-600 bg-blue-50 border-blue-100'
    };

    const Icon = icons[data.type] || icons.info;
    const colorClass = colors[data.type] || colors.info;

    return (
        <div className={cn("p-4 rounded-xl border mb-2", colorClass)}>
            <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-sm mb-1">{data.title}</h4>
                    <p className="text-xs opacity-90 leading-relaxed whitespace-pre-line">{data.message}</p>
                </div>
            </div>

            {data.actions && (
                <div className="flex gap-2 mt-3 ml-8">
                    {data.actions.map((action, idx) => (
                        <button
                            key={idx}
                            onClick={() => onAction(action.value)}
                            className="text-xs font-semibold bg-white/60 px-3 py-1.5 rounded-lg border border-black/5 hover:bg-white transition-colors"
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            )}

            <div className="flex justify-end mt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">AI Insight</span>
            </div>
        </div>
    );
}
