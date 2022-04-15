import React from 'react';
import TopBar from "../../utils/components/Navs/topBar";
import NavBar from "../../utils/components/Navs/NavBar";
import './styles.css';


const Home =() => {



    return (
        <div>
            <div className="fixed-top" data-toggle="affix">
                <TopBar />

                <NavBar />
            </div>
            <section>
                <div className="container-fluid">
                    <p>Here is some content</p>


                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them, vegan
                        farm-to-table Williamsburg slow-carb readymade
                        disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever.
                        Helvetica cray
                        plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi
                        McSweeney's
                        Shoreditch selfies, forage fingerstache
                        food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.
                    </p>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <p>Here is some more content</p>
                </div>
            </section>
        </div>

    );
}
export default Home;