import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts"
import { activityData } from "../data/appointmentData"

export default function ActivityChart() {
  const colors = ["#22d3ee", "#3b82f6", "#22d3ee", "#3b82f6", "#22d3ee", "#3b82f6", "#22d3ee"]

  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm mt-10">
      <h2 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-1 sm:mb-2">Activity</h2>
      <p className="text-xs text-gray-500 mb-2 sm:mb-3">{activityData.weeklyAppointments} appointments this week</p>
      <div className="h-16 sm:h-20 lg:h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData.chartData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 8, fill: "#6B7280" }}
              className="sm:text-xs"
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {activityData.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
