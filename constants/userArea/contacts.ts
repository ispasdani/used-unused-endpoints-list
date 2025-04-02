export const contactsEndpoints = [
    { endpoint: "/v1/Contacts?sortByName={sortByName}", used: true },
    { endpoint: "/v1/Contacts/companyContactsWithModuleAccess/{accessTo}?justUser={justUser}", used: true },
    { endpoint: "/v1/Contacts/GetNotifyUsers", used: true },
    { endpoint: "/v1/Contacts/GetNotifyUsersForGuest", used: true },
    { endpoint: "/v1/Contacts/externalPartnerUsers/{partnerId}", used: false },
    { endpoint: "/v1/Contacts/nonRestrictedExternalPartnerUsers/{partnerId}/{restrictedModule}", used: false },
    { endpoint: "/v1/Contacts/GetContactGroups?sortByName={sortByName}", used: true },
    { endpoint: "/v1/Contacts?sortByName={sortByName}", used: true },
    { endpoint: "/v1/Contacts/UpdateUserAccountPicture?profilePictureId={fileId}", used: true },
    { endpoint: "/v1/Contacts/UpdateUserAccountPicture", used: true },
    { endpoint: "/v1/Contacts/ContactGroupsWithAllContacts/{accessTo}", used: true },
    { endpoint: "/v1/Contacts", used: true }, // used with query param "types" for getAllContactsByUserTypes
    { endpoint: "/v1/Contacts/GetCurrentCompanyUserContacts/{currentUserOnIndexZero}", used: true },
  ];
  