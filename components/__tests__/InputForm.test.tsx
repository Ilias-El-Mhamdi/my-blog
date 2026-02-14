import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputForm from '../InputForm';

describe('InputForm', () => {
  it('calls onSubmit with input value', async () => {
    const mockSubmit = jest.fn();
    render(<InputForm onSubmit={mockSubmit} disabled={false} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Apple');
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockSubmit).toHaveBeenCalledWith('Apple');
  });

  it('clears input after submit', async () => {
    const mockSubmit = jest.fn();
    render(<InputForm onSubmit={mockSubmit} disabled={false} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await userEvent.type(input, 'Apple');
    await userEvent.click(screen.getByRole('button'));
    expect(input.value).toBe('');
  });
});
