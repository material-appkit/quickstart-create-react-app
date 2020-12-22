import { include } from '@material-appkit/core/util/path';

const paths = {
  index: '',

  dashboard: '/dashboard',

  auth: include('/auth', {
    index: '',
    login: '/sign-in',
    forgotPassword: 'forgot-password',
    passwordResetMailSent: 'forgot-password/mail-sent',
  }),

  forex: include('/forex', {
    index: '',
    currency: '/:currency',
  }),
};

export default paths;
