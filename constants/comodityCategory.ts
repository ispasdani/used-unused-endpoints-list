export const commodityCategoryEndpoints = [
    { endpoint: "/v1/CommodityCategories?topLevel={level}&oneLevelOnly={oneLevelOnly}", used: true },
    { endpoint: "/v1/CommodityCategory?commodityId={commodityId}&includeChildren={includeChildren}", used: true },
    { endpoint: "/v1/Survey/SegmentationFilter/GetCommodityFromPartner?level={level}&surveyType={type}", used: true },
  ];
  