import { Article } from "./article";

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article('test', '', 0, true, 0)).toBeTruthy();
  });
});
