"use client"

import { useState } from "react"
import Header from "../src/components/Header"
import Sidebar from "../src/components/Sidebar"
import DashboardMainContent from "../src/components/DashboardMainContent"

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setSidebarOpen(true)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <Header onMenuClick={handleMenuClick} />
      <div className="flex flex-1 relative overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        <DashboardMainContent />
      </div>
    </div>
  )
}
