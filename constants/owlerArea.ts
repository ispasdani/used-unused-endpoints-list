export const owlerEndpoints = [
    { endpoint: "/v1/OwlerApi/GetOwlerCompanyData?website={encodedDomain}", used: false },
    { endpoint: "/v1/OwlerApi/GetOwlerFeedData?website={encodedDomain}", used: false },
    { endpoint: "/v1/OwlerApi/GetOwlerCompetitorData?website={parsedDomain}", used: false },
    { endpoint: "/v1/OwlerApi/GetOwlerCompanyDataDirectly?website={encodedDomain}", used: true },
    { endpoint: "/v1/OwlerApi/GetOwlerFeedDataDirectly?website={encodedDomain}", used: true },
    { endpoint: "/v1/OwlerApi/GetOwlerCompetitorDataDirectly?website={parsedDomain}", used: true },
  ];
  