import styled from 'styled-components';

export const LoadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(40)};
  height: ${p => p.theme.spacing(10)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  border: none;
  border-radius: ${p => p.theme.radii.md};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.lightblue};
    color: ${p => p.theme.colors.blue};
    font-weight: 700;
    box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  }
`;
