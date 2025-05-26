import { Heart } from "lucide-react"
import { anatomyIndicators } from "../data/healthData"

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-lg p-1 sm:p-2 lg:p-3 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
        <div className="relative w-full max-w-[70px] sm:max-w-[90px] lg:max-w-[120px] xl:max-w-[140px]">
          <div className="relative w-full aspect-[1/1.4]">
            {/* Human anatomy image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/src/assets/humananatomy-removebg-preview.png"
                alt="Human Anatomy"
                className="w-full h-full object-contain"
                style={{ filter: "brightness(1.1) contrast(1.1)" }}
              />

              {/* Health Indicators */}
              {anatomyIndicators.map((indicator) => (
                <div key={indicator.id} className="absolute" style={indicator.position}>
                  {indicator.type === "indicator" ? (
                    <div className="bg-blue-600 text-white px-1 py-0.5 sm:px-1.5 sm:py-0.5 lg:px-2 lg:py-1 rounded-full text-xs font-medium flex items-center space-x-1 whitespace-nowrap">
                      <Heart className="w-1.5 h-1.5 sm:w-2 sm:h-2" />
                      <span className="hidden sm:inline text-xs">{indicator.name}</span>
                      <span className="sm:hidden text-xs">Heart</span>
                    </div>
                  ) : (
                    <button className="bg-blue-600 text-white px-1 py-0.5 sm:px-1.5 sm:py-0.5 lg:px-2 lg:py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors">
                      <span className="hidden sm:inline">{indicator.name}</span>
                      <span className="sm:hidden">Log</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
