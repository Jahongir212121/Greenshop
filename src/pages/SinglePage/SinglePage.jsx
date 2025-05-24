import Description from "../../components/Description/Description"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Related from "../../components/Related/Related"
import SinglePlant from "../../components/SinglePlant/SinglePlant"
import '../../App.css'
function SinglePage() {
    return <>
        <div className="container">
            <Header />
            <SinglePlant />
            <Description />
            <Related />
            <Footer />
        </div>
    </>
}

export default SinglePage