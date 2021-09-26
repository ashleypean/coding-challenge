import React from 'react';
import styled from 'styled-components';

const Position = styled.h1`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobDetails = styled.div`
  grid-column: 2 / span 1;
  grid-row: 2 / span 2;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;

  border-collapse: collapse;
  border: 1px solid black;

  td, thead {
    text-align: center;
  }

`;


const ModalContent = ({ applicationData }) => {
  const {
    role: { title, jobboard_title }, 
    new_status: { 
      label,
      school_admin_view_access, 
      school_admin_move_access, 
      school_admin_move_district 
    }

  } = applicationData;
  return (
    <>
      <Position>
        <bold>Position:</bold>
        {title}
      </Position>
      <JobDetails>
        <p>
          <strong>Job Board Title: </strong>
          {jobboard_title}
        </p>
        <p>
          <strong>Status: </strong>
          {label}
        </p>
      </JobDetails>

      <Table>
        <thead>
          <tr>
            <th> Admin View Access</th>
            <th> Admin Move Access</th>
            <th> Admin Move District</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{String(school_admin_view_access)}</td>
            <td>{String(school_admin_move_access)}</td>
            <td>{String(school_admin_move_district)}</td>
          </tr>
        </tbody>

      </Table>
    </>
  )
}

export default ModalContent;

