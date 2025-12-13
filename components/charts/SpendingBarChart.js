"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SpendingBarChart({ expenses }) {
    const categories = Object.keys(expenses);
    const dataValues = Object.values(expenses);

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Spending (₹)',
                data: dataValues,
                backgroundColor: '#3B82F6', // blue-500
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
    };

    return <Bar data={data} options={options} />;
}
