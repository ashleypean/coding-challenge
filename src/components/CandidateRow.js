import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusSign} from '../ui-kit/icons/svg/icon-plus-with-circle.svg'

const Row = styled.tr`
  border: 1px solid #e0e0e0;
  text-align: center;
  border-top: 1px solid black;
  padding: 0 20px;
`;

const StatusIndicator = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
`;


const CandidateRow = ({ candidate, onClick }) => {
  const [isChecked, setIsChecked] = useState(candidate);

  const handleCheckbox = () => {
    setIsChecked(prev => !prev);
  }

  const statusColorRef = {
    4: 'green',  // hired
    0: 'orange', // draft
    3: 'green',
    1: 'gray', // resume review
  }


  return (
    <Row className="candidate-row">
      <td>
        <input type="checkbox" checked={isChecked} onClick={handleCheckbox} />
      </td>
      <td>
        {candidate.name}
      </td>
      <td>
        <StatusIndicator 
          color={statusColorRef[candidate.status]} />
         Hired
      </td>
      <td>
        {candidate.applications.length}
      </td>
      <td>
        {candidate.updated ? candidate.updated : 'N/A'}
      </td>
      <td>
        <PlusSign />
      </td>
    </Row>
  )
}

export default CandidateRow;
