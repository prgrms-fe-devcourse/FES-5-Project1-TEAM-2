const defaultOptions = {
  url: '',
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const apiClient = async options => {
  const { url, headers, method, body } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const res = await fetch(url, {
    method,
    headers: method !== 'DELETE' ? headers : {},
    body: body ? body : undefined,
  });

  if (res.ok) {
    return await res.json();
  }
};

apiClient.post = (url, body, options) => {
  return apiClient({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
