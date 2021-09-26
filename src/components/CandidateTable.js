import React from 'react';
import styled from 'styled-components';
import CandidateRow from './CandidateRow';
import CandidateData from '../data/candidates.json'
import { ReactComponent as DownCaret } from '../ui-kit/icons/svg/down_caret.svg'

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 20px;

  th, td {
    padding: 20px;
  }
`;

const TableHeader = styled.thead`
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
  margin: 0;
  padding: 0;
  display: table-header-group;
`;

const TableBody = styled.tbody`
  width: 100%;
  border: 1px solid purple;
`;


const CandidateTable = () => {
  return (
    <div>
      <Table className="table table-striped table-bordered table-hover">
        <TableHeader>
          <tr>
            <th>
              <input type="checkbox" disabled/>
              <DownCaret style={{height: 15, width: 15}}/>
            </th>
            <th>Candidate Name</th>
            <th>Status</th>
            <th># Apps</th>
            <th>Last Action</th>
            <th>Add</th>
          </tr>
        </TableHeader>
        <TableBody>
          {CandidateData.results.map((candidate, index) => 
            <CandidateRow key={index} candidate={candidate} />
          )}
        </TableBody>
        
      </Table>
    </div>
  );
};

export default CandidateTable;