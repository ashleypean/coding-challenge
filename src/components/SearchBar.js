import React from 'react';
import styled from 'styled-components';
import CandidateMeta from './CandidateMeta';
import { ReactComponent as SearchWhite } from '../ui-kit/icons/svg/search_white.svg';

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const SearchInputContaienr = styled.div`
  width: 80%;
  height: 50px;
  margin: 0 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 95%;
  height: 100%;
  border: 1px solid gray;
  border-right: none;
  border-radius: 4px;
  padding: 0 10px;
  outline: none;
  background: transparent;
`;

const SearchButton = styled.button`
  width: 5%;
  max-width: 60px;
  background-color: green;
  border: 10px solid gray;
  border: none;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 15px;
  margin-left: -10px;
`

const SearchBar = ({ search, setSearch }) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <CandidateMeta candidateCount="100"/>
      <SearchInputContaienr>
      <SearchInput type="text" placeholder="Search by candidate or keyword" value={search} onChange={handleSearch} />
      <SearchButton type="submit">
        <SearchWhite />
      </SearchButton>
    </SearchInputContaienr>
    </SearchContainer>

  )
}

export default SearchBar; 