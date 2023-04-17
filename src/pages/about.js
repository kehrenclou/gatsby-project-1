import * as React from "react";

import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I am learning Gatsby!</p>
    </Layout>
    // <main>
    //   <h1>About Me</h1>
    //   <p>I am learning Gatsby!</p>
    //   <Link to="/">Home Page</Link>
    // </main>
  );
};

export const Head = () => <title>About Me</title>;
export default AboutPage;
