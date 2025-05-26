"use client"

import {
  Grid3X3,
  Clock,
  Calendar,
  Clipboard,
  BarChart3,
  FileText,
  MessageCircle,
  HelpCircle,
  Settings,
  X,
} from "lucide-react"
import { navigationItems } from "../data/navigationData"

const iconMap = {
  grid: Grid3X3,
  clock: Clock,
  calendar: Calendar,
  clipboard: Clipboard,
  "bar-chart": BarChart3,
  "file-text": FileText,
  "message-circle": MessageCircle,
  "help-circle": HelpCircle,
  settings: Settings,
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-48 sm:w-56 lg:w-64 bg-white border-r border-gray-100 flex flex-col transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
        style={{ height: "calc(100vh - 48px)" }}
      >
        {/* Mobile close button */}
        <div className="lg:hidden flex justify-end p-2 sm:p-3 lg:p-4">
          <button onClick={onClose} className="p-1 sm:p-2 text-gray-600 hover:text-gray-800">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="p-2 sm:p-3 lg:p-4 xl:p-6 flex-1 overflow-y-auto">
          <h3 className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 sm:mb-4 lg:mb-6">
            General
          </h3>

          <nav className="space-y-0.5 sm:space-y-1">
            {navigationItems.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1.5 sm:py-2 lg:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    item.active ? "bg-cyan-50 text-cyan-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={onClose}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="truncate">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>

        <div className="p-2 sm:p-3 lg:p-4 xl:p-6 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-2 sm:p-3 lg:p-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 lg:mb-3">Tools</h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Chat</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
              >
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
