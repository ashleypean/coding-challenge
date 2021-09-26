import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusSign} from '../ui-kit/icons/svg/icon-plus-with-circle.svg'


const statusColorRef = {
  4: 'green',  // hired
  0: 'orange', // draft
  3: 'green',
  1: 'gray', // resume review
}

const StatusIndicator = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${props => statusColorRef[props.color]};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;


const CandidateRow = ({ candidate, onClick }) => {
  const [isChecked, setIsChecked] = useState(candidate);

  const handleCheckbox = () => {
    setIsChecked(prev => !prev);
  }


  return (
    <tr className="candidate-row">
      <td>
        <input type="checkbox" checked={isChecked} onClick={handleCheckbox} />
      </td>
      <td>
        {candidate.name}
      </td>
      <td>
        <StatusIndicator 
          color="4" />
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
    </tr>
  )
}

export default CandidateRow;
