import createApp from './app';

describe('Application', () => {
  beforeEach(() => {
    process.env.PORT = undefined;
  });
  it("should use port from env if present", () => {
    process.env.PORT = '1234';
    const app = createApp();
    expect(app.get("port")).toBe(1234);
  });
});
