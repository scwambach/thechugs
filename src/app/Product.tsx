'use client'
import { useState, useEffect } from 'react'

export const Product = ({ id }: { id: number }) => {
  const [itemData, setItemData] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`https://api.printful.com/store/products/${id}`, {
        headers: {
          Authorization: `Bearer oOOUTq5DTfxAIRvXYR3oxvfr7TZ6e0YfHzEWWWn7`,
        },
      })
      const newItemData = await res.json()
      setItemData(newItemData)
    }
    fetchItem()
  }, [id])

  return (
    <>
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(itemData, null, '    ')}
        </pre>
      </code>
    </>
  )
}
