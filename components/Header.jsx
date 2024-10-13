import React, { useState, useEffect } from 'react'
import { Search, Menu, X } from "lucide-react"
import Button from './ui/button.jsx'
import Input from './ui/input.jsx'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState(false)

  useEffect(() => {
    // Show the desktop menu with fly-in animation when the component mounts
    setTimeout(() => {
      setIsDesktopMenuVisible(true)
    }, 300)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center md:w-1/4">
          <Button className="mr-2 md:hidden bg-gray-200" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <a href="#" className="flex items-center">
            <span className="font-bold text-lg md:text-xl">StreamHub</span>
          </a>
        </div>

        {/* Desktop Menu with fly-in animation */}
        <nav className={`hidden md:flex items-center justify-center space-x-6 text-sm md:text-lg font-medium md:w-1/2 transition-transform duration-700 ease-in-out transform ${isDesktopMenuVisible ? 'translate-y-0' : '-translate-y-20'}`}>
          <a className="text-gray-900 hover:text-gray-600 transform hover:-translate-y-1 transition-all duration-300" href="#">Home</a>
          <a className="text-gray-600 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300" href="#">Discover</a>
          <a className="text-gray-600 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300" href="#">Categories</a>
          <a className="text-gray-600 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300" href="#">Live</a>
        </nav>

        <div className="flex justify-end md:w-1/4">
          <form onSubmit={handleSearchSubmit} className="w-full max-w-xs">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search streams..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu with fly-in from left */}
      {isMobileMenuOpen && (
        <div className={`md:hidden transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="flex flex-col space-y-4 p-4 bg-white border-t">
            <a className="text-gray-900 hover:text-gray-600" href="#">Home</a>
            <a className="text-gray-600 hover:text-gray-900" href="#">Discover</a>
            <a className="text-gray-600 hover:text-gray-900" href="#">Categories</a>
            <a className="text-gray-600 hover:text-gray-900" href="#">Live</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
