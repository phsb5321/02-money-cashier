import React, { useState } from 'react'

import { DashBoard } from './components/DashBoard';
import { GlobalStyle } from "./styles/global"
import { Header } from './components/Header';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />
    </TransactionsProvider>

  );
}

