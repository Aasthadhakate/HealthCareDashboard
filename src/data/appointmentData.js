export const calendarData = {
  month: "October 2021",
  days: [
    { date: 25, day: "Mon", appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tues", appointments: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", appointments: ["12:00", "13:00"] },
    { date: 28, day: "Thurs", appointments: ["10:00", "11:00"] },
    { date: 29, day: "Fri", appointments: ["14:00", "15:00", "16:00"] },
    { date: 30, day: "Sat", appointments: ["14:00", "15:00"] },
    { date: 31, day: "Sun", appointments: ["09:00", "10:00", "11:00"] },
  ],
}

export const appointmentCards = [
  {
    id: 1,
    type: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr Cameron Williamson",
    color: "blue",
  },
  {
    id: 2,
    type: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr Kevin Djores",
    color: "orange",
  },
]

export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "check",
        color: "pink",
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "eye",
        color: "purple",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "heart",
        color: "red",
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        icon: "brain",
        color: "blue",
      },
    ],
  },
]

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", value: 20 },
    { day: "Tues", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thurs", value: 60 },
    { day: "Fri", value: 25 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ],
}
