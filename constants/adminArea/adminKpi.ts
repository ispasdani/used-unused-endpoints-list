export const adminKpiEndpoints = [
    { endpoint: "/v1/AdminKpi/KpiDefinitions", used: true },
    { endpoint: "/v1/AdminKpi/KpiDefinition/HasData?kpiId={kpiId}&from={from}&to={to}", used: true },
    { endpoint: "/v1/AdminKpi/KpiDefinitions", used: true },
    { endpoint: "/v1/AdminKpi/KpiDefinition/DeleteUploadedData?kpiId={kpiId}", used: true },
    { endpoint: "/v1/AdminKpi/UploadKpi", used: true },
    { endpoint: "/v1/AdminKpi/GetKpiUploadInitData", used: true },
    { endpoint: "/v1/AdminKpi/KpiCustomColumns", used: true },
    { endpoint: "/v1/AdminKpi/KpiCustomColumns", used: true },
    { endpoint: "/v1/AdminKpi/DataExtractTemplate", used: true },
    { endpoint: "/v1/AdminKpi/DataSpecification", used: true },
  ];
  