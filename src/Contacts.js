
function Contacts(){
    return(
        <div>
            <div className="container">
                <h1 className="title">Мы работаем ежедневно с 10:00 до 22:00</h1>
            </div>
            <div className="container">
                <img  className="pizza" alt="pizza" src={"https://img.freepik.com/free-vector/top-view-of-cheeze-pizza-on-white-background_1308-103921.jpg?size=338&ext=jpg&uid=R61916015&ga=GA1.2.589884259.1665691129&semt=sph"}/>
            </div>
                <div className="container">
                    <h2 className="title_sm">Закажите горячую свежую пиццу на дом по телефону: <span className="yellow">+7(999)123-45-67</span> </h2>
                </div>
                <div className="container">
                    <h2 className="title_sm">Или приходите в нашу пиццерию по адресу: <span className="yellow">ул. Берёзовая аллея, д. 45</span></h2>
                </div>
        </div>
    )
}
export default Contacts;
