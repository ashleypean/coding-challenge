import React from 'react';
import styled from 'styled-components';
import CandidateRow from './CandidateRow';
import CandidateData from '../data/candidates.json'
import { ReactComponent as DownCaret } from '../ui-kit/icons/svg/down_caret.svg'
import { Table } from '../ui-kit/TableUtils/Table'

const DownCaretIcon = styled(DownCaret)`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  vertical-align: middle;
`;


const CandidateTable = ({ setModalOpen, setModalData, searchResults }) => {
  return (
    <div>
      <Table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>
              <input type="checkbox" disabled/>
              <DownCaretIcon />
            </th>
            <th>
              Candidate Name
              <DownCaretIcon />
            </th>
            <th>Status</th>
            <th>
              # Apps
              <DownCaretIcon />
            </th>
            <th>
              Last Action
              <DownCaretIcon />
            </th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((candidate) => 
            <CandidateRow 
              key={candidate.id} 
              candidate={candidate} 
              setModalOpen={setModalOpen} 
              setModalData={setModalData}
              />
          )}
        </tbody>
        
      </Table>
    </div>
  );
};

export default CandidateTable;