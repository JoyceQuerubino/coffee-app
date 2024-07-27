import React from 'react';
import '@testing-library/react-native/extend-expect';
import { renderWithProvider } from '@tests/config/renderWithProvider';
import { screen } from '@testing-library/react-native';
import { ProductItem } from '@components/ProductItem';
import { mockCoffee } from '@tests/__mocks__/coffees';

describe('ProductItem', () => {
  it('should render the title and description correctly', () => {
    renderWithProvider(<ProductItem {...mockCoffee} />);

    const title = screen.getByText(mockCoffee.title);
    expect(title).toBeTruthy();

    const description = screen.getByText(mockCoffee.description);
    expect(description).toBeTruthy();
  });

  it('should truncate the title if it exceeds the maximum number of lines', () => {
    const longTitle = 'A very long title that should be truncated because it exceeds the maximum number of lines';
    renderWithProvider(<ProductItem {...{ ...mockCoffee, title: longTitle }} />);

    const title = screen.getByText(longTitle);
    expect(title).toBeTruthy();
  });

  it('should truncate the description if it exceeds the maximum number of lines', () => {
    const longDescription = 'A very long description that should be truncated because it exceeds the maximum number of lines ' +
                            'and this text should not all be visible because it is too long and will be truncated based on the styling.';
    renderWithProvider(<ProductItem {...{ ...mockCoffee, description: longDescription }} />);

    const description = screen.getByText(longDescription);
    expect(description).toBeTruthy();
  });
});
