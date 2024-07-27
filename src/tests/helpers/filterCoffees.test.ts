import { filteredLatte, mockCoffees } from '../__mocks__/coffees';
import { filterCoffees } from '@helpers/filterCoffees';
describe('filterCoffees', () => {
  it('should return all coffees when searchText is empty', () => {
    const result = filterCoffees(mockCoffees, '');
    expect(result).toEqual(mockCoffees);
  });

  it('should filter coffees based on searchText', () => {
    const result = filterCoffees(mockCoffees, 'Latte');
    expect(result).toHaveLength(2);
    expect(result).toEqual(filteredLatte);
  });

  it('should be case insensitive', () => {
    const result = filterCoffees(mockCoffees, 'LATTE');
    expect(result).toHaveLength(2);
    expect(result).toEqual(filteredLatte);
  });

  it('should return an empty array if no coffees match the searchText', () => {
    const result = filterCoffees(mockCoffees, 'Mocha');
    expect(result).toEqual([]);
  });

  it('should return an empty array if coffees is null or undefined', () => {
    expect(filterCoffees(undefined, 'Latte')).toEqual([]);
  });
});
