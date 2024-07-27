import '@testing-library/react-native/extend-expect';
import { screen } from '@testing-library/react-native';
import { renderWithProvider } from '@tests/config/renderWithProvider';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import React from 'react';
import { testID } from '@tests/constants/testId';

const ITEMS_NUMBER = 5;

describe('ProductListSkeleton', () => {
  it('should render the VStack with the correct testID', () => {
    renderWithProvider(<ProductListSkeleton />);

    const vStack = screen.getByTestId(testID.product_list_skeleton);
    expect(vStack).toBeTruthy(); // Verifica se o VStack foi renderizado
  });

  it('should render the correct number of SingleProductSkeleton components', () => {
    renderWithProvider(<ProductListSkeleton />);

    const singleProductSkeletons = screen.getAllByTestId(testID.single_product_skeleton);
    expect(singleProductSkeletons.length).toBe(ITEMS_NUMBER); // Garante que a quantidade está correta
  });
});
