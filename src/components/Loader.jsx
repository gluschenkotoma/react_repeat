import { TailSpin } from 'react-loader-spinner';

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Loader = ({ size = 'md' }) => {
  return (
    <TailSpin
      height={sizes[size]}
      width={sizes[size]}
      color="black"
      ariaLabel="loading"
    />
  );
};
