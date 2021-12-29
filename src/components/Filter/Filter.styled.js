import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 8px, 12px;
  border: none;
  cursor: pointer;
  > svg {
    display: block;
    margin-left: 12px;
  }
`;

export const Popover = styled.div`
  position: absolute;
  border: 1px solid blue;
  padding: 4px;
  background-color: #fff;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-height: 200px;
  overflow: hidden; //все что не влазит -спрятать
  overflow-y: auto; //скрол по вертикали
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap; // что бы не переносился рядок, не розрывался
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 8px;
  /* стилизация крестика в инпуте */
  > svg {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;
export const SearchInput = styled.input`
  width: 100%; //по умолчанию браузер дает свой размер, поєтому width перезаписать
  padding: 0 20px 0 0;
`;
