import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export const getStaticProps = async () => {
  console.log('isr')
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  }
}

export default function FirstItem({ time }) {
  return <div className="title">First Item</div>
}
FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
