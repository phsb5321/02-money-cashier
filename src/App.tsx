import React, { useState } from 'react'
import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModels';
import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal';

Modal.setAppElement("#root")

export function App() {

  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleClosenNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />
    </React.Fragment>

  );
}

