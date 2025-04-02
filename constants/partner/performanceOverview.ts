export const performanceOverviewEndpoints = [
    { endpoint: "/v1/PerformanceOverview/GetReviewGraph?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetRatingDistribution?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetReviewTotalsTableAndRank?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetReviewCategoriesGraph?partnerId={partnerId}&from={from}&to={to}&graphType={graphType}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetKpiGraph", used: true },
    { endpoint: "/v1/PerformanceOverview/GetComplianceScoreTable?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetSelfAssessmentScore?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetComplianceFillScore?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetNcrGraph?partnerId={partnerId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/SupplierCards/GetPartnerInfo?partnerId={partnerId}", used: true },
    { endpoint: "/v1/PerformanceOverview/GetComplianceAverageScore?partnerId={partnerId}&from={from}&to={to}", used: true },
  ];
  