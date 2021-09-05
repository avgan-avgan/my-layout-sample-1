import "../mystyles/apppages.css"
import {Link} from "react-router-dom";


const AppPages = ()=>{
    return(
        <div className="apppages-pagesContainer col-8">
            <div className="apppages-geo">
                <Link to="/geo">
                    <div style={{textAlign:"center"}}>
                        <i style={{fontSize: "22px"}} className="fas fa-map-marker-alt"/>
                    </div>
                    Ереван
                </Link>
            </div>
            <div className="apppages-pageList">
                <div className="apppages-Info">
                    <Link to="/food" className="apppages-left">Шоурум под заказ</Link>
                    <span className="apppages-right">Работаем ежедневно 9:00 - 20:00</span>
                </div>
                <div className="apppages-pages">
                    <div className="apppages-delivery">
                        <Link to="/delivery">Доставка</Link>
                    </div>
                    <div className="apppages-call">
                        <Link to="/call">Самовывоз</Link>
                    </div>
                    <div className="apppages-installation">
                        <Link to="/installation">Установка</Link>
                    </div>
                    <div className="apppages-aboutShop">
                        <Link to="/aboutmarket">О магазине</Link>
                    </div>
                    <div className="apppages-contacts">
                        <Link to="/contacts">Контакты</Link>
                    </div>
                </div>
            </div>
            <div className="apppages-loginContainer">
                <div>
                    <Link to="/login">
                        <div style={{textAlign:"center"}}>
                            <i style={{fontSize: "22px"}} className="fas fa-user-circle"/>
                        </div>
                        Войти
                    </Link>
                </div>
            </div>
            <div className="apppages-telephoneContainer">
                <div className="apppages-telephone">
                    <Link to="/tele1">
                        8 495 <span style={{fontWeight: "bold"}}>647 00 84</span>
                    </Link>
                </div>
                <div className="apppages-telephone">
                    <Link to="/tele2">
                        8 800 <span style={{fontWeight: "bold"}}>555 62 05</span>
                    </Link>
                </div>
                <div className="apppages-telephone">
                    <Link to="/tele3" style={{fontSize: "12px"}}>
                        Заказать звонок
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppPages