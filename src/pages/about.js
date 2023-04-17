import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>I am learning Gatsby!</p>
      <Link to="/">Home Page</Link>
    </main>
  );
};

export const Head = () => <title>About Me</title>;
export default AboutPage;
