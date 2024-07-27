import React from 'react';
import '@testing-library/react-native/extend-expect';
import { screen } from '@testing-library/react-native';
import { renderWithProvider } from '@tests/config/renderWithProvider';
import { CoffeeType } from '@services/coffee/types.coffee';
import { HomeContent } from '@components/HomeContent';
import { testID } from '@tests/constants/testId';
import coffeeImage from '@assets/coffee.png';
import { mockCoffees } from '@tests/__mocks__/coffees';

describe('HomeContent', () => {
  it('should render ProductListSkeleton when isLoading is true', () => {
    renderWithProvider(<HomeContent isLoading={true} isError={false} />);

    const skeleton = screen.getByTestId(testID.product_list_skeleton);
    expect(skeleton).toBeTruthy();
  });

  it('should render EmptyComponent with title and image when isError is true', () => {
    renderWithProvider(<HomeContent isLoading={false} isError={true} />);

    const emptyComponent = screen.getByTestId(testID.empty_image);
    expect(emptyComponent.props.source).toEqual(coffeeImage);

    const heading = screen.getByText('Sorry! We had a problem');
    expect(heading).toBeTruthy();
  });

  it('should render ProductList with items when isLoading and isError are false', () => {
    renderWithProvider(<HomeContent isLoading={false} isError={false} coffees={mockCoffees} />);

    const productList = screen.getByTestId(testID.product_list);
    expect(productList).toBeTruthy();

    mockCoffees.forEach(coffee => {
      expect(screen.getByText(coffee.title)).toBeTruthy();
    });
  });
});
