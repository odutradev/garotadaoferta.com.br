import Main from '@views/main'

const routes = [
  {
    path: '/',
    routes: [
      ['/*', <Main key="main" />],
    ],
  },
]

export default routes