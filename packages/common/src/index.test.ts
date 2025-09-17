import { describe, it, expect, vi } from 'vitest';
import { logMessage, Message } from './index';

describe('logMessage', () => {
  it('should log the message with timestamp', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const msg: Message = { message: 'Hello, world!' };
    logMessage(msg);
    expect(spy).toHaveBeenCalledWith(expect.stringMatching(/\[.*\] Hello, world!/));
    spy.mockRestore();
  });
});
