import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Movement from '../components/sections/Movement';
import Cta from '../components/sections/Cta';
import Faqs from '../components/sections/Faqs';
import Download from '../components/sections/Download';
import VCs from '../components/sections/VCs';
import { CONTENT_MAP } from '../config/contentConfig';

const content = CONTENT_MAP['NG'];

export default function NigeriaPage() {
  return (
    <Layout content={content}>
      <Hero hero={content.hero} />
      <Services foodCities={content.foodCities} />
      <Movement join={content.join} />
      <Cta />
      <Faqs faqs={content.faqs} />
      <VCs />
      <Download
        downloadHeadline={content.downloadHeadline}
        downloadSubheadline={content.downloadSubheadline}
        downloadCtaVariant={content.downloadCtaVariant}
        mockupImage={content.hero.handMockupImage}
      />
    </Layout>
  );
}
