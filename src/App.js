import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory,
    useLocation,
    useRouteMatch,
    Link
} from "react-router-dom";

import Header from "./components/Header";
import Bars from "./components/Bars";
import CatalogList from "./components/CatalogList";
import "./mystyles/app.css"
import AppPages from "./components/AppPages";
import SearchCompareProcess from "./components/SearchCompareProcess";
import Content from "./Content";

export default function App(){

    useEffect(()=>{
        window.onscroll = ()=>{
            const navbar = document.querySelector(".appContainer")
            let sticky = navbar.offsetTop
            console.log("navbar.offsetTop - ")
            console.log(sticky)
            console.log("window.pageYOffset - ")
            console.log(window.pageYOffset)
            if (window.pageYOffset >= 81){
                navbar.classList.add("app-sticky")
            } else {
                navbar.classList.remove("app-sticky")
            }
        }

    },[])
    return(
        <Router>
            <div className="app-main">
                <div className="appContainer">
                    <div className="app-infoContainer">
                        <div className="app-toHome col-3">
                            <Link to="/">
                                <img src={`images/vivon_logo_2017.png`} alt="image"/>
                            </Link>
                        </div>
                        <AppPages/>
                    </div>
                    <div className="app-goodsCatalogContainer col-3">
                        <div className="app-catalogListContainer">
                            <div className="app-catalog">
                                <div className="app-catalogListButton">
                                    <div className="app-catalogButton">
                                        <div className="app-bars">
                                            <Bars/>
                                        </div>
                                        <div className="app-catalogTitle">
                                            КАТАЛОГ ТОВАРОВ
                                        </div>
                                        <CatalogList/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-searchCompareProcessContainer col-8">
                        <SearchCompareProcess/>
                    </div>
                    <div className="app-rightEmptySide"/>
                </div>

                <div className="app-content">
                    <Content/>
                </div>
            </div>
        </Router>
    )
}
