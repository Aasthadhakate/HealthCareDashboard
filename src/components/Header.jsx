"use client"

import { Bell, Plus, User, Menu, Search } from "lucide-react"

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-100 px-2 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between flex-shrink-0 h-12 sm:h-14 lg:h-16">
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
        {/* Mobile menu button */}
        <button onClick={onMenuClick} className="lg:hidden p-1 sm:p-2 text-gray-600 hover:text-gray-800">
          <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-400">Health</span>
          <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">care.</span>
        </div>
      </div>

      {/* Search Bar - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-8">
        <div className="relative w-full">
          <Search className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 lg:w-4 lg:h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-7 lg:pl-10 pr-3 lg:pr-4 py-1.5 lg:py-2 bg-gray-50 border border-gray-200 rounded-md lg:rounded-lg text-xs lg:text-sm focus:outline-none focus:ring-1 lg:focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
        {/* Mobile search button */}
        <button className="sm:hidden p-1.5 text-gray-600 hover:text-gray-800">
          <Search className="w-4 h-4" />
        </button>

        <button className="relative p-1 sm:p-1.5 lg:p-2 text-gray-600 hover:text-gray-800">
          <Bell className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></span>
        </button>

        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-cyan-400 rounded-full flex items-center justify-center">
          <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-white" />
        </div>

        <button className="bg-cyan-400 text-white p-1 sm:p-1.5 lg:p-2 rounded-md lg:rounded-lg hover:bg-cyan-500 transition-colors">
          <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
    </header>
  )
}
