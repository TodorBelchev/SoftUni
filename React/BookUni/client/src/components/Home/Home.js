import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section id="viewCatalog" className="background-img">
            <div className="added-hotels">
                <NavLink to="" className="added-hotel">
                    <img src="https://image.freepik.com/free-vector/flat-hotel-building_23-2148162501.jpg" alt=""
                        className="picture-added-hotel" />
                    <h3>Hilton Toronto</h3>
                    <span>Free rooms: 42</span>
                </NavLink>
            </div>
            {/* <div className="guest">
                There are no Hotels found...
            </div> */}
        </section>
    )
};

export default Home;