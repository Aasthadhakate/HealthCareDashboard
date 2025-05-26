import { Wind, Zap, Bone } from "lucide-react"
import { healthStatusData } from "../data/healthData"

const iconMap = {
  lungs: Wind,
  teeth: Zap,
  bone: Bone,
}

export default function HealthStatusCards() {
  return (
    <div className="bg-white rounded-lg p-1 sm:p-2 lg:p-3 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex-1 space-y-1.5 sm:space-y-2 overflow-y-auto min-h-0">
        {healthStatusData.map((item) => {
          const Icon = iconMap[item.id]
          return (
            <div key={item.id} className="bg-gray-50 rounded-lg p-1.5 sm:p-2">
              <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3" style={{ color: item.color }} />
                </div>
                <h4 className="font-medium text-xs sm:text-sm text-gray-800 truncate">{item.title}</h4>
              </div>
              <p className="text-xs text-gray-500 mb-1 truncate">{item.date}</p>
              <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5">
                <div
                  className="h-1 sm:h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${item.progress}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          )
        })}

        <button className="text-cyan-500 text-xs font-medium hover:text-cyan-600 flex items-center mt-1.5 sm:mt-2">
          Details <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  )
}
