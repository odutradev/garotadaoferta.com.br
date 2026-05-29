import Header from './subcomponents/header'
import Benefits from './subcomponents/benefits'
import Testimonials from './subcomponents/testimonials'
import Footer from './subcomponents/footer'
import Hero from './subcomponents/hero'

import { PageWrapper } from './styles'

const Main = () => (
  <PageWrapper>
    <Header />
    <main>
      <Hero />
      <Benefits />
      <Testimonials />
    </main>
    <Footer />
  </PageWrapper>
)

export default Main
