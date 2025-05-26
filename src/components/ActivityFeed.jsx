import { activityData } from "../data/appointmentData"

export default function ActivityFeed() {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value))

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Activity</h2>
      <p className="text-sm text-gray-500 mb-6">{activityData.weeklyAppointments} appointments on this week</p>

      <div className="flex items-end space-x-2 sm:space-x-3 h-24 sm:h-32">
        {activityData.chartData.map((data, index) => (
          <div key={data.day} className="flex flex-col items-center flex-1">
            <div
              className={`w-full rounded-t ${
                index % 2 === 0 ? "bg-cyan-400" : "bg-blue-500"
              } transition-all duration-300`}
              style={{
                height: `${(data.value / maxValue) * 100}%`,
                minHeight: "8px",
              }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
