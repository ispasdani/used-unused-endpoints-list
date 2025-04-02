export const partnerRiskEndpoints = [
    { endpoint: "/v1/Risks/GetRisks?partnerId={partnerId}", used: true },
    { endpoint: "/v1/Risks/GetAlternativePartners?partnerId={partnerId}", used: true },
    { endpoint: "/v1/Risks/UpdateRisk", used: true },
    { endpoint: "/v1/Risks/UpdateRiskFileId?partnerId={partnerId}&fileId={fileId}", used: true },
    { endpoint: "/v1/Risks/CreateAlternativeSupplier", used: true },
    { endpoint: "/v1/Risks/UpdateAlternativeSupplier", used: true },
    { endpoint: "/v1/Risks/DeleteAlternativeSupplier", used: true },
  ];
  