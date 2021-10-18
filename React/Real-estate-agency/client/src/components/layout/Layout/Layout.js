import Header from "../Header/Header";

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
        </>
    )
}

export default Layout;