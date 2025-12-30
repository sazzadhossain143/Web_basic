
function List(){
    const foods = [
        {id:1, name: "apple", calories: 50},
        {id:2, name: "orrange", calories: 45},
        {id:3, name: "banana", calories: 105},
        {id:4, name: "coconut", calories: 150},
        {id:5, name: "pineapple", calories: 30},
        
    ];

    foods.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical
    // foods.sort((a,b)=> a.calories - b.calories); // Numerical
    
    const lowCalFoods = foods.filter(food => food.calories < 100);

    const listItems = foods.map(food => <li key={food.id}>{food.name} : <b>{food.calories}</b></li>)
    
    const listItems2 = lowCalFoods.map(lowCalFood => <li key={lowCalFood.id}>{lowCalFood.name} : <b>{lowCalFood.calories}</b></li>)

    



    return(
        <>
        <ol>{listItems}</ol>
        <ol>{listItems2}</ol>
        </>
    );

}

export default List