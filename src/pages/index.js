import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: translate({ id: 'homepage.feature.ease.title', message: 'Easy to use' }),
    description: (
      <Translate id="homepage.feature.ease.content">
        Farrow takes reference from popular backend frameworks in Node.js such as Expressjs/Koajs
        with full type optimization. Developers familiar with Expressjs/Koajs
        developers, it is easy to get started with Farrow
      </Translate>
    ),
  },
  {
    title: translate({ id: 'homepage.feature.powerful.title', message: 'Powerful feature' }),
    description: (
      <Translate id="homepage.feature.powerful.content">
        Farrow provides the advanced BFF 2.0
        It not only aggregates the data for the front-end, but also generates the type and client-side code automatically for the front-end. This greatly improves the convenience of data synchronization and type synchronization for the front-end and back-end.
      </Translate>
    ),
  },
  {
    title: translate({ id: 'homepage.feature.flexibility.title', message: 'Flexibility and autonomy' }),
    description: (
      <Translate id="homepage.feature.flexibility.content">
      Farrow offers a range of optional packages
        to be introduced on-demand, capable of handling simple requirements as well as holding up complex projects. Multiple scaffolding templates are also available for developers to choose from.
      </Translate>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              <Translate id="home.button.quick-start">
                Quick Start
              </Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
