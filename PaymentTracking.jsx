import React, { useState, useEffect } from 'react';

const PaymentTracking = () => {
  const [payments, setPayments] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(storedPayments);
  }, []);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = { name, amount, date };

    if (editIndex !== null) {
      const updated = [...payments];
      updated[editIndex] = newPayment;
      setPayments(updated);
      setEditIndex(null);
    } else {
      setPayments([...payments, newPayment]);
    }

    setName('');
    setAmount('');
    setDate('');
  };

  const handleEdit = (index) => {
    const payment = payments[index];
    setName(payment.name);
    setAmount(payment.amount);
    setDate(payment.date);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = payments.filter((_, i) => i !== index);
    setPayments(updated);
  };

  const filteredPayments = payments.filter((payment) =>
    payment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>💳 Payment Tracking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount Paid"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add Payment'}</button>
      </form>

      <input
        type="text"
        placeholder="Search by Member Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginTop: '1rem' }}
      />

      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.name}</td>
              <td>₹{payment.amount}</td>
              <td>{payment.date}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTracking;
