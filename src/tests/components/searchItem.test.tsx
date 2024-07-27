import '@testing-library/react-native/extend-expect';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from '@tests/config/renderWithProvider';
import { SearchItem } from '@components/SearchItem';


describe('SearchItem Component', () => {
  it('should render the component', () => {
    renderWithProvider(<SearchItem setSearchText={() => {}} />);
    expect(screen.getByPlaceholderText('Search')).toBeTruthy();
  });

  it('should call setSearchText on input change', () => {
    const setSearchText = jest.fn();
    renderWithProvider(<SearchItem setSearchText={setSearchText} />);
    
    const input = screen.getByPlaceholderText('Search');
    fireEvent.changeText(input, 'Latte');

    expect(setSearchText).toHaveBeenCalledWith('Latte');
    expect(setSearchText).toHaveBeenCalledTimes(1);
  });
});
