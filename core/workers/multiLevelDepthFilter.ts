/**
 * =============================================
 * 🧱 Multi Level Depth Array Worker Class. 🧱
 * =============================================
 */
export class ComplexFilter{
    /**
     * Filters a multi Level Depth array of objects using custom predicates.
     *
     * @param  {Array} -> The Array of JSON Object to filter.
     * @param  {Object} -> An object with all the filter criteria you want.
     * @return {Array} -> Filtered Data Array.
     */
    public static multiLevelDepthFilter(array: any[], filters: { [x: string]: (arg0: any) => any; }) {
        const filterKeys = Object.keys(filters);
        return array.filter((item: { [x: string]: any; }) => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        });
        });
    }
}