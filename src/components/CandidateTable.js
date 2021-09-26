import React from 'react';
import styled from 'styled-components';
import CandidateRow from './CandidateRow';
import CandidateData from '../data/candidates.json'
import { ReactComponent as DownCaret } from '../ui-kit/icons/svg/down_caret.svg'

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 20px;
  width: 100%;

  th, td {
    padding: 20px;
    border-top: 1px solid gray;
    vertical-align: center;
  }

  tr {
    text-align: center;
  }
`;

const TableHeader = styled.thead`
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
  display: table-header-group;
`;

const DownCaretIcon = styled(DownCaret)`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  vertical-align: middle;
`;


const CandidateTable = () => {
  return (
    <div>
      <Table className="table table-striped table-bordered table-hover">
        <TableHeader>
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
        </TableHeader>
        <tbody>
          {CandidateData.results.map((candidate) => 
            <CandidateRow key={candidate.id} candidate={candidate} />
          )}
        </tbody>
        
      </Table>
    </div>
  );
};

export default CandidateTable;