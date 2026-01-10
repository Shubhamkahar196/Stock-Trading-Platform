import React from 'react'
import { Search } from 'lucide-react'
export const Hero = () => {
  return (
    <>
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Support Portal</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          My tickets
        </button>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="relative mb-12">
        <Search className="absolute left-4 top-3.5 text-gray-400" />
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          className="w-full border rounded-md pl-12 pr-4 py-3"
        />
      </div>
      </main>
</>
)
}
