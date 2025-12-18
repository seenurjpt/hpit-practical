import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SpotLight from '../components/SpotLight'
import OurServices from '../components/OurServices'
import Partnership from '../components/Partnership'
import JoinOurTeam from '../components/JoinOurTeam'
import LatestInsights from '../components/LatestInsights'
import FeaturedNewsletter from '../components/FeaturedNewsletter'
import LetsMakeGreat from '../components/LetsMakeGreat'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SpotLight />
      <OurServices />
      <Partnership />
      <JoinOurTeam />
      <LatestInsights />
      <FeaturedNewsletter />
      <LetsMakeGreat />
      <Footer />
    </div>
  )
}

export default LandingPage