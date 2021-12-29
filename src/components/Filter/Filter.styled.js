import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
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
`;

export const Option = styled.label`
  cursor: pointer;
`;
