import Head from 'next/head'
import Link from 'next/link'

export const getServerSideProps = async () => {
  console.log('console.')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

export default function Home({ time }) {
  return (
    <>
      <main>
        <h1 className="title">{time}</h1>
        <Link href="/ssg">ssg</Link>
        <Link href="/isr">isr</Link>
      </main>
    </>
  )
}
