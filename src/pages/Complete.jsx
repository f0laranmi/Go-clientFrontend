import React, { useState, useEffect } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";

const Complete = () => {
  const {isLoading, data : {goals}
} = useFetch("https://goalserver-wch7.onrender.com/api/goals")
  const Goals = isLoading ? [] : goals.filter((g) => g.progress === 100);

  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />
      <div>
        {Goals && Goals.length < 1 ? (
          <Empty />
        ) : (
          Goals.map((g) => {
            return <Completed key={g.id} {...g} />;
          })
        )}
      </div>
    </div>
  );
};

export default Complete;
