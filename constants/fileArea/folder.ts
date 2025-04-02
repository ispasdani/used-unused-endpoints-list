export const folderEndpoints = [
    { endpoint: "/v1/Folder/Overview", used: true },
    { endpoint: "/v1/Folder/DeleteFoldersAndFiles", used: true },
    { endpoint: "/v1/Folder/GetFolderDetailById?id={id}", used: true },
    { endpoint: "/v1/Folder/GetInternalVisibilites?folderId={folderId}", used: true },
    { endpoint: "/v1/Folder/GetInternalVisibilites", used: true },
    { endpoint: "/v1/Folder/GetExtenalVisibilites?folderId={folderId}", used: true },
    { endpoint: "/v1/Folder/GetExtenalVisibilites", used: true },
    { endpoint: "/v1/Folder/Edit", used: true },
    { endpoint: "/v1/Folder/CreateFolder?folderName={name}&parentId={parentId}", used: true },
    { endpoint: "/v1/Folder/CreateFolder?folderName={name}", used: true },
    { endpoint: "/v1/Folder/GetContactsCreatedFileOrFolder", used: true },
    { endpoint: "/v1/Folder/isFolderNameInUse?folderName={name}&parentId={parentId}", used: true },
    { endpoint: "/v1/Folder/isFolderNameInUse?folderName={name}", used: true },
    { endpoint: "/v1/Folder/GetUploadFolders", used: true },
    { endpoint: "/v1/Folder/CheckFileNames", used: true },
  ];
  