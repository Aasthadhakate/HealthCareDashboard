import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import ActivityChart from "./ActivityChart"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"

export default function DashboardMainContent() {
  return (
    <main className="flex-1 bg-gray-50 p-1 sm:p-2 lg:p-3 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Mobile Layout - Stack everything vertically */}
        <div className="block lg:hidden h-full flex-col space-y-2 sm:space-y-3">
          {/* Dashboard Title */}
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 px-2 flex-shrink-0">Dashboard</h1>

          {/* Anatomy and Health Status - Side by side on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 flex-shrink-0">
            <div className="h-[140px] sm:h-[160px]">
              <AnatomySection />
            </div>
            <div className="h-[140px] sm:h-[160px]">
              <HealthStatusCards />
            </div>
          </div>

          <div className="h-[100px] sm:h-[120px] flex-shrink-0">
            <ActivityChart />
          </div>

          <div className="flex-1 min-h-0">
            <CalendarView />
          </div>

          <div className="h-[180px] sm:h-[200px] flex-shrink-0">
            <UpcomingSchedule />
          </div>
        </div>

        {/* Desktop Layout - No scrolling, responsive grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-2 h-full overflow-hidden">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-3 flex flex-col space-y-2 min-h-0 overflow-hidden">
            {/* Dashboard Title */}
            <h1 className="text-xl xl:text-2xl font-bold text-gray-800 flex-shrink-0">Dashboard</h1>

            {/* Anatomy and Health Status Section - Fixed height */}
            <div className="grid grid-cols-2 gap-2 h-[45%] min-h-0">
              <div className="min-h-0">
                <AnatomySection />
              </div>
              <div className="min-h-0">
                <HealthStatusCards />
              </div>
            </div>

            {/* Activity Section - Fixed height */}
            <div className="h-[25%] min-h-[120px] max-h-[160px] flex-shrink-0">
              <ActivityChart />
            </div>

            {/* Empty space for balance */}
            <div className="flex-1 min-h-0"></div>
          </div>

          {/* Right Section - Calendar and Schedule */}
          <div className="lg:col-span-2 flex flex-col space-y-2 min-h-0 overflow-hidden">
            <div className="flex-1 min-h-0 overflow-hidden">
              <CalendarView />
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
