import Navbar from "../components/navbar"
import Drops from "../components/drops"
import Hot from "../components/hot"
import Markettabs from "../components/marketplaceTab"
import Hero from "../components/heroheader"

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Drops></Drops>
    <Hot></Hot>
    <Markettabs></Markettabs>
    </>
  )
}
