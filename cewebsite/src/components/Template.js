import Navbar from "./Navbar"
import Footer from "./footer"

function Template (props){
    return(
        <>
            <div class="wrapper">
                <Navbar/>
                <Footer/>
                <div class="content-wrapper pt-3">
                    <section class="content">
                        {props.children}
                    </section>
                </div>
            </div>
        </>
    )
}
export default Template;