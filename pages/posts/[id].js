// import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { MDXRemote } from 'next-mdx-remote'
import CodeBlock from '../../components/CodeBlock'
import Utterances from '../../components/Utterances'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
const Button = ({ children }) => {
  return (
    <button
      className="bg-black text-white dark:bg-white dark:text-black"
      onClick={() => alert('thk to child')}
    >
      {children}
    </button>
  )
}

const components = { Button, CodeBlock }

export default function Post({ postData }) {
  return (
    <>
      <Layout>
        <div className={utilStyles.lightText}>{/* <Date dateString={postData.date} /> */}</div>
        {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} />}
      </Layout>
      <Utterances />
    </>
  )
}
