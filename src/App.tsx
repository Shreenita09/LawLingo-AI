import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Homepage } from './components/Homepage';
import { DocumentSimplifier } from './components/DocumentSimplifier';
import { LegalRightsFinder } from './components/LegalRightsFinder';
import { Dashboard } from './components/Dashboard';
import { ChatBot } from './components/ChatBot';
import { AzaadiAI } from './components/AzaadiAI';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onPageChange={setCurrentPage} />;
      case 'simplifier':
        return <DocumentSimplifier />;
      case 'rights':
        return <LegalRightsFinder />;
      case 'azaadi':
        return <AzaadiAI />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Homepage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderCurrentPage()}
      </Layout>
      <ChatBot />
    </div>
  );
}

export default App;