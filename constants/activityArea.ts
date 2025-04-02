export const activityEndpoints = [
    { endpoint: "/v1/Activity/Overview?pageNumber={pageNumber}&pageSize={pageSize}", used: true },
    { endpoint: "/v1/Activity/GetActivitiesTotalCount", used: true },
    { endpoint: "/v1/Activity/Message", used: true },
    { endpoint: "/v1/Activity/Comment", used: true },
    { endpoint: "/v1/Activity/SetFollowing?activityId={activityId}&isFollow={isFollow}", used: true },
    { endpoint: "/v1/Activity/{activityId}", used: true },
    { endpoint: "/v1/Activity/CreateFileUploadActivity", used: true },
    { endpoint: "/v1/Activity/Comment?activityId={activityId}", used: true },
  ];
  