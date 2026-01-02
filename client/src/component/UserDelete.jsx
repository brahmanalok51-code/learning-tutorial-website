import React from "react";

export default function UserDelete({ userId, onDelete }) {
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:4004/deleteUser/${userId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("User deleted successfully!");
        if (onDelete) onDelete(userId); 
      } else {
        alert(data.message || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}

