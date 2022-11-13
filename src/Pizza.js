
function Pizza({myPizza}){
    return(
        <div className="productContainer">
            {myPizza.map(element=>{
                const{id, name, picture, description, price}=element;
                return(<div key={id} className="productCard">
                    <img className="productCard_img" src={picture} alt="pizza"/>
                        <h2>{name}</h2>
                        <p className="productCard_description">{description}</p>
                        <h2>{price} рублей</h2>
                </div>
                )
            })}
        </div>
    )
}
export default Pizza;
