export const surveyEndpoints = [
    { endpoint: "/v1/Survey/Overview", used: true },
    { endpoint: "/v1/Survey/GetSurveyReviewCategoriesGraph?surveyId={surveyId}", used: true },
    { endpoint: "/v1/Survey/Create", used: true },
    { endpoint: "/v1/Survey/DeleteSurveys", used: true },
    { endpoint: "/v1/Survey/GetNonResponse", used: true },
    { endpoint: "/v1/Survey/GetAllSurveysTitle", used: true },
    { endpoint: "/v1/Review/GetAllSurveysTitleForReviewOverview", used: true },
    { endpoint: "/v1/Survey/GetAllNonResponseSurveysTitle", used: true },
    { endpoint: "/v1/Survey/SurveyAggregate?surveyToken={surveyToken}&contactId={contactId}", used: true },
    { endpoint: "/v1/Survey/GetSurveyDetailForCopyById/{surveyId}", used: true },
    { endpoint: "/v1/Survey/GetAllSurveyTemplates", used: true },
    { endpoint: "/v1/Survey/GetSurveyTemplatesByType/{type}", used: true },
    { endpoint: "/v1/Survey/GetSurveyReviewsBySurveyId?surveyId={surveyId}&partnerId={partnerId}", used: true },
    { endpoint: "/v1/Survey/GetSurveyReviewsBySegmentationAnalysisId?segmentationAnalysisId={segmentationAnalysisId}&partnerId={partnerId}", used: false },
    { endpoint: "/v1/Survey/GetReviewCriteriasBySurveyId?surveyId={surveyId}", used: true },
    { endpoint: "/v1/Survey/GetReviewCriteriasBySegmentationAnalysisId?segmentationAnalysisId={segmentationAnalysisId}", used: true },
    { endpoint: "/v1/Survey/GetReviewDetailByContactAndSurveyId/{surveyId}/{contactId}/{partnerId}", used: true },
    { endpoint: "/v1/Survey/GetReviewDetailByContactAndSegmentationAnalysisId/{segmentationAnalysisId}/{contactId}/{partnerId}", used: true },
    { endpoint: "/v1/Survey/GetSegmentationAnalysisUnitOverview", used: true },
    { endpoint: "/v1/Survey/AlignSegmentation", used: true },
    { endpoint: "/v1/Survey/AlignmentInfo/{parentSupplierId}", used: true },
    { endpoint: "/v1/Survey/GetAllDivisions", used: true },
    { endpoint: "/v1/Survey/GetAllRegions", used: true },
    { endpoint: "/v1/Survey/SegmentationFilter/GetRegionFromPartner?surveyTypes={type}", used: true },
    { endpoint: "/v1/Survey/SegmentationFilter/GetDivisionFromPartner?surveyTypes={type}", used: true },
    { endpoint: "/v1/Survey/SendRemindersBySurveyId?surveyId={surveyId}", used: true },
    { endpoint: "/v1/Survey/GetSurveyAnswersByReviewCriteriaId?surveyId={surveyId}&reviewCriteriaId={criteriaId}", used: true },
    { endpoint: "/v1/Survey/GetSurveyAnswersBySegmentationAnalysisId?segmentationAnalysisId={segmentationAnalysisId}&reviewCriteriaId={criteriaId}", used: true },
    { endpoint: "/v1/Survey/GetSurveysBySegmentationAnalysisId?segmentationAnalysisId={segmentationAnalysisId}", used: true },
  ];
  