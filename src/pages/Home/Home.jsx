import Blog from "../../components/Blog/Blog"
import BodyMain from "../../components/BodyMain/BodyMain"
import Cards from "../../components/Cards/Cards"
import Carousel from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function Home() {
    return <>
        <Header />
        <Carousel />
        <BodyMain />
        <Cards />
        <Blog />
        <Footer />
    </>
}

export default Home