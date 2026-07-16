import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Error from '../Error';

describe('Error', () => {
  it('renders nothing when there is no error', () => {
    const { container } = render(<Error error="" />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders the error message', () => {
    render(<Error error="Something broke" />);

    expect(screen.getByText('Something broke')).toBeInTheDocument();
  });
});
