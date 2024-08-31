import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function HomePage() {
  return <h1>Bem-vindo!</h1>;
}

function AboutPage() {
  return <h1>Sobre nós</h1>;
}

function RepositoryPage() {
  const { repositoryName } = useParams();

  return (
    <div>
      <h1>Repositório: {repositoryName}</h1>
      {/* ... */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/repositories/:repositoryName" element={<RepositoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;