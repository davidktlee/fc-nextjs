import SyntaxHighlighter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target).then(() => {
          alert(`${target}`)
        })
      } catch (error) {
        alert(error)
      }
    }
  }
  return (
    <button onClick={handleCopy} className="absolute right-0.5 top-0.5 bg-white rounded-md p-1">
      copy
    </button>
  )
}

function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers={true} style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
