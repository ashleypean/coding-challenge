import React, { useState } from 'react';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import candidateData from './data/candidates.json'
import ModalContent from './components/ModalContent'

const MainContainer = styled.div`
  margin: 0 300px;
`;

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(candidateData.results);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <MainContainer>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          children={<ModalContent applicationData={modalData}/>}
          />
      )}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        candidates={candidateData.results}
        setSearchResults={setSearchResults}
        />
      <CandidateTable 
        setModalOpen={setModalOpen} 
        setModalData={setModalData}
        searchResults={searchResults}
        />
    </MainContainer>
  );
}

export default App;
