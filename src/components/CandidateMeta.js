import React from 'react';
import styled from 'styled-components';

const CandidateMetaContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const CandidateMeta = ({ candidateCount = 100, setFilters }) => {
  return (
    <CandidateMetaContainer>
      <p>{candidateCount} Candidates</p>
      <p onClick={() => setFilters({})}>
        Clear all Filters
      </p>
    </CandidateMetaContainer>
  )
};

export default CandidateMeta;