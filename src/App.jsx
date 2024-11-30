const App = () => (
  <form className="max-w-md mx-auto p-4 bg-gray-50 shadow rounded">
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Password</label>
      <input
        type="password"
        className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your password"
      />
    </div>
    <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-800">
      Submit
    </button>
  </form>
);

export default App;
