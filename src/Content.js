import {Link} from "react-router-dom";
import "./mystyles/content.css"
import items from "./data/catalogItemlist.json"
import {useEffect, useReducer} from "react";

const initState = data => data

const reduce = (state, action)=>{

    if (action.type === "height"){
        let element = document.getElementsByClassName("cont-subItemList")[action.index]
        return state.map((v, i)=>
            i === action.index && element.style.maxHeight === "0px"?
                ({...state[i], cl_h: action.cl_h + "px"}) :
                i === action.index && element.style.maxHeight !== "0px"?
                ({rotate: true, cl_h: 0}) : ({...state[i], cl_h: 0})
        )
    }
    if (action.type === "rotate"){
        return state.map(({rotate}, i)=>
            i === action.index ?
                ({...state[i], rotate: !state[i].rotate}) :
                ({...state[i], rotate: false})
        )
    }
}
const Content = ()=>{

    const [state, dispatch] = useReducer(reduce, items, initState)

    return(
        <div className="cont-main">
            <div className="cont-catalogListMain">
                <div className="cont-catalogListContainer">
                    <ul>
                        {[...Array(21)].map((v,i)=>
                            <li key={i} className={state[i].rotate ? "bg" : null }
                                onClick={()=> {
                                    let height = document.getElementsByClassName("cont-subItemList")[i]
                                    // console.log(height.scrollHeight)
                                    dispatch({type: "height", index: i, cl_h: height.scrollHeight})
                                }}
                            >
                                <Link to={`item${i}`} className={state[i].rotate ? "bg" : null}
                                      onClick={()=>dispatch({type: "rotate", index: i})}>
                                <span className="cont-list">
                                    Единица {i +1}
                                </span>
                                    <span style={{border: "1px solid black"}} className={state[i].rotate ? "cont-arrow rotate" : "cont-arrow" }
                                          onClick={
                                              ()=> dispatch({type: "rotate", index: i})
                                          }
                                    >
                                <i className="fas fa-angle-down"/>
                            </span>
                                </Link>
                                <div className="cont-subItemList" onClick={()=> dispatch({type: "rotate", index: i})}
                                     style={{maxHeight: state[i].cl_h}}>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="cont-contentContainer">

            </div>
        </div>
    )
}

export default Content