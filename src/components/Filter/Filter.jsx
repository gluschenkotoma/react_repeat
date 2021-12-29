import {
  Container,
  TriggerButton,
  Popover,
  Options,
  Option,
} from './Filter.styled';
import { FaChevronDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Filter = ({ isOpen = false, options }) => {
  return (
    <Container>
      <TriggerButton type="button">
        Выбрано 0<FaChevronDown />
      </TriggerButton>
      {isOpen && (
        <Popover>
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
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
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
