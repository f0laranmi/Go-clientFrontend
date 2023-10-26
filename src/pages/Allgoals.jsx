import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";

import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import goals from "../data/goals";
const Allgoals = () => {
 
  const {isLoading, data:{goals : Goals}} = useFetch("https://goalserver-wch7.onrender.com/api/goals")

  // const [Goals, setGoals] = useState([])
  // const [isLoading, setisLoading] = useState(true)

  // const fetchGoals = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/api/goals")
  //     const data = await res.json()
  //     setisLoading(false)
  //     const {goals} = data
  //     setGoals(goals)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchGoals()
  // }, [])

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading/>}
      <div>
        <div>
          {Goals &&
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
