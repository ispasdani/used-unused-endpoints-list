export const newsLogEndpoints = [
    { endpoint: "/v1/GetNewsLogs?supplierId={supplierId}&flaggedItems={flaggedItems}&title={searchTitle}&to={to}&from={from}", used: true },
    { endpoint: "/v1/CreateNewsLog", used: true },
    { endpoint: "/v1/DeleteNewsLog?newsLogId={id}", used: true },
    { endpoint: "/v1/CreateFlaggedNewsItem", used: false },
    { endpoint: "/v1/DeleteFlaggedNewsItem?flaggedNewsItemId={id}", used: false },
  ];
  