export const parsePageFromUrl = (url: string) => {
  const parsedUrl = new URL(url);
  const params = new URLSearchParams(parsedUrl.searchParams);
  return parseInt(params.get('page') || '0');
};

export const parseResponse = response => {
  const data = response.data;
  if (data.next) {
    data.next = parsePageFromUrl(data.next);
  }
  if (data.previous) {
    data.previous = parsePageFromUrl(data.previous);
  }
  response.data = data;
  return response;
};
