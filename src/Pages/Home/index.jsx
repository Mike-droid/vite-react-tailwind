import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

import { apiUrl } from '../../api/'

export const Home = () => {
  const [Items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  return (
    <Layout>
      Home
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          Items?.map(item => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </section>
      <ProductDetail/>
    </Layout>
  )
}
