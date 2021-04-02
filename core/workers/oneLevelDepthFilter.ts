/**
 * ==========================================
 * 🔹 One Level Depth Array Worker Class. 🔹
 * ==========================================
 */
export class SimpleFilter{    
    // =================================================
    // ignores case-sensitive for Array Filter
    private static getValue = (value: string) => (typeof value === 'string' ? value.toUpperCase() : value);
    // =================================================


    /**
     * Filters an array of objects (one level-depth) with multiple criteria.
     * The function returns an array of the same type as the input array.
     * 
     * @param array -> The Array of JSON Object to filter.
     * @param filters -> An object with all the filter criteria you want.
     * @returns {Array} -> Filtered Data Array.
     */
    public static oneLevelDepthFilter(array: any[], filters: { [x: string]: any[]; }): any[] {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores an empty filter
            if (!filters[key].length) { return true; }
            return filters[key].find(filter => this.getValue(filter) === this.getValue(item[key]));
        });
        });
    }
}