export const productEndpoints = [
    { endpoint: "/v1/Product/{partnerId}", used: true },
    { endpoint: "/v1/Product/Overview", used: true },
    { endpoint: "/v1/Product/Overview?supplierId={partnerId}", used: true },
    { endpoint: "/v1/Product/id?id={id}", used: true },
    { endpoint: "/v1/Product/id?id={id}&partnerId={partnerId}", used: true },
    { endpoint: "/v1/Product/ProductStatus", used: true },
    { endpoint: "/v1/Product", used: true },
    { endpoint: "/v1/Product/{id}", used: true },
    { endpoint: "/v1/Product/IsProductIdInUse?productId={encodedProductId}", used: true },
    { endpoint: "/v1/Product/HasDocumentation?productId={internalProductId}", used: true },
    { endpoint: "/v1/Product/MoveDocuments?currentProductId={currentProductId}&newProductId={newProductId}&newProductStatusId={newProductStatusId}", used: true },
    { endpoint: "/v1/Product/GetProductsList", used: true },
  ];
  