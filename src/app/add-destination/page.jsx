"use client";
import { useState } from "react";

export default function AddDestination() {
  const [form, setForm] = useState({
    destinationName: "",
    country: "",
    category: "",
    price: "",
    duration: "",
    departureDate: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    alert("Destination Added!");

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dastinations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  console.log(data);
  };

  const inputClass = "w-full border border-gray-300 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-400";

  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-dashed border-cyan-400 rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Travel Package</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Destination Name</label>
              <input name="destinationName" value={form.destinationName} onChange={handleChange} placeholder="Bali Paradise" className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Country</label>
              <input name="country" value={form.country} onChange={handleChange} placeholder="Indonesia" className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
                <option value="">Select category</option>
                <option>Beach</option>
                <option>Mountain</option>
                <option>City</option>
                <option>Adventure</option>
                <option>Cultural</option>
                <option>Luxury</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Price (USD)</label>
              <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="1299" className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Duration</label>
              <input name="duration" value={form.duration} onChange={handleChange} placeholder="7 Days / 6 Nights" className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Departure Date</label>
              <input name="departureDate" type="date" value={form.departureDate} onChange={handleChange} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Image URL</label>
              <input name="imageUrl" type="url" value={form.imageUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the travel experience..." rows={4} className={`${inputClass} resize-none`} />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button type="button" onClick={() => setForm({ destinationName: "", country: "", category: "", price: "", duration: "", departureDate: "", imageUrl: "", description: "" })}
              className="px-5 py-2 rounded-xl border border-red-400 text-red-500 text-sm hover:bg-red-50">
              Cancel
            </button>
            <button type="submit" className="flex-1 py-2 rounded-xl bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600">
              Add Travel Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}