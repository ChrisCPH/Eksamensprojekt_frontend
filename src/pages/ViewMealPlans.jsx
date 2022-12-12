import React, {useState, useEffect} from 'react';
import facade from "../utils/apiFacade.js";

function ViewMealPlans(props) {

    const [mealPlans, setMealPlans] = useState([])
    const [selectMealPlanId, setSelectMealPlanId] = useState("")
    const [selectMealId, setSelectMealId] = useState("")
    const [selectMealPlanName, setSelectMealPlanName] = useState("")

    const user = "user"

    const getMealPlans = (user) => (
        facade.getAllMealPlans(user)
            .then((data) => {
                setMealPlans(data);
            })
    )

    const mealPlansTable = mealPlans?.map((mealPlan) => (
        <tr key={mealPlan.id}>
            <th>{mealPlan.id}</th>
            <th>{mealPlan.mealPlanName}</th>
        </tr>
    ))

    return (
        <div className="divplacement">
            <h3>Welcome</h3>
            <p> Showing Mealplans for user: {user}</p>
            <button onClick={getMealPlans}>Refresh Mealplans</button>
            <tbody>
            {mealPlansTable}
            </tbody>

        </div>
    );
}

export default ViewMealPlans;