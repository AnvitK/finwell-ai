"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function TrendLineChart() {
    // Dummy trend data
    const data = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Balance',
                data: [42000, 38000, 45000, 39000, 45230],
                borderColor: '#10B981', // emerald-500
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            point: {
                radius: 3,
                hitRadius: 10,
                hoverRadius: 5
            }
        }
    };

    return <Line data={data} options={options} />;
}
