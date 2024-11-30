import React, { useState } from "react";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-red-300 dark:bg-gray-800">
        {/* Header */}
        <header className="bg-brand text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Tailwind CSS Demo</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-brand-light">
              Home
            </a>
            <a href="#about" className="hover:text-brand-light">
              About
            </a>
            <a href="#contact" className="hover:text-brand-light">
              Contact
            </a>
          </nav>
          <button className="md:hidden px-4 py-2 bg-brand-light text-brand-dark rounded">
            Menu
          </button>
        </header>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="bg-red-200 p-4 w-full md:w-1/4">
            <h2 className="text-lg font-semibold">Sidebar</h2>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-brand-dark">Dashboard</li>
              <li className="hover:text-brand-dark">Settings</li>
              <li className="hover:text-brand-dark">Profile</li>
            </ul>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-4">
            {/* Form Section */}
            <section id="form" className="bg-white shadow p-6 rounded mb-6">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand"
                    placeholder="Your email"
                  />
                </div>
                <button className="bg-brand text-black px-4 py-2 rounded hover:bg-brand-dark">
                  Submit
                </button>
              </form>
            </section>

            {/* Flexbox Section */}
            <section id="flexbox" className="bg-blue-50 shadow p-6 rounded">
              <h2 className="text-xl font-bold mb-4">Two-Column Layout</h2>
              <div className="flex">
                <div className="flex-1 bg-brand-light text-brand-dark p-4 mr-2">
                  Column 1
                </div>
                <div className="flex-2 bg-brand text-white p-4">Column 2</div>
              </div>
            </section>

            {/* Typography Section */}
            <section
              id="blog"
              className="prose dark:prose-invert mx-auto my-8"
            >
              <h2>Blog Post</h2>
              <p>
                This is an example of a blog post styled with the Tailwind CSS
                Typography plugin. It provides pre-designed typographic styles
                for content.
              </p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </section>

            {/* Card Components */}
            <section id="cards" className="grid gap-4 grid-cols-1 md:grid-cols-3 my-6">
              <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition">
                <h3 className="font-bold text-lg">Card 1</h3>
                <p>Some description here.</p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition">
                <h3 className="font-bold text-lg">Card 2</h3>
                <p>Some description here.</p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition">
                <h3 className="font-bold text-lg">Card 3</h3>
                <p>Some description here.</p>
              </div>
            </section>

            {/* Modal Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Open Modal
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-lg w-1/3">
                  <h2 className="text-xl font-bold">Modal Title</h2>
                  <p>This is a modal component built with Tailwind CSS.</p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!isDarkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mt-4"
            >
                
              Toggle {isDarkMode ? "Light" : "Dark"} Mode
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
