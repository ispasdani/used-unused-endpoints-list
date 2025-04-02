export const userAccountEndpoints = [
    { endpoint: "/v1/UserAccount/RegisterUser?token={invitationToken}", used: true },
    { endpoint: "/v1/UserAccount/LinkExistingUserPartner?token={token}", used: true },
    { endpoint: "/v1/UserAccount/IsUsernameDuplicate?username={encodedUserName}&token={invitationToken}", used: true },
    { endpoint: "/v1/UserAccount/GetInvitationTypeForRegister?token={invitationToken}", used: true },
    { endpoint: "/v1/UserAccount/IsPasswordWeak", used: true },
    { endpoint: "/v1/UserAccount/AddRelationsUserDetail", used: true },
    { endpoint: "/v1/UserAccount/NotificationsSettings", used: true },
    { endpoint: "/v1/UserAccount/NotificationsSetting?moduleId={moduleId}&receiveEmail={receiveEmail}", used: true },
  ];
  