import { include } from '@material-appkit/core/util/path';

const paths = {
  index: '/',

  auth: include('/auth', {
    index: '',
    login: '/sign-in',
    forgotPassword: '/forgot-password',
  }),
};

export default paths;
