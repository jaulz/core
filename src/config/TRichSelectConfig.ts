import { enterAndLeave } from './transitions';

const TRichSelectConfig = {
  classes: {
    wrapper: 'relative',

    // TDropdown Component
    trigger: 'flex items-center justify-between w-full px-3 py-2 text-left text-black transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    dropdown: 'z-10 rounded bg-white shadow-lg',
    // Dropdown content
    dropdownContent: 'p-2 space-y-2',

    // Clear button
    clearButton: 'absolute flex items-center justify-center w-6 h-6 text-gray-600 transition duration-100 ease-in-out rounded mt-2.5 mr-2 top-0 right-0 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',

    // Option list
    optionsList: 'space-y-1',
    optionsListLoadingMore: 'flex items-center justify-between px-3 py-2 text-gray-400 text-sm',

    // Option wrapper
    optionWrapper: '',

    // Option button
    option: 'w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded',
    selectedOption: 'font-semibold text-white bg-blue-500',
    highlightedOption: 'bg-blue-100',
    selectedHighlightedOption: 'font-semibold text-white bg-blue-600',

    //  Option content
    optionContent: 'flex items-center justify-between px-3 py-2',
    optionLabel: 'block truncate',
    optionSelectedIcon: 'w-5 h-5',

    // Option group
    optgroup: 'space-y-2',
    optgroupContent: '',
    optgroupLabel: 'block px-3 py-2 text-xs text-gray-400 uppercase truncate',
    optgroupOptionsList: 'px-2 pb-2',

    // Search
    searchWrapper: 'inline-block w-full placeholder-gray-400',
    searchInput: 'inline-block w-full px-3 py-2 text-sm border border-gray-300 rounded shadow-inner bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',

    // State texts
    searchingText: 'text-sm text-gray-400',
    needsMoreCharsText: 'text-sm text-gray-400',
    noResultsText: 'text-sm text-gray-400',

    // Select button
    selectButtonLabel: 'block pr-4 truncate',
    selectButtonPlaceholder: 'block text-gray-400 truncate',
    selectButtonSearchingPlaceholder: 'block text-gray-400 truncate',
    selectButtonLoadingIcon: 'flex-shrink-0 w-4 h-4 ml-1 text-gray-600',
    selectButtonSelectorIcon: 'flex-shrink-0 w-4 h-4 ml-1 text-gray-600',

    // Select button tags
    tagsWrapper: 'flex flex-wrap overflow-hidden -mx-2 -my-2.5 py-1 pr-8',

    // Single tag
    tag: 'bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 duration-100 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded shadow-sm text-sm text-white transition white-space-no m-0.5 max-w-full h-8 flex items-center cursor-pointer',
    tagLabel: 'px-3',
    tagDeleteButton: '-ml-1.5 h-full hover:bg-blue-600 hover:shadow-sm inline-flex items-center px-2 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-r',
    tagDeleteButtonIcon: 'w-3 h-3',

    ...enterAndLeave,
  },
};

export const TRichSelectClassesKeys = Object.keys(TRichSelectConfig.classes);

export type TRichSelectClassesValidKeys = keyof typeof TRichSelectConfig.classes;

export default TRichSelectConfig;
