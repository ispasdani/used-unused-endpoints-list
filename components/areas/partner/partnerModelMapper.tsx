import { partnerModelMapperMethods } from '@/constants/partner/partnerModelMapper';
import React from 'react';

const PartnerModelMapperMethods = () => {
  const methods = partnerModelMapperMethods;
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {methods.map((m, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <p className="font-medium">{m.method}</p>
          <p className={m.used ? "text-blue-500" : "text-red-500"}>
            {`Used: ${m.used}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PartnerModelMapperMethods;
