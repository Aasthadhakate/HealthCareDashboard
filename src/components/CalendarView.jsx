import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarView() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const weekDaysMobile = ["M", "T", "W", "T", "F", "S", "S"]
  const calendarDates = [
    { date: 25, times: ["10:00", "11:00", "12:00"] },
    { date: 26, times: ["08:00", "09:00", "10:00"] },
    { date: 27, times: ["12:00", "13:00"] },
    { date: 28, times: ["10:00", "11:00"] },
    { date: 29, times: ["—", "14:00", "16:00"] },
    { date: 30, times: ["12:00", "14:00", "15:00"], highlighted: [0] },
    { date: 31, times: ["09:00", "10:00", "11:00"] },
  ]

  const appointmentCards = [
    {
      id: "dentist",
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      color: "blue",
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djores",
      color: "orange",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm h-full flex flex-col">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
          <span className="hidden sm:inline">October 2021</span>
          <span className="sm:hidden">Oct 2021</span>
        </h2>
        <div className="flex items-center space-x-1 lg:space-x-2">
          <button className="p-0.5 sm:p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-0.5 sm:p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar Days Header */}
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2 sm:mb-3">
        {weekDays.map((day, index) => (
          <div key={day} className="text-center text-xs font-medium text-gray-600 py-1">
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{weekDaysMobile[index]}</span>
          </div>
        ))}
      </div>

      {/* Calendar Dates and Times */}
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2 sm:mb-3 lg:mb-4 flex-1 min-h-0">
        {calendarDates.map((dayData) => (
          <div key={dayData.date} className="text-center">
            <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{dayData.date}</div>
            <div className="space-y-0.5 sm:space-y-1">
              {dayData.times.slice(0, window.innerWidth < 640 ? 2 : 3).map((time, index) => (
                <div
                  key={index}
                  className={`text-xs px-0.5 sm:px-1 py-0.5 rounded ${
                    dayData.highlighted?.includes(index)
                      ? "bg-purple-200 text-purple-800"
                      : time === "09:00" && dayData.date === 26
                        ? "bg-blue-600 text-white"
                        : time === "11:00" && dayData.date === 28
                          ? "bg-purple-200 text-purple-800"
                          : time === "—"
                            ? "text-gray-300"
                            : "text-gray-600"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Cards - Side by Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-auto flex-shrink-0">
        {appointmentCards.map((appointment) => (
          <div
            key={appointment.id}
            className={`p-2 sm:p-3 rounded-lg flex items-center justify-between ${
              appointment.color === "blue" ? "bg-blue-600 text-white" : "bg-purple-100 text-purple-800"
            }`}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-xs sm:text-sm mb-1 truncate">
                <span className="hidden sm:inline">{appointment.title}</span>
                <span className="sm:hidden">
                  {appointment.title.includes("Physiotherapy") ? "Physiotherapy" : appointment.title}
                </span>
              </h3>
              <p className={`text-xs mb-1 ${appointment.color === "blue" ? "text-blue-100" : "text-purple-600"}`}>
                {appointment.time}
              </p>
              <p className={`text-xs truncate ${appointment.color === "blue" ? "text-blue-100" : "text-purple-600"}`}>
                {appointment.doctor}
              </p>
            </div>
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded flex items-center justify-center flex-shrink-0 ${
                appointment.color === "blue" ? "bg-white/20" : "bg-orange-200"
              }`}
            >
              {appointment.color === "blue" ? (
                <svg className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1s1-.45 1-1v-2.26c.64.16 1.31.26 2 .26s1.36-.1 2-.26V17c0 .55.45 1 1 1s1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              ) : (
                <svg
                  className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
