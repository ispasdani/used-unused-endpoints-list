export const powerBiEndpoints = [
    { endpoint: "/v1/SegmentationReportEmbedInfo", used: true },
    { endpoint: "/v1/RetrieveEmbedInfo?workspaceId={workspaceId}&reportId={reportId}", used: true },
    { endpoint: "/v1/ExportReport?reportId={reportId}&groupId={workspaceId}&format={format}", used: true },
    { endpoint: "/v1/EnabledPowerBiEmbedInfoByArea?areaId={areaId}", used: true },
  ];
  