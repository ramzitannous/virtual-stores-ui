import { configureAppStore } from '../configureStore';

describe('configureStore', () => {
  it('should return an empty store', () => {
    const store = configureAppStore();
    expect(store.getState()).toBeUndefined();
  });
});
