import { Querier } from "../orbiter";

/**
 * ====================================
 * 🧪🔬 TEST OF OLDF WORKER🩺🧫
 * ====================================
 */
describe('🟡 Testing Querier.filterSimpleArray() ...', () => {
    it('should filter an array of objects with one level-depth', () => {
      const products = [
        { name: 'A', color: 'Blue', size: 50 },
        { name: 'B', color: 'Blue', size: 60 },
        { name: 'C', color: 'Black', size: 70 },
        { name: 'D', color: 'Green', size: 50 },
      ];
  
      const filters = {
        color: ['BLUE', 'black'],
        size: [70, 50],
      };
        
      // Data Extraction using Filters
      const filtered =  Querier.filterSimpleArray(products, filters);
      
      const expected = [
        { name: 'A', color: 'Blue', size: 50 },
        { name: 'C', color: 'Black', size: 70 },
      ];
      expect(filtered).toStrictEqual(expected);
    });
  });