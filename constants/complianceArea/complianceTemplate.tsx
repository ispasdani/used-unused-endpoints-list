export const complianceTemplateEndpoints = [
    { endpoint: "/v1/ComplianceTemplate?id={templateId}", used: true },
    { endpoint: "/v1/ComplianceTemplate/GroupList?sortByName={sortByName}", used: false },
    { endpoint: "/v1/ComplianceTemplate/AuthorizedTemplateList?sortByName={sortByName}", used: true },
    { endpoint: "/v1/ComplianceTemplate/GetAllActiveTemplates", used: false},
    { endpoint: "/v1/SelfAssessment/GetSelfAssessmentTemplate?token={token}", used: false },
  ];
  