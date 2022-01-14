export const Button = ({ label, onClick, type = 'button', cize = 'm' }) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};
