import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusSign} from '../ui-kit/icons/svg/icon-plus-with-circle.svg'
import { ReactComponent as RighCaret } from '../ui-kit/icons/svg/right_caret.svg'

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

const InnerTableRow = styled.tr`
  background: white;
  border-left: 4px solid gray;
`;


const CandidateRow = ({ candidate, setModalOpen, setModalData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(prev => !prev);
  }

  const handleIsExpanded = () => {
    setIsExpanded(prev => !prev);
  }

  const toggleModal = (applicationData) => {
    setModalData(applicationData);
    setModalOpen(true);
  }

  return (
    <>
      <tr className="candidate-row" onClick={handleIsExpanded}>
        <td>
          <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
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
      {isExpanded && (
        candidate.applications.map((application) => {
          return (
            <InnerTableRow 
              key={application.id} 
              onClick={() => toggleModal(application)}
              >
            {/* Empty cell*/}
              <td></td> 
            <td>
              {candidate.name}
            </td>
            <td>
              <StatusIndicator 
                color="4" />
              Hired
            </td>
            {/* Empty cell*/}
            <td colSpan="2"></td>
            <td>
              <RighCaret />
            </td>
          </InnerTableRow>
        )})
      )}
    </>
  )
}

export default CandidateRow;
