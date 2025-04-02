import { complianceStatusEndpoints } from '@/constants/complianceArea/complianceStatus';
import React from 'react';

const ComplianceStatus = () => {
  const endpoints = complianceStatusEndpoints;
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {endpoints.map((ep, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <p className="font-medium">{ep.endpoint}</p>
          <p className={ep.used ? "text-blue-500" : "text-red-500"}>
            {`Used: ${ep.used}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ComplianceStatus;
