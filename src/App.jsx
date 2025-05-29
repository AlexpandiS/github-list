import React from 'react';
import Header from './components/Header';
import RepoList from './components/RepoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <RepoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;