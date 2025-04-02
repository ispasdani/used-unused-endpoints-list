export const actionAreaEndpoints = [
    { endpoint: "/v1/Action/Overview", used: true },
    { endpoint: "/v1/Action?actionId={actionId}", used: true },
    { endpoint: "/v1/Action/GetActionChildrenActivity?actionId={actionId}", used: true },
    { endpoint: "/v1/Action", used: true },
    { endpoint: "/v1/Action/Complete", used: true },
    { endpoint: "/v1/Action/Open", used: true },
    { endpoint: "/v1/Action/OverdueActionsCount", used: true },
    { endpoint: "/v1/Action/OverdueActions", used: true },
    { endpoint: "/v1/Action/OwnedFromInterval?from={from}&to={to}", used: false },
    { endpoint: "/v1/Action/Owned", used: false },
    { endpoint: "/v1/Action/OwnedActionsCounts?from={from}&to={to}", used: false },
    { endpoint: "/v1/Action/SinceLastLogin", used: false },
    { endpoint: "/v1/Action/OwnerFilter", used: true},
    { endpoint: "/v1/Action/GetActionByToken?token={token}", used: true },
  ];