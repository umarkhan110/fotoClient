import Faqs from '../components/Faqs'
import Shooting from '../components/Shooting'
import Events from '../components/Events'

import { observer } from 'mobx-react'
import { EventStore } from '../store/event'
import translate from '../contexts/i18nProvider/translate'
import Loader from '../components/Loader'
import ShootLimit from '../components/ShootLimit'
import BookingConfirmed from '../components/BookingConfirmed'
import SEO from '../components/SEO'

export const getStaticProps = async () => {
  return { props: {}, revalidate: 3600 } // revalidate every hour
}

const Home = () => {
  const {
    state: { event, loading, error, confirmedEvent },
  } = EventStore

  return (
    <>
      <SEO
        title="Professional Baby and Family Photography Services | Capturing Life's Precious Moments"
        keywords="Baby photography, newborn photography,What clothes should I wear?,Why do you work without the usual shooting or admission fee?,When & how do I get the pictures?,Who is allowed to be in the picture?, maternity photography, family photography, children photography, photos, professional, studio, packages, session, ideas, props, poses, dresses, outfits, near me, prices, locations, tips, gallery"
        description="At our photography studio, we specialize in capturing the beauty and essence of life's most precious moments. From newborn and maternity shoots to family portraits, we use our expertise and artistic vision to create stunning images that you'll treasure for a lifetime. Our professional and affordable photography services use natural light and creative techniques to create high-quality photos that showcase your unique family story. Book your session today and let us help you capture memories that will last a lifetime!"
        url="https://next.foto-dino.de"
      />
      <main>
        {loading && <Loader />}
        <div className="relative">
          <video
            className="w-full h-full object-cover"
            loop={true}
            preload="auto"
            autoPlay
            playsInline
            muted
          >
            <source
              src="https://assets.foto-dino.de/videos/header_compressed_to_1.7.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <Events />
        <div className="sm:hidden font-oswald block text-center md:text-lg text-md font-bold w-full py-6 xs:px-16 px-6">
          <p className="text-blue xs:text-3xl text-2xl">
            {translate('then_buy')}
          </p>
          <p className="text-gray xs:text-lg text-sm my-2">
            {translate('note1')}
          </p>
          <p className="text-yellow xs:text-3xl text-2xl">
            {translate('note2')}
          </p>
          <p className="text-gray xs:text-lg text-sm my-2">
            {translate('note3')}
          </p>
          <p className="xs:text-xl text-md my-2">{translate('note4')}</p>
          <p className="text-pink xs:text-3xl text-2xl">ohne Shootinggebühr!</p>
        </div>

        <Shooting />
        <Faqs />

        {error.shootLimit && <ShootLimit />}
        {confirmedEvent && <BookingConfirmed confirmedEvent={confirmedEvent} />}
      </main>
    </>
  )
}

export default observer(Home)
