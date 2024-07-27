import React from 'react';
import '@testing-library/react-native/extend-expect';
import { screen } from '@testing-library/react-native';
import { renderWithProvider } from '@tests/config/renderWithProvider';
import { mockCoffees } from '@tests/__mocks__/coffees';
import { testID } from '@tests/constants/testId';
import { ProductList } from '@components/ProductList';

describe('ProductList', () => {
  it('should render the FlatList with the correct testID', () => {
    renderWithProvider(<ProductList items={mockCoffees} />);

    const flatList = screen.getByTestId(testID.product_list);
    expect(flatList).toBeTruthy();
  });

  it('should render the correct number of ProductItem components', () => {
    renderWithProvider(<ProductList items={mockCoffees} />);

    const productItems = screen.getAllByTestId(testID.product_item);
    expect(productItems).toHaveLength(mockCoffees.length);
  });

  it('should pass the correct props to each ProductItem', () => {
    renderWithProvider(<ProductList items={mockCoffees} />);

    mockCoffees.forEach(coffee => {
      const productItem = screen.getByText(coffee.title); // Use the coffee name to locate ProductItem
      expect(productItem).toBeTruthy();

      const description = screen.getByText(coffee.description);
      expect(description).toBeTruthy();
    });
  });
});
