import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UserNameInfo({ time }) {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')
  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json(res))
  //     .then((data) => setName(data.weight))
  // }, [])
  useEffect(() => {
    if (uid) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json(res))
        .then((data) => setName(data.name))
    }
  }, [uid])

  return (
    <>
      <div className="title">
        username {username} info {info}
      </div>
      <div className="title">name: {name}</div>
    </>
  )
}

UserNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
