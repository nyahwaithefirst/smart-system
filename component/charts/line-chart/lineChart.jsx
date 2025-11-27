import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts'


const sampleData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 600 },
    { name: 'Jun', value: 700 },
    { name: 'Jul', value: 650 },
]

export default function LineWithAreaChart({
    data = sampleData,
    height = 145,
    strokeColor = '#2563eb', // blue-600
    gradientStart = '#2563eb',
    gradientEnd = '#93c5fd',
    id = `area-gradient-${Math.random().toString(36).slice(2, 9)}`,
}) {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white pt-4 rounded-2xl shadow-md">
            <div style={{ width: '100%', height }}>
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                                {/* top color: more solid */}
                                <stop offset="0%" stopColor={gradientStart} stopOpacity={0.45} />
                                {/* middle */}
                                <stop offset="50%" stopColor={gradientStart} stopOpacity={0.20} />
                                {/* bottom color: very faded but still solid */}
                                <stop offset="100%" stopColor={gradientEnd} stopOpacity={0.06} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />

                        {/* The Area component draws the line (stroke) and the filled area underneath (fill) */}
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={strokeColor}
                            strokeWidth={2.5}
                            fill={`url(#${id})`}
                            dot={false}
                            activeDot={{ r: 5 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
