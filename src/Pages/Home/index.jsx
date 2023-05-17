import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

export const Home = () => {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    const itemsToRender = context.SearchByTitle?.length > 0
      ? context.FilteredItems
      : context.Items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">
          Exclusive Products
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { renderView() }
      </section>
      <ProductDetail/>
    </Layout>
  )
}
