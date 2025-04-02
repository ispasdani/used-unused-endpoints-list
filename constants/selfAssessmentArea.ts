export const selfAssessmentEndpoints = [
    { endpoint: "/v1/SelfAssessment/GetSelfAssessmentTemplate?token={token}", used: true },
    { endpoint: "/v1/SelfAssessment/CreateOrUpdateSelfAssessment", used: true },
    { endpoint: "/v1/Compliance/GetSelfAssessmentRequestContacts?partnerId={partnerId}&templateId={complianceTemplateId}", used: true },
  ];
  