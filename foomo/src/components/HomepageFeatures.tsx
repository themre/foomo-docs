/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from "@docusaurus/Link";
import React from "react";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image?: string;
  to:string;
  callToAction:string;
  description: JSX.Element;
};

const LinkButton = (props: { children: string; to: string }) => (
  <Link className="button button--secondary" to={props.to}>
    {props.children}
  </Link>
);

const FeatureList: FeatureItem[] = [
  {
    title: "Architecture",
    // image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Show me the big picture - how does foomo integrate into the k8s and Next.js eco system
      </>
    ),
    callToAction: "explore the diagrams",
    to: "/architecture",
  },
  {
    title: "Frontend",
    // image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Build frontends with TypeScript, Next.js, styled components, gotsrpc
      </>
    ),
    callToAction: "go build a frontend",
    to: "/docs/frontend/intro",
  },
  {
    title: "Backend",
    // image: '/img/undraw_docusaurus_react.svg',
    description: <>Write fast and reliable services in Go and run them in the cloud</>,
    callToAction: "build a server",
    to: "/docs/backend/intro",
  },
  {
    title: "Awesome Software",
    // image: '/img/undraw_docusaurus_react.svg',
    description: <>a curated list of software we use in the cloud, on our desktops and our devices</>,
    callToAction: "show me the list",
    to: "/awesome-software",
  },
  {
    title: "DevOps",
    // image: '/img/undraw_docusaurus_react.svg',
    description: <>our approach to run cloud native applications where they belong</>,
    callToAction: "take me to the cloud",
    to: "/docs/devops/intro",
  },
  {
    title: "Blog",
    // image: '/img/undraw_docusaurus_react.svg',
    description: <>random information about programming, our ecosystem and misc fun topics</>,
    callToAction: "read the blog",
    to: "/blog",
  },
];

function Feature({ title, image, description, to, callToAction }: FeatureItem) {
  return (
    <div className={"col col--4 "}>
      <div className={styles.feature}>
        <div className="text--center">
          {image && <img className={styles.featureSvg} alt={title} src={image} />}
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="text--center">
          <LinkButton to={to}>{callToAction}</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
