import Navbar from "./Navbar"
import Footer from "./footer"

function Template (props){
    return(
        <>
            <div className="wrapper">
                <Navbar/>
                
                <div className="content-wrapper pt-3">
                    <section className="content">
                        {props.children}
                    </section>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Template;