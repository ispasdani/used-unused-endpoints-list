export const adminScorecardEndpoints = [
    { endpoint: "/v1/AdminScorecardsSettings/ScorecardsOverview", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/AwardSettings", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/CreateScoreArea", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/ScoreArea", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/ScoreArea/{scorecardAreaId}", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Metric", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Metric/{metricId}", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Metric/GetScoreAreas", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Metric/GetTypes", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/ScoreArea/Order", used: false },
    { endpoint: "/settings", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Scorecard", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/IsScorecardTitleInUse?name={name}", used: true },
    { endpoint: "/v1/AdminScorecardsSettings/Scorecard/{scorecardId}", used: true },
    { endpoint: "/v1/Scorecard/comparison?partnerIds={partnerIds}", used: true },
    { endpoint: "/v1/Kpi/Kpis", used: true },
  ];
  