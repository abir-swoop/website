import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import HowToOrder from '../components/sections/HowToOrder';
import Partners from '../components/sections/Partners';
import Movement from '../components/sections/Movement';
import Cta from '../components/sections/Cta';
import Faqs from '../components/sections/Faqs';
import Download from '../components/sections/Download';
import VCs from '../components/sections/VCs';
import { CONTENT_MAP } from '../config/contentConfig';

const content = CONTENT_MAP['SZ'];

export default function EswatiniPage() {
  return (
    <Layout content={content}>
      <Hero hero={content.hero} locale="SZ" />
      <Services foodCities={content.foodCities} />
      <HowToOrder content={content.howToOrder} locale="SZ" />
      <Partners />
      <Movement join={content.join} />
      <Cta />
      <Faqs faqs={content.faqs} />
      <VCs />
      <Download
        downloadHeadline={content.downloadHeadline}
        downloadSubheadline={content.downloadSubheadline}
        downloadCtaVariant={content.downloadCtaVariant}
        appStoreUrl={content.appStoreUrl}
        playStoreUrl={content.playStoreUrl}
        mockupImage={content.hero.handMockupImage}
      />
    </Layout>
  );
}
