import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const getServerSideProps = async () => {
  console.log('console')
  return {
    props: {},
  }
}

export default function MyInfo({ time }) {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query
  return (
    <>
      <div className="title">My Info </div>
      <div className="title">clicked: {String(clicked)} </div>
      <div className="title">status: {status}</div>
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing')
        }}
      >
        edit
      </button>{' '}
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, { shallow: true })
        }}
      >
        edit
      </button>
    </>
  )
}
MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
