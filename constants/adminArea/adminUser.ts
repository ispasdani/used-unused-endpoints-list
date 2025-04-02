export const adminUserEndpoints = [
    { endpoint: "/v1/AdminUser/GetUserAccessSettings?sortByName=true", used: true },
    { endpoint: "/v1/AdminUser/GetUserAccessSettingOverview", used: true },
    { endpoint: "/v1/AdminUser/GetUserAccessSettingModules", used: true },
    { endpoint: "/v1/AdminUser/AddUserAccessSetting", used: true },
    { endpoint: "/v1/AdminUser/UpdateUserAccessSetting", used: true },
    { endpoint: "/v1/AdminUser/RemoveUserAccessSettings", used: true },
    { endpoint: "/v1/AdminUser/IsUserAccessSettingNameInUse?name={name}", used: true },
    { endpoint: "/v1/AdminUser/GetUserManagementOverview", used: true },
    { endpoint: "/v1/AdminUser/UserInvitationOverview", used: true },
    { endpoint: "/v1/AdminUser/GetUserManangementSettings", used: true },
    { endpoint: "/v1/AdminUser/UpdateUserAccessAllowed?isAccessAllowed={accessAllowed}", used: true },
    { endpoint: "/v1/AdminUser/updateUser/{userId}", used: true },
    { endpoint: "/v1/AdminUser/SendUserInvitations", used: true },
    { endpoint: "/v1/AdminUser/GetUsersForGateKeepers", used: true },
    { endpoint: "/v1/AdminUser/GetUserActivities", used: false },
    { endpoint: "/v1/AdminUser/GetUserActivitySettings", used: false },
    { endpoint: "/v1/AdminUser/GetUserActivitySettings", used: false }, // duplicate, same as above
    { endpoint: "/v1/AdminUser/GetUserTypes", used: false },
    { endpoint: "/v1/Partners/PartnerOverviewForSupplierInformationAccess", used: true },
    { endpoint: "/v1/AdminUser/UpdateSupplierInformationAccess", used: true },
  ];
  