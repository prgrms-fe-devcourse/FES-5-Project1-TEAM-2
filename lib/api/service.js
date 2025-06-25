const URL = 'http://localhost:3001';

const defaultOptions = {
  method: 'GET',
  endpoint: '',
};

export const apiService = async (options = {}) => {
  const { method, endpoint, body } = { ...defaultOptions, ...options };
  try {
    const response = await fetch(`${URL}/${endpoint}`, {
      method,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

apiService.get = endpoint => {
  return apiService({ endpoint });
};
apiService.post = (endpoint, body) => {
  return apiService({ method: 'POST', body, endpoint });
};
apiService.put = (endpoint, body) => {
  return apiService({ method: 'PUT', body, endpoint });
};
apiService.delete = endpoint => {
  return apiService({ method: 'DELETE', endpoint });
};
