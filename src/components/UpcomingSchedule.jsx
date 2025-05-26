import { CheckCircle } from "lucide-react"

export default function UpcomingSchedule() {
  const scheduleData = [
    {
      day: "On Thursday",
      appointments: [
        {
          id: "checkup",
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "check",
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        },
        {
          id: "ophthalmologist",
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "eye",
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        },
      ],
    },
    {
      day: "On Saturday",
      appointments: [
        {
          id: "cardiologist",
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "heart",
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        },
        {
          id: "neurologist",
          title: "Neurologist",
          time: "16:00 PM",
          icon: "brain",
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        },
      ],
    },
  ]

  const getIcon = (iconType) => {
    switch (iconType) {
      case "check":
        return (
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )
      case "eye":
        return (
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        )
      case "heart":
        return (
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )
      case "brain":
        return (
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        )
      default:
        return <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
    }
  }

  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm h-full flex flex-col">
      <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
        <span className="hidden sm:inline">The Upcoming Schedule</span>
        <span className="sm:hidden">Upcoming</span>
      </h2>

      <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 overflow-y-auto min-h-0">
        {scheduleData.map((daySchedule, dayIndex) => (
          <div key={dayIndex}>
            <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1.5 sm:mb-2 lg:mb-3">{daySchedule.day}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3">
              {daySchedule.appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`${appointment.bgColor} p-2 sm:p-3 rounded-lg flex flex-col items-start space-y-1 sm:space-y-2`}
                >
                  <div className="flex items-center justify-between w-full">
                    <h4 className={`font-medium text-xs sm:text-sm ${appointment.textColor} truncate flex-1 mr-2`}>
                      {appointment.title}
                    </h4>
                    <div className="flex-shrink-0">{getIcon(appointment.icon)}</div>
                  </div>
                  <p className={`text-xs ${appointment.textColor}`}>{appointment.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
