// src/pages/TrainerPage.jsx
import React, { useState } from "react";
import './TrainerPage.css';


const TrainerPage = () => {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Ravi Singh", specialization: "Weight Training" },
    { id: 2, name: "Anjali Patel", specialization: "Yoga & Flexibility" },
  ]);

  const [newTrainer, setNewTrainer] = useState({ name: "", specialization: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAddTrainer = () => {
    if (newTrainer.name && newTrainer.specialization) {
      setTrainers([
        ...trainers,
        { id: Date.now(), ...newTrainer },
      ]);
      setNewTrainer({ name: "", specialization: "" });
    }
  };

  const handleDelete = (id) => {
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  const handleEdit = (trainer) => {
    setNewTrainer({ name: trainer.name, specialization: trainer.specialization });
    setEditingId(trainer.id);
  };

  const handleUpdate = () => {
    setTrainers(trainers.map(t => (
      t.id === editingId ? { ...t, ...newTrainer } : t
    )));
    setEditingId(null);
    setNewTrainer({ name: "", specialization: "" });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Trainer Management</h1>

      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Trainer Name"
          className="border p-2 rounded w-full"
          value={newTrainer.name}
          onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specialization"
          className="border p-2 rounded w-full"
          value={newTrainer.specialization}
          onChange={(e) => setNewTrainer({ ...newTrainer, specialization: e.target.value })}
        />
        {editingId ? (
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Update Trainer
          </button>
        ) : (
          <button
            onClick={handleAddTrainer}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Trainer
          </button>
        )}
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Specialization</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer.id}>
              <td className="py-2 px-4 border">{trainer.name}</td>
              <td className="py-2 px-4 border">{trainer.specialization}</td>
              <td className="py-2 px-4 border space-x-2">
                <button
                  className="bg-yellow-400 px-3 py-1 rounded text-white"
                  onClick={() => handleEdit(trainer)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-3 py-1 rounded text-white"
                  onClick={() => handleDelete(trainer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerPage;
