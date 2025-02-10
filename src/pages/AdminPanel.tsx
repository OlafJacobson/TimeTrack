import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminPanel() {
  const { profile } = useAuth();

  if (profile?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
    </div>
  );
}