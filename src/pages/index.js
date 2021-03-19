import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "易于使用",
    description: (
      <>
        Farrow 参考了 Node.js 里流行的后端框架如 Expressjs/Koajs
        的中间件设计，并做了充分的类型优化。 熟悉 Expressjs/Koajs
        的开发者，很容易上手 Farrow
      </>
    ),
  },
  {
    title: "功能强大",
    description: (
      <>
        Farrow 提供了超前的 BFF 2.0
        功能，不仅为前端聚合好了数据，连带类型和客户端代码都能为前端自动生成。极大地提高了前后端数据同步和类型同步的便利。
      </>
    ),
  },
  {
    title: "灵活自主",
    description: (
      <>
        Farrow 提供了一系列可选的 packages
        以按需引入，既能胜任简单需求，也能撑起复杂项目。并提供多个脚手架模板，供开发者自由选择。
      </>
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
              快速开始
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
