import { DUMMY_DATA } from './dummyData';

const SYSTEM_PROMPT = `You are FinWell AI — a smart, trustworthy financial coach for Indian banking users. Answer user questions clearly, using financial data when available. Recommend only long-term, safe investment options like ELSS, SIPs, or savings goals. Always explain your suggestions. Avoid short-term trading or speculative tips.

Current User Data:
${JSON.stringify(DUMMY_DATA, null, 2)}
`;

export async function chatWithAI(messages) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  // 1. Proactive Insight Trigger
  if (lastMessage.includes('insight') || lastMessage.includes('alert')) {
    return {
      role: 'assistant',
      type: 'insight',
      content: "I've detected a few recent updates in your finances.",
      data: {
        title: "Spending Spike Detected",
        message: "You've spent ₹8,200 on Dining this week, which is 25% higher than your average.",
        type: "warning",
        actions: [{ label: "Set Limit", value: "set_limit_dining" }, { label: "Ignore", value: "ignore_spike" }]
      }
    };
  }

  // 2. Financial Health Overview
  if (lastMessage.includes('health') || lastMessage.includes('overview')) {
    return {
      role: 'assistant',
      type: 'insight', // Reusing InsightCard style or text with summary
      content: "Here is your monthly financial snapshot.",
      data: {
        title: "Financial Health: On Track",
        message: "Income: ₹1,50,000\nExpenses: ₹45,000\nSavings: ₹1,05,000 (70%)\n\nYou are saving well above the recommended 20%. Keep it up!",
        type: "success"
      }
    };
  }

  // 3. Goal-Based Planning
  if (lastMessage.includes('goal') || lastMessage.includes('plan')) {
    return {
      role: 'assistant',
      type: 'plan',
      content: "You are making good progress on your Emergency Fund.",
      data: {
        title: "Emergency Fund",
        current: 60000,
        target: 100000,
        subtitle: "Recommended: Increase monthly contribution by ₹5,000 to reach goal by Dec.",
        actions: [{ label: "Top Up Now", value: "top_up_goal" }, { label: "Edit Goal", value: "edit_goal" }]
      }
    };
  }

  // 4. Emergency Fund Readiness
  if (lastMessage.includes('emergency') || lastMessage.includes('buffer')) {
    return {
      role: 'assistant',
      type: 'plan',
      content: "Your emergency fund covers 2 months of expenses.",
      data: {
        title: "Emergency Readiness",
        current: 2,
        target: 6,
        subtitle: "Gap: 4 months. We recommend keeping at least 6 months of expenses (₹1.8L) liquid.",
        actions: [{ label: "Start SIP", value: "start_sip_liquid" }]
      }
    };
  }

  // 5. Contextual Investment
  if (lastMessage.includes('invest') || lastMessage.includes('mutual fund')) {
    return {
      role: 'assistant',
      type: 'product',
      content: "Based on your risk profile, I recommend a tailored mutual fund.",
      data: {
        category: "Invest",
        title: "Bluechip Growth Fund",
        subtitle: "High growth potential with moderate risk. Ideal for 5+ year horizon.",
        tags: ["Equity", "High Growth", "5Y CAGR 18%"],
        badge: "Recommended"
      },
      explanation: {
        reason: "Matches your 'Aggressive' risk profile and long-term goal 'New Car'.",
        factors: ["High Savings Rate", "Young Age", "Long Horizon"]
      }
    };
  }

  // 6. Loan Discovery
  if (lastMessage.includes('loan') || lastMessage.includes('borrow')) {
    return {
      role: 'assistant',
      type: 'product',
      content: "You are pre-qualified for a Personal Loan.",
      data: {
        category: "Loan",
        title: "Instant Personal Loan",
        subtitle: "Get up to ₹5L at interest rates starting from 10.5% p.a.",
        tags: ["Pre-Approved", "No Paperwork", "EMI: ₹4,500 - ₹5,200"],
        badge: "Pre-Qualified"
      }
    };
  }

  // 7. Tax-Saving Assistant
  if (lastMessage.includes('tax') || lastMessage.includes('80c')) {
    return {
      role: 'assistant',
      type: 'plan', // Using PlanCard for progress
      content: "You have used ₹70,000 of your ₹1.5L Section 80C limit.",
      data: {
        title: "80C Tax Limit",
        current: 70000,
        target: 150000,
        subtitle: "Save ₹24,000 more in tax by investing the remaining ₹80,000.",
        actions: [{ label: "Invest in ELSS", value: "invest_elss" }]
      }
    };
  }

  // 9. Human-in-the-Loop
  if (lastMessage.includes('support') || lastMessage.includes('help') || lastMessage.includes('talk')) {
    return {
      role: 'assistant',
      type: 'escalation',
      content: "I can connect you with a Relationship Manager for complex queries."
    };
  }

  // Default
  if (lastMessage.includes('balance')) {
    const totalBalance = DUMMY_DATA.accounts.reduce((acc, curr) => acc + curr.balance, 0);
    return {
      role: 'assistant',
      type: 'text',
      content: `Your current balance is ₹${totalBalance.toLocaleString('en-IN')} across ${DUMMY_DATA.accounts.length} linked accounts.`
    };
  }

  if (lastMessage.includes('spend')) {
    const totalSpend = Object.values(DUMMY_DATA.expenses).reduce((a, b) => a + b, 0);
    return {
      role: 'assistant',
      type: 'text',
      content: `You have spent ₹${totalSpend.toLocaleString('en-IN')} this month.`
    };
  }

  return {
    role: 'assistant',
    type: 'text',
    content: "I can help with Insights, Goals, Investments, Loans, Tax planning, and more. Try asking 'Show proactive insights' or 'Analyze my financial health'."
  };
}
