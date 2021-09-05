import React from "react";
import {Link} from "react-router-dom";

import "../mystyles/searchcompareprocess.css"

const SearchCompareProcess = ()=>{
    return(
        <div className="scp-container">
            <div className="scp-searchbarContainer">
                <div className="scp-searchbar">
                    <input type="text" placeholder="быстрый поиск товаров"/>
                    <input type="button" value="найти!"/>
                </div>
            </div>
            <div className="scp-someInfo">
                <div className="scp-comparing">
                    <Link to="/comparison">
                        <i className="fas fa-poll"/>
                        сравнение
                        <span>5</span>
                    </Link>
                </div>
                <div className="scp-processing">
                    <Link to="/order">
                        <i className="fas fa-shopping-cart"/>
                        оформить заказ
                        <span>5</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchCompareProcess