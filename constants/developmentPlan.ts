export const developmentPlanEndpoints = [
    { endpoint: "/v1/DevelopmentPlan/CreateDevelopmentPlan", used: true },
    { endpoint: "/v1/DevelopmentPlan/DeleteDevelopmentPlanByIds", used: true },
    { endpoint: "/v1/DevelopmentPlan/GetDevelopmentPlanById?developmentPlanId={id}", used: true },
    { endpoint: "/v1/DevelopmentPlan/GetDevelopmentPlanTemplates", used: true },
    { endpoint: "/v1/DevelopmentPlan/GetDevelopmentPlanTemplateDetailById?templateId={templateId}", used: true },
    { endpoint: "/v1/DevelopmentPlan/DevelopmentPlanOverview", used: true },
    { endpoint: "/v1/DevelopmentPlan/EditDevelopmentPlan", used: true },
    { endpoint: "/v1/Action/GetDevelopmentPlansBySupplierId?suplierId={suplierId}", used: true },
    { endpoint: "/v1/DevelopmentPlan/ContactsFilter", used: true },
    { endpoint: "/v1/DevelopmentPlan/DevelopmentPlansFilter", used: true },
  ];
  