export const FALLBACK_RESPONSES = [
    {
        keywords: ['balance', 'account', 'money', 'funds'],
        response: "**(Dummy Data Mode)**\nYou have **₹45,230** across 2 accounts – ₹24,500 in HDFC and ₹20,730 in SBI."
    },
    {
        keywords: ['fixed deposit', 'fd'],
        response: "**(Dummy Data Mode)**\nYou have an FD with ICICI Bank worth **₹1,00,000** at 6.5% interest, maturing on 1st March 2026."
    },
    {
        keywords: ['invest', 'sip', 'mutual fund', 'stock', 'share', 'portfolio', 'elss', 'gold'],
        response: "**(Dummy Data Mode)**\nBased on your moderate risk profile, I recommend diversifying.",
        type: 'product',
        data: {
            title: "Axis Bluechip Fund",
            subtitle: "Consistent long-term growth with moderate risk.",
            category: "Mutual Fund",
            tags: ["Equity", "High Growth", "Large Cap"],
            badge: "Recommended"
        }
    },
    {
        keywords: ['budget', 'save', 'saving', 'track', 'emergency'],
        response: "**(Dummy Data Mode)**\nYou are making good progress on your Emergency Fund.",
        type: 'plan',
        data: {
            title: "Emergency Fund",
            subtitle: "3 months of expenses covered",
            current: 60000,
            target: 100000
        }
    },
    {
        keywords: ['spend', 'spent', 'expense', 'cost'],
        response: "**(Dummy Data Mode)**\nYour spending on Dining is higher than usual this month.",
        type: 'insight',
        title: "High Spend Alert", // Insight card expects specific structure in main object for some reason? No, stricture in MessageBubble uses data.
        data: {
            title: "High Spending Alert",
            message: "You've spent ₹5,200 on dining this month, which is 20% above average.",
            type: "warning",
            actions: ["Set Limit", "Ignore"]
        }
    },
    {
        keywords: ['tax', '80c', '80d'],
        response: "**(Dummy Data Mode)**\nYou’ve used **₹70,000** of your ₹1,50,000 80C limit.\n\nTo save more, consider ELSS, PPF, or NPS. You've also claimed ₹12,500 under 80D and ₹85,000 for home loan interest."
    },
    {
        keywords: ['insurance', 'term', 'health', 'life'],
        response: "**(Dummy Data Mode)**\n- **Life Insurance**: ₹50L term plan (Premium: ₹8,500/yr)\n- **Health Insurance**: ₹5L cover (Premium: ₹12,500/yr)"
    },
    {
        keywords: ['credit', 'score', 'cibil'],
        response: "**(Dummy Data Mode)**\nYour current credit score is **772**."
    },
    {
        keywords: ['loan', 'emi', 'debt'],
        response: "**(Dummy Data Mode)**\n**Active Loans:**\n- **Home Loan**: ₹13L outstanding (EMI: ₹18,500)\n- **Car Loan**: ₹2.4L outstanding (EMI: ₹7,800)\n- **Credit Card**: ₹12,000 due on Dec 20"
    },
    {
        keywords: ['report', 'summary', 'habit', 'overview'],
        response: "**(Dummy Data Mode)**\n**Financial Summary:**\n- **Total Balance**: ₹45,230\n- **Total Savings**: ₹1,24,500\n- **Investments**: ₹4.15L\n- **Monthly Spend**: ₹28,900\n\n**Key Habits:** Consistent savings (~₹20K), low credit usage, regular investments."
    },
    {
        keywords: ['support', 'help', 'human', 'agent'],
        response: "**(Dummy Data Mode)**\nNo problem! You can chat with support or request a callback. What would you prefer?"
    }
];

export function getFallbackResponse(query) {
    const lowerQuery = query.toLowerCase();

    // Find the first matching category
    const match = FALLBACK_RESPONSES.find(item =>
        item.keywords.some(keyword => lowerQuery.includes(keyword))
    );

    if (match) {
        return {
            role: 'assistant',
            type: match.type || 'text',
            isFallback: true,
            content: match.response + "\n\n*(Note: This is a fallback response because the AI limit was reached.)*",
            data: match.data || null
        };
    }

    // Default Fallback
    return {
        role: 'assistant',
        type: 'text',
        isFallback: true,
        content: "**(Dummy Data Mode)**\nI'm currently offline due to high traffic, but here is your summary:\n\n**Balance**: ₹45,230\n**Monthly Spend**: ₹28,900\n**Next Bill**: Credit Card (₹12,000 due Dec 20).\n\n*(Note: This is a fallback response because the AI limit was reached.)*"
    };
}
