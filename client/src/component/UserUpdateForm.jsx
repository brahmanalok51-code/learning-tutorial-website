import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UserUpdateForm() {
  const [open, setOpen] = useState(false);
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // Handle Update Request
  const handleUpdateEmail = async () => {
    if (!oldEmail || !newEmail) {
      alert("Please fill both fields!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:4004/updateUserData/${oldEmail}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail }),
      });

      const data = await res.json();
      console.log("Updated:", data);

      alert("Email updated successfully!");
      setOpen(false);
      setOldEmail("");
      setNewEmail("");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update email!");
    }
  };

  return (
    <div className="p-6">

     
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Update Email
      </button>

     
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-white p-6 rounded-2xl shadow-xl w-80"
            >
              <h2 className="text-lg font-semibold mb-4">Update Email</h2>

             
              <input
                type="email"
                placeholder="Enter old email"
                value={oldEmail}
                onChange={(e) => setOldEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
              />

             
              <input
                type="email"
                placeholder="Enter new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="w-1/2 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdateEmail}
                  className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
