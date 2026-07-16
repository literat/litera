import { describe, expect, it } from 'vitest';
import formatMoney from '../formatMoney';

describe('formatMoney', () => {
  it('formats cents into a dollar amount with decimals', () => {
    expect(formatMoney(1050)).toBe('$10.50');
  });

  it('drops decimals for whole-dollar amounts', () => {
    expect(formatMoney(1000)).toBe('$10');
  });
});
