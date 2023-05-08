export const ERROR = {
  NOT_FOUND: {
    status: '404',
    message: 'Sorry, the page you are looking for does not exist.'
  },
  SERVER: {
    status: '',
    message: 'Sorry, an error has occurred loading the best music podcasts.'
  },
  DEFAULT: {
    status: '',
    message: 'Sorry, an error has occurred.'
  },
  CLIENT: {
    status: '',
    message: 'Sorry, an error has occurred loading the podcast data.'
  }
}
// if production use production url
export const URL = process.env.NODE_ENV === 'production' ? 'https://podify-iota.vercel.app/' : 'http://localhost:5173/'

export const SWRConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}
