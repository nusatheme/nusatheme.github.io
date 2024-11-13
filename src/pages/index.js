import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import ThemeList from '@site/src/components/ThemeList';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title} Documentation`}
      description="Documentation page for all NusaTheme Template">
      <HomepageHeader />
      <main>
        <ThemeList />
      </main>
    </Layout>
  );
}
