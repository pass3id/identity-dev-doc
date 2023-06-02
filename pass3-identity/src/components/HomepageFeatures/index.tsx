import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  action?: FeatureAction;
};

type FeatureAction = {
  to: string;
  label: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'PASS3 Cloud Wallet',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our solution for users who want to get some taste of self-sovereign
        identity without fully committed into it. Providing an SSI solution with
        familiar experiences. Fully compliance with data privacy regulations
        like EU GDPR.
      </>
    ),
    action: {
      to: "https://wallet.pass3.id",
      label: (<>Open PASS3 Cloud Wallet</>),
    },
  },
  {
    title: 'PASS3 Wallet apps',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        For users who are ready to take over the control of their own
        digital identities. Fully in conformance with future-proof digital
        identity standards like the W3C's Decentralized Identity and
        Verifiable Credentials standards.
      </>
    ),
    action: {
      to: "#",
      label: (<>Coming soon</>)
    },
  },
  {
    title: 'PASS3 ID Connect',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Seamlessly connect your website and app with the self-sovereign
        identity world through familiar technologies like OAuth 2.0. We will
        handle all the complexity of the underlying self-sovereign
        identity technology, so you don't have to.
      </>
    ),
    action: {
      to: "/docs/pass3-id-connect/intro",
      label: (<>Start integrating</>),
    },
  },
];

function Feature({ title, Svg, description, action }: FeatureItem) {
  if (action == undefined) {
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to={action.to}>
            {action.label}
          </Link>
        </div></div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
