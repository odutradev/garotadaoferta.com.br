import Main from '@views/main'

const routes = [
  {
    path: '/',
    routes: [
      ['/*', <Main />],
    ],
  },
]

export default routes