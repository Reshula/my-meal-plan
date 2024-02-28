function MyMealsAndIngredients({selectedDay, updateDay}){
    const editMyMeal = (myInput, value) =>{updateDay({
        ...selectedDay,
        [myInput] : value
    })
}
if (!selectedDay) return <p className="par">Plan your week  !!</p>
    return(
        <div className="whole-plan">
            <input 
            type="text"
            className="myInput"
            placeholder="Today Is..."
            id="title"
            value={selectedDay.title}
            onChange={(e) =>editMyMeal("title", e.target.value)}
            />

            <textarea
            placeholder="Write your meal"
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange={(e) =>editMyMeal("mealForADay", e.target.value)}
            />
            <textarea
            placeholder="Ingredients List"
            id="ingredients"
            value={selectedDay.ingredients}
            onChange={(e) =>editMyMeal("ingredients", e.target.value)}
            />

        </div>
    )
}
export default MyMealsAndIngredients;