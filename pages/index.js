import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  const endpoints = [
    "GET /api/recipes/:itemname",
    "GET /api/basics",
    "GET /api/defense",
    "GET /api/mechanisms",
    "GET /api/tools"
  ]
  return (
    <div className="container">
      <Head>
        <title>the most basic minecraft api!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <p className="description">
          some *quick* endpoints written by lindsay for her netlify interview :eyes:
        </p>
        <ul>
          {endpoints.map(endpoint => <li key={endpoint}>{endpoint}</li>)}
        </ul>
      </main>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
