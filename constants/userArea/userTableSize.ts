export const userTableSizeEndpoints = [
    { endpoint: "/v1/UserTableSize?Table={table}", used: false },
    { endpoint: "/v1/UserTableSize?Table={table}&TableSize={size}", used: true },
    { endpoint: "/v1/UserTableSize/AddOrUpdateItemsPerPage?listViewId={table}&itemPerPage={pageSize}", used: true },
  ];
  