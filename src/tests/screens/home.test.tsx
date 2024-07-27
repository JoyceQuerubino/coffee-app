import React from 'react';
import '@testing-library/react-native/extend-expect';
import { screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Home } from '@screens/Home';
import { useQuery } from '@tanstack/react-query';
import { mockCoffees } from '@tests/__mocks__/coffees';
import { testID } from '@tests/constants/testId';
import { renderWithProvider } from '@tests/config/renderWithProvider';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

const mockRefetch = jest.fn();

describe('Home Screen', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render Home screen correctly', () => {
    useQuery.mockReturnValue({
      data: mockCoffees,
      isPending: false,
      isError: false,
      isSuccess: true,
      error: null,
    })


    renderWithProvider(<Home />);

    expect(screen.getByText('Coffee Page')).toBeTruthy();
    expect(screen.getByText('Refresh')).toBeTruthy();
    expect(screen.getByTestId(testID.product_list)).toBeTruthy();
    const productItems = screen.getAllByTestId(testID.product_item);
    expect(productItems).toHaveLength(mockCoffees.length);

    mockCoffees.forEach(coffee => {
      expect(screen.getByText(coffee.title)).toBeTruthy();
    });
  });

  it('should render Home loading skeleton component', () => {
    useQuery.mockReturnValue({
      data: null,
      isPending: true,
      isError: false,
      isSuccess: false,
      error: null,
      isLoading: true,
    })


    renderWithProvider(<Home />);

    expect(screen.getByText('Coffee Page')).toBeTruthy();
    expect(screen.getByText('Refresh')).toBeTruthy();
    expect(screen.getByTestId(testID.product_list_skeleton)).toBeTruthy();
  });

  it('should filter coffees based on search text', () => {
    useQuery.mockReturnValue({
      data: mockCoffees,
      isPending: false,
      isError: false,
      isSuccess: true,
      error: null,
      refetch: mockRefetch,
    });

    renderWithProvider(<Home />);

    fireEvent.changeText(screen.getByTestId(testID.search_input), 'Latte');

    const filteredCoffees = mockCoffees.filter(coffee => coffee.title.includes('Latte'));
    filteredCoffees.forEach(coffee => {
      expect(screen.getByText(coffee.title)).toBeTruthy();
    });
  });

  it('should refetch data when refresh button is pressed', async () => {
    useQuery.mockReturnValue({
      data: mockCoffees,
      isPending: false,
      isError: false,
      isSuccess: true,
      error: null,
      refetch: mockRefetch,
    });

    renderWithProvider(<Home />);

    fireEvent.press(screen.getByText('Refresh'));

    await waitFor(() => {
      expect(mockRefetch).toHaveBeenCalled();
    });
  });

  it('should display error message on error', () => {
    useQuery.mockReturnValue({
      data: null,
      isPending: false,
      isError: true,
      isSuccess: false,
      error: new Error('Failed to fetch'),
      refetch: mockRefetch,
    });

    renderWithProvider(<Home />);

    expect(screen.getByText('Coffee Page')).toBeTruthy();
    expect(screen.getByText('Refresh')).toBeTruthy();
    expect(screen.getByText('Sorry! We had a problem')).toBeTruthy();
  });
});
