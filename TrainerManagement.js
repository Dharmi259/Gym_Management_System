import React, { useState, useEffect } from 'react';
import './TrainerManagement.css';

function TrainerManagement() {
  const [trainers, setTrainers] = useState([]);
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Load trainers from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('trainers');
    if (stored) setTrainers(JSON.parse(stored));
  }, []);

  // Save to localStorage every time trainers update
  useEffect(() => {
    localStorage.setItem('trainers', JSON.stringify(trainers));
  }, [trainers]);

  const addTrainer = () => {
    if (!name.trim() || !speciality.trim()) return alert("All fields required");

    const newTrainer = {
      id: Date.now(),
      name,
      speciality,
    };
    setTrainers([...trainers, newTrainer]);
    setName('');
    setSpeciality('');
  };

  const deleteTrainer = (id) => {
    const updated = trainers.filter(t => t.id !== id);
    setTrainers(updated);
  };

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Trainer Management</h2>

      <div>
        <input
          type="text"
          placeholder="Trainer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <button onClick={addTrainer}>Add Trainer</button>
      </div>

      <br />

      <input
        type="text"
        placeholder="Search Trainer by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table border="1" cellPadding="10" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrainers.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.name}</td>
              <td>{trainer.speciality}</td>
              <td>
                <button onClick={() => deleteTrainer(trainer.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredTrainers.length === 0 && (
            <tr>
              <td colSpan="3">No trainers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerManagement;
