import PropTypes from 'prop-types';

export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

export const COMMON_PAGE_PROPS = {
  location: PropTypes.object,
  match: PropTypes.object,
};

export const DEFAULT_LOCALE = 'en-US';

export const FOREX_API_ENDPOINT = 'https://api.exchangeratesapi.io';

export const LOCALE_CHOICES = [
  'en-US',
];

export const LOCALE_INFO_MAP = {
  'en-US': {
    currencyFormat: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    source: require('./locales/en-US.json'),
  },
};

