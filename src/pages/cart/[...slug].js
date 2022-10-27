import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CartDateSlug({ time }) {
  return <div className="title">First Item</div>
}
CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
