import { useState } from 'react';
import { Button, Container, Modal, Text} from '@mantine/core';
import BringFromModal from '../components/bringform';

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  const handleModalToggle = () => {
    if (!modalOpen) {
      setModalOpen(true);
      setConfirmClose(false);
    }
  };
  const handleModalClose = () => {
    if (!confirmClose) {
      setConfirmClose(true);
    }
  };
  const handleConfirmModalClose = () => {
    setModalOpen(false);
    setConfirmClose(false);
  };

  return (
    <Container size="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Button onClick={handleModalToggle} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Add New Task</Button>
        <Modal opened={modalOpen} onClose={handleModalClose}>
          {confirmClose ? (
    <div style={{ padding: '20px' }}>
    <Text align="center" size="lg" style={{ marginBottom: '16px' }}>
      Are you sure you want to close popup?
    </Text>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={() => {
          setConfirmClose(false);
          // Ekstra işlemler veya modal kapatma işlemi
        }}
        variant="outline"
        color="gray"
        style={{ marginRight: '8px' }}
      >
        No
      </Button>
      <Button
        onClick={handleConfirmModalClose}
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        Yes
      </Button>
    </div>
  </div>
          ) : (
            <BringFromModal closeModal={handleModalToggle} setConfirmClose={setConfirmClose} />
          )}
        </Modal>
      </div>
    </Container>
  );
}