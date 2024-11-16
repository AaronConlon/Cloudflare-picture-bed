import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/api/json').then(res => {
      if (res.ok) {
        setData(res.json())
      } else {
        setData({ error: 'Failed to fetch data' })
      }

    })
  }, [])

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <pre>
        {
          JSON.stringify(data, null, 2)
        }
      </pre>
    </div>
  )
}