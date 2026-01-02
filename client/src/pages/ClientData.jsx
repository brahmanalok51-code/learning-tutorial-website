import React, { useState } from "react";

function ClientData() {
  const [form, setForm] = useState({ name: "", details: "", date: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4004/postMyData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Data submitted successfully!");
        setForm({ name: "", details: "", date: "" });
      } else {
        setMessage("Failed to submit data!");
      }

    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center"> Dashboard</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

   
          <div>
            <label className="block mb-1 font-medium">Details</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              rows="4"
              placeholder="Enter details here"
              required
            ></textarea>
          </div>

 
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>

   
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

  
        {message && (
          <p className="text-center mt-4 font-medium text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ClientData;
