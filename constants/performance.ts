export const performanceEndpoints = [
    { endpoint: "/v1/Performance/GetPerformanceOverview", used: true },
    { endpoint: "/v1/Performance/GetPerformanceFilesAndLinks?partnerId={partnerId}", used: true },
    { endpoint: "/v1/Performance/GetPerformanceChartData?supplierId={partnerId}&date=01-01-{selectedYear}", used: true },
    { endpoint: "/v1/Performance/GetPerformanceSurveyReviewsBySurveyId?surveyId={surveyId}&partnerId={partnerId}", used: true },
    { endpoint: "/v1/Performance/GetSurveysByPerformanceUnitAnalysisId?unitAnalysisId={analysisUnitId}&type={type}", used: true },
    { endpoint: "/v1/Performance/GetReviewDetailByContactAndSurveyId/{surveyId}/{contactId}/{partnerId}", used: true },
    { endpoint: "/v1/Performance/GetPerformanceSurveyAnswersByReviewCriteriaId?reviewCriteriaGroupId={criteriaGroupId}&surveyId={surveyId}", used: true },
    { endpoint: "/v1/Performance/GetPerformanceDataByDateRange", used: true },
    { endpoint: "/v1/Performance/UpdatePerformanceLink", used: true },
    { endpoint: "/v1/Performance/RemovePerformanceLink?performanceLinkId={id}", used: true },
    { endpoint: "/v1/Performance/DeleteUnitOfAnalysis?unitOfAnalysisId={unitOfAnalysisId}", used: true },
  ];
  