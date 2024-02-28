
import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() =>{
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
  
  const addMeal = () =>{
    const newMeal = {
      title:"Today is...",
      id: uuid(),
      mealForADay:"",
      ingredients:""
    }
    setMealPlans([newMeal, ...mealPlans])
  }
  const deleteDay = (mealId)=> {
    setMealPlans(mealPlans.filter(({id}) => id!==mealId))
  }
  const updateDay = (myUpdateMeal) =>{
    const updateMeals = mealPlans.map((mealPlan) =>{
      if (mealPlan.id===myUpdateMeal.id){
        return myUpdateMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMeals)
  }
  const getActiveMeal = () =>{
    return mealPlans.find(({id}) => id===selectedDay)

  }
  return (
    <div className='App' >
     <MyList addMeal={addMeal} 
     mealPlans={mealPlans}
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}/>
     <MyMealsAndIngredients selectedDay={getActiveMeal()} updateDay={updateDay}/>
    </div>
  );
}

export default App;
