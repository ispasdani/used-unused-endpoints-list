export const fileEndpoints = [
    { endpoint: "/v1/File/GetFile?fileId={fileId}", used: true },
    { endpoint: "/v1/File/UploadFile?Title={title}&PartnerId={partnerId}&folderName={folderName}", used: true },
    { endpoint: "/v1/File/GetFileDetailById?id={id}", used: true },
    { endpoint: "/v1/File/Edit", used: true },
    { endpoint: "/v1/File/UploadFileByFolderId?folderId={folderId}", used: true },
    { endpoint: "/v1/File/isFileNameInUse?folderId={folderId}&fileName={name}", used: true },
    { endpoint: "/v1/File/DeleteFiles", used: true },
    { endpoint: "/v1/File/UpdateFileTitle?fileId={fileId}&title={title}", used: true },
  ];
  