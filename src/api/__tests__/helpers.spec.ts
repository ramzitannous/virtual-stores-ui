import { parsePageFromUrl } from '../helpers';

describe('test url parsing', () => {
  it('should parse next/prev', () => {
    const url = 'https://test.com/api/v1/products/?page=2&page_size=10';
    expect(parsePageFromUrl(url)).toEqual(2);
  });
});
