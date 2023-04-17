// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby Site">
      <p>I'm making this by following the Gatsby Tutorial!</p>
    </Layout>
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="./about">About Page</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage