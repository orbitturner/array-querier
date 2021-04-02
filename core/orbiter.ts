import { ComplexFilter } from './workers/multiLevelDepthFilter';
import { SimpleFilter } from './workers/oneLevelDepthFilter';

// 🟢💻 WELCOME TO THE SPACESHIP - DEVELOPED BY 💻🟢
//  ██████╗ ██████╗ ██████╗ ██╗████████╗    ████████╗██╗   ██╗██████╗ ███╗   ██╗███████╗██████╗
// ██╔═══██╗██╔══██╗██╔══██╗██║╚══██╔══╝    ╚══██╔══╝██║   ██║██╔══██╗████╗  ██║██╔════╝██╔══██╗
// ██║   ██║██████╔╝██████╔╝██║   ██║          ██║   ██║   ██║██████╔╝██╔██╗ ██║█████╗  ██████╔╝
// ██║   ██║██╔══██╗██╔══██╗██║   ██║          ██║   ██║   ██║██╔══██╗██║╚██╗██║██╔══╝  ██╔══██╗
// ╚██████╔╝██║  ██║██████╔╝██║   ██║          ██║   ╚██████╔╝██║  ██║██║ ╚████║███████╗██║  ██║
//  ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝          ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
// 💚🔰 KEEP GOING FURTHER 🔰💚
/**
 * 💨 Project Name : Array-Querier
 * 💨 Project Repo : https://github.com/orbitturner/array-querier
 * 💨 My GitHub    : https://github.com/orbitturner
 * 💨 My LinkedIn  : https://linkedin.com/in/orbitturner
 * 💨 My Twitter   : https://twitter.com/orbitturner
 */

/**
 * Filters an array of objects with multiple match-criteria.
 * Choose One of the available function depending on your array composition.
 *
 * @see -> https://github.com/orbitturner/array-querier
 * @exports {filterSimpleArray, filterComplexArray}
 */
export class Querier {
  /**
   * Filters an array of objects (one level-depth) with multiple criteria.
   * The function returns an array of the same type as the input array.
   *
   * @param array -> The Array of JSON Object to filter.
   * @param filters -> An object with all the filter criteria you want.
   * @returns {Array} -> Filtered Data Array.
   */
  public static filterSimpleArray(array: any[], filters: { [x: string]: any[] }): any[] {
    return SimpleFilter.oneLevelDepthFilter(array, filters);
  }

  /**
   * Filters a multi Level Depth array of objects using custom predicates.
   *
   * @param  {Array} -> The Array of JSON Object to filter.
   * @param  {Object} -> An object with all the filter criteria you want.
   * @return {Array} -> Filtered Data Array.
   */
  public static filterComplexArray(array: any[], filters: { [x: string]: (arg0: any) => any }): any[] {
    return ComplexFilter.multiLevelDepthFilter(array, filters);
  }
}

// export } as Querier;
