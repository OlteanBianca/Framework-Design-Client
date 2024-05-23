import React, { useState } from 'react';
import AddClient from './AddClient.js';
import ClientList from './ClientList.js';
import UpdateClient from './UpdateClient.js';
import DeleteClient from './DeleteClient.js';

const ClientManagement = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [deletedClientId, setDeletedClientId] = useState(null);

  const handleEdit = (client) => {
    setSelectedClient(client);
  };

  const handleDelete = (clientId) => {
    setDeletedClientId(clientId);
    setSelectedClient(null);
  };

  const handleUpdateCompleted = () => {
    setSelectedClient(null)
  }

  const handleDeleteCompleted = () => {
    setDeletedClientId(null)
  }

  return (
    <div>
      <h1>Client Management</h1>
      <AddClient />
      <ClientList onEdit={handleEdit} onDelete={handleDelete} />
      {selectedClient && (
        <UpdateClient client={selectedClient} key={selectedClient.id} onCompleted={handleUpdateCompleted} />
      )}
      {deletedClientId && (
        <DeleteClient clientId={deletedClientId} onCompleted={handleDeleteCompleted} />
      )}
    </div>
  );
};

export default ClientManagement;
