import { actionAreaEndpoints } from '@/constants/actionArea';
import React from 'react'

const ActionArea = () => {
  const actionEndpoints = actionAreaEndpoints.filter(
    (ep) => !ep.endpoint.includes("GetActionChildrenActivity")
  );

  return (
    <div className="grid grid-cols-1 gap-4">
        {actionEndpoints.map((ep, index) => (
            <div key={index} className="border p-4 rounded shadow">
            <p className="font-medium">{ep.endpoint}</p>
            <p className={ep.used ? "text-blue-500" : "text-red-500"}>{`Used: ${ep.used}`}</p>
            </div>
        ))}
    </div>
  )
}

export default ActionArea