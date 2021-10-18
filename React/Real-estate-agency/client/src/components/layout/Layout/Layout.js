import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout;