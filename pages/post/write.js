import Link from 'next/link'
import { useRef, useState } from 'react'
import Layout from '../../components/layout'

export default function Write() {
  const idRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const [showLink, setShowLink] = useState(false)

  const submitText = (e) => {
    e.preventDefault()
    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          alert(data.message)
          setShowLink(true)
        })
        .catch((err) => alert(`${err}`))
    }
  }

  return (
    <Layout>
      <form onSubmit={submitText}>
        <input type="text" placeholder="id" name="id" ref={idRef} />
        <br />
        <input type="text" placeholder="title" name="title" ref={titleRef} />
        <br />
        <textarea
          name="text-area"
          id="text-area"
          name="content"
          cols="30"
          rows="10"
          ref={contentRef}
        />
        <button>저장</button>
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>
          <a>Created Post</a>
        </Link>
      )}
    </Layout>
  )
}
