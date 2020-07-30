import React, { FunctionComponent } from 'react';
import { Input } from 'antd';

type InputProps = {
  query: string,
  onInput : (query:string) => void;
}

const { Search } = Input;

const SearchInput: FunctionComponent<InputProps> = (props) => (
  <Search
    placeholder="Rechercher..."
    style={{ width: 300 }}
    value={props.query}
    onChange={event => props.onInput(event.target.value)}
  />
);
  
export default SearchInput;