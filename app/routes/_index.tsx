import React, { useState } from 'react';
import { Button, Container, Modal } from '@mantine/core';
import BringFromModal from '../components/bringform';

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container size="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Button onClick={handleModalToggle}>Add New Task</Button>
        <Modal opened={modalOpen} onClose={handleModalToggle}>
          <BringFromModal closeModal={handleModalToggle} />
        </Modal>
      </div>
    </Container>
  );
}