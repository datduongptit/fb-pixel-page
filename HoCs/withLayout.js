import { NextSeo } from 'next-seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const withLayout = () => (Component) => {
  const FuncComponent = ({ children, ...props }) => {
    return (
      <>
        {/* <NextSeo
          {...seo}
          noindex={false}
          additionalMetaTags={defaultKeyword}
          additionalLinkTags={defaultLinkTags}
        /> */}
        <Navigation />
        <Component {...props}>{children}</Component>
        <Footer />
      </>
    );
  };

  return FuncComponent;
};
