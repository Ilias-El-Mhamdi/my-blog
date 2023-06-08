import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
  hidden?: boolean;
}

const StyledButton = styled.button`
  display: ${p => (p.hidden ? 'none' : undefined)};
`;

const Button = props => {
  return <StyledButton {...props} />;
};

export default Button;
