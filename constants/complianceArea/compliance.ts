export const complianceEndpoints = [
    { endpoint: "/v1/Compliance/ComplianceHeadLines?templateId={templateId}", used: false },
    { endpoint: "/v1/Compliance/Overview", used: true },
    { endpoint: "/v1/Compliance/ComplianceRegistration?id={id}", used: true },
    { endpoint: "/v1/Compliance/Edit?id={id}", used: true },
    { endpoint: "/v1/Compliance/EditComplianceByGuest?id={id}", used: true },
    { endpoint: "/v1/Compliance/Create", used: true },
    { endpoint: "/v1/Compliance/ChangeComplianceStatus?id={id}&status={statusId}", used: true },
    { endpoint: "/v1/Compliance/ChangeMultipleComplianceStatus?status={statusId}", used: true },
    { endpoint: "/v1/Compliance/SendEmailOfChangingMultipleComplianceStatus", used: true },
    { endpoint: "/v1/Compliance/ChangeComplianceRating?id={id}&rating={rating}&activityId={activityId}", used: true },
    { endpoint: "/v1/Compliance/Edit", used: true },
    { endpoint: "/v1/Compliance/EditComplianceByGuest", used: true },
    { endpoint: "/v1/Compliance/ChangeRegistrationsVisibility?visibility={visibility}", used: true },
    { endpoint: "/v1/Compliance/DeleteRegistrations", used: true },
    { endpoint: "/v1/Compliance/CopyCompliance?id={id}", used: true },
    { endpoint: "/v1/Compliance/CopyComplianceByGues?id={id}", used: true },
    { endpoint: "/v1/Compliance/canChangeToStatus?id={id}&status={statusId}", used: true },
    { endpoint: "/v1/Compliance/ContactsFilter", used: true },
    { endpoint: "/v1/Compliance/TemplateFilter", used: true },
    { endpoint: "/v1/Compliance/GetComplianceByToken?token={token}", used: true },
    { endpoint: "/v1/SupplierProfile/GetMaturityChartData?partnerId={partnerId}", used: true },
  ];
  