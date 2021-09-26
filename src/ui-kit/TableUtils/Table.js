import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 20px;
  width: 100%;

  thead {
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px;
    display: table-header-group;
  }

  th, td {
    padding: 20px;
    border-top: 1px solid gray;
    vertical-align: center;
  }

  tr {
    text-align: center;
    empty-cells: show;
  }
`;