import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhySwoop from '../components/sections/WhySwoop';
import HowToOrder from '../components/sections/HowToOrder';
import Movement from '../components/sections/Movement';
import Cta from '../components/sections/Cta';
import Faqs from '../components/sections/Faqs';
import Download from '../components/sections/Download';
import VCs from '../components/sections/VCs';
import { CONTENT_MAP } from '../config/contentConfig';
import Partners from '../components/sections/Partners';
import CoverageMap from '../components/sections/CoverageMap';

const content = CONTENT_MAP['NG'];

export default function NigeriaPage() {
  return (
    <Layout content={content}>
      <Hero hero={content.hero} locale="NG" />
      <Services content={content.services} />
      <WhySwoop content={content.whySwoop} />
      <HowToOrder content={content.howToOrder} />
      <Partners locale="NG" />
      {content.coverageMap && <CoverageMap content={content.coverageMap} />}
      <Cta />
      <Movement join={content.join} />
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
