import { Querier } from '../orbiter';

/**
 * ====================================
 * 🧪🔬 TEST OF MLDF WORKER🩺🧫
 * ====================================
 */
describe('🟡 Testing Querier.filterComplexArray() ...', () => {
  it('should filter a Multi Level Depth array of objects by custom predicates', () => {
    const products = [
      { name: 'A', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 } },
      { name: 'B', color: 'Blue', size: 60, locations: [], details: { length: 20, width: 70 } },
      { name: 'C', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } },
      { name: 'D', color: 'Green', size: 50, locations: ['USA'], details: { length: 20, width: 71 } },
    ];

    /**
     * Exemple One Of Filters Possibility.
     * You can choose one Of Those to Test with.
     */
    const filters = {
      size: (size: number) => size === 50 || size === 70,
      color: (color: string) => ['blue', 'black'].includes(color.toLowerCase()),
      locations: (locations: any[]) => locations.find((x: string) => ['JAPAN', 'USA'].includes(x.toUpperCase())),
      details: (details: { length: number; width: number }) => details.length < 30 && details.width >= 70,
    };

    /**
     * Exemple Two Of Filters Possibility.
     * You can choose one Of Those to Test with.
     */
    const filters2 = {
      size: (size: number) => size === 50 || size === 70,
      color: (color: string) => ['blue', 'black'].includes(color.toLowerCase()),
      details: (details: { length: number; width: number }) => details.length < 30 && details.width >= 70,
      locations: (locations: string | string[]) => {
        if (locations.includes('USA')) return true; // case sensitive
        if (locations.includes('Japan')) return true; // case sensitive

        const url = window.location.pathname.toLowerCase();
        if (url.includes('/en-us/')) return true; // not case sensitive
        if (url.includes('/es/')) return true; // not case sensitive
        return false;
      },
    };

    // Data Extraction using Filters
    const filtered = Querier.filterComplexArray(products, filters);

    const expected = [
      { name: 'A', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 } },
      { name: 'C', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } },
    ];
    expect(filtered).toStrictEqual(expected);
  });
});
