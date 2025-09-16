import React from "react";
import SalesChart from "../components/SalesChart";

function Dashboard() {
  return (
    
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">
          Retail Analytics
        </h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Sales
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Reports
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Retail Analytics Dashboard</h1>
          <p className="text-gray-500">Track sales & performance in real-time</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-sm text-gray-500">Total Sales</h3>
            <p className="text-2xl font-bold text-green-600">$42,350</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-sm text-gray-500">New Customers</h3>
            <p className="text-2xl font-bold text-blue-600">1,240</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-sm text-gray-500">Conversion Rate</h3>
            <p className="text-2xl font-bold text-purple-600">8.2%</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <SalesChart />
        </div>
      </main>
    </div>
  );
}
<button
  onClick={() => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
>
  Logout
</button>


export default Dashboard;
