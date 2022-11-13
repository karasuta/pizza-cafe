
function Buttons({filteredPizza}){
    return(
        <div className="buttonContainer">
            <button className="change" onClick={()=>filteredPizza('vegeterian')}>Вегетарианская</button>
            <button className="change" onClick={()=>filteredPizza('meat')}>Мясная</button>
            <button className="change" onClick={()=>filteredPizza('spicy')}>Острая</button>
        </div>
    )
}
export default Buttons;

