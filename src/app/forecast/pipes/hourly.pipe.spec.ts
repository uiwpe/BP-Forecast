import { HourlyPipe } from './hourly.pipe';

describe('HourlyPipe', () => {
  it('create an instance', () => {
    const pipe = new HourlyPipe();
    expect(pipe).toBeTruthy();
  });
});
