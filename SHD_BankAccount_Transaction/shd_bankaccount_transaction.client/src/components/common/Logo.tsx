// import { Typography } from '@mui/material';
import Image from '../../components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      <Image src="/src/assets/sh-digital-logo.svg" alt="Logo" sx={{ width: 120 }} />
      {/* <Typography variant="h4">SH Digital</Typography> */}
    </Fragment>
  );
};

export default Logo;
