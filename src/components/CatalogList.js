import "../mystyles/cataloglist.css"

import catalogs from "../data/catalogItems.json"
import icons from "../data/icons"

const CatalogList = ()=>{
    return(
        <div className="cataloglist-listContainer">
            {catalogs.map(({category, icon, title, subcategories}, i)=>
                <div className="cataloglist-itemContainer" key={i}>
                    <div className="cataloglist-itemHeader">
                        <span>{icons[i]}</span> <span>{title}</span>
                    </div>
                    <ul className="cataloglist-itemList">
                        {subcategories.map((item, i)=>
                            <li key={i}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CatalogList