import React, { useState } from 'react';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import { Modal } from './components/Modal';

const MainContainer = styled.div`
  margin: 0 300px;
`;

function App() {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <MainContainer>
      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          data={modalData}
          />
      )}
      <SearchBar search={search} setSearch={setSearch}/>
      <CandidateTable setModalOpen={setModalOpen} setModalData={setModalData}/>
    </MainContainer>
  );
}

export default App;
