import { useEffect, useState } from 'react';

export default function PricingCalculator() {
  const [hydrated, setHydrated] = useState(false);
  const [users, setUsers] = useState(10);
  const pricePerUser = 5;
  const total = users * pricePerUser;

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg text-white relative">
      {/* <span className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Dynamic Island</span> */}
      {/* {hydrated && <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold animate-bounce">Hydrated!</span>} */}
      <h3 className="text-lg font-semibold mb-4">Pricing Calculator</h3>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block mb-2 text-sm opacity-90">Number of users: <span className="font-bold">{users}</span></span>
          <input
            type="range"
            min="1"
            max="10"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full h-2 bg-white bg-opacity-20 rounded-lg appearance-none cursor-pointer slider"
          />
        </label>
      </div>
      <div className="text-center">
        <p className="text-sm opacity-90 mb-1">Total cost:</p>
        <p className="text-3xl font-bold">${total}</p>
        <p className="text-xs opacity-75 mt-1">${pricePerUser} per user</p>
      </div>
    </div>
  );
}