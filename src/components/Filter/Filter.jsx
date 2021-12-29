import {
  Container,
  TriggerButton,
  Popover,
  Options,
  Option,
  SearchBox,
  SearchInput,
} from './Filter.styled';
import { FaChevronDown } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

export const Filter = ({ isOpen = false, options, searchable = false }) => {
  return (
    <Container>
      <TriggerButton type="button">
        Выбрано 0<FaChevronDown />
      </TriggerButton>
      {isOpen && (
        <Popover>
          {/* если searchable true то рендер div ... */}
          {searchable && (
            <SearchBox>
              <SearchInput type="text" name="searchbox" />
              <FiX />
            </SearchBox>
          )}
          <Options>
            {options.map(({ value, label }) => (
              <Option key={value}>
                <input type="checkbox" name="option" value={value} />
                {label}
              </Option>
            ))}
          </Options>
        </Popover>
      )}
    </Container>
  );
};

Filter.propTypes = {
  searchable: PropTypes.bool,
  isOpen: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// isOpen = false - проп , начальное состояние что бы показать открыто окно Popover или нет
// Options приходят с вне, options - prop массив обьектов [{value:s, label:'Smal'}]
//в компонентах в девтулзах проп->isOpen:true options:[{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// {... &&  ...} показать что то или не показать, в апп включатель, в компоненте то что по умолчанию
