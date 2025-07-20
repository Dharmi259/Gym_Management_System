import React, { useState, useEffect } from 'react';

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({ member: '', amount: '', date: '', status: 'Paid' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('payments'));
    if (data) setPayments(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...payments];
      updated[editingIndex] = formData;
      setPayments(updated);
      setEditingIndex(null);
    } else {
      setPayments([...payments, formData]);
    }
    setFormData({ member: '', amount: '', date: '', status: 'Paid' });
  };

  const handleEdit = index => {
    setFormData(payments[index]);
    setEditingIndex(index);
  };

  const handleDelete = index => {
    const updated = payments.filter((_, i) => i !== index);
    setPayments(updated);
  };

  const filteredPayments = payments.filter(p =>
    p.member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">💳 Payment Tracking</h2>

      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input type="text" name="member" value={formData.member} onChange={handleChange} placeholder="Member Name" required className="border px-2 py-1" />
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required className="border px-2 py-1" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="border px-2 py-1" />
        <select name="status" value={formData.status} onChange={handleChange} className="border px-2 py-1">
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded">
          {editingIndex !== null ? 'Update' : 'Add'} Payment
        </button>
      </form>

      <input
        type="text"
        placeholder="Search by Member Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4 border px-2 py-1"
      />

      <table className="w-full border text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Member</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((p, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{p.member}</td>
              <td className="border px-4 py-2">{p.amount}</td>
              <td className="border px-4 py-2">{p.date}</td>
              <td className="border px-4 py-2">{p.status}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(index)} className="mr-2 text-blue-500">Edit</button>
                <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentPage;
