export const DUMMY_DATA = {
    user: {
        name: "Rahul",
        email: "rahul@example.com",
        phone: "+91 98765 43210",
        profilePic: "/placeholder-user.jpg"
    },
    accounts: [
        { id: 1, bank: "HDFC", balance: 24500, type: "Savings" },
        { id: 2, bank: "SBI", balance: 20730, type: "Savings" }
    ],
    expenses: {
        "Groceries": 8000,
        "Dining": 5200,
        "Utilities": 4500,
        "Transport": 3000,
        "Entertainment": 2000,
        "Travel": 6200
    },
    transactions: [
        { id: 1, date: "2023-07-28", description: "Uber Ride", amount: 450, category: "Transport" },
        { id: 2, date: "2023-07-27", description: "Zomato Order", amount: 1200, category: "Dining" },
        { id: 3, date: "2023-07-26", description: "Electricity Bill", amount: 2300, category: "Utilities" },
        { id: 4, date: "2023-07-25", description: "Movie Tickets", amount: 800, category: "Entertainment" },
        { id: 5, date: "2023-07-24", description: "Grocery Store", amount: 3500, category: "Groceries" }
    ],
    savings: 124500,
    goals: {
        "EmergencyFund": {
            name: "Emergency Fund",
            goalAmount: 100000,
            saved: 60000
        },
        "InvestmentPortfolio": {
            name: "Investment Portfolio",
            elss: 50000
        }
    },
    tax: {
        used80C: 70000,
        limit80C: 150000
    },
    insights: {
        spendingThisWeek: 8200,
        transactionsCount: 73
    }
};
