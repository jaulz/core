const TDropdownConfig = {
  classes: {
    button: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    wrapper: 'inline-flex flex-col',
    dropdownWrapper: 'relative z-10',
    dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow bg-white mt-1',
    enterClass: 'opacity-0 scale-95',
    enterActiveClass: 'transition transform ease-out duration-100',
    enterToClass: 'opacity-100 scale-100',
    leaveClass: 'opacity-100 scale-100',
    leaveActiveClass: 'transition transform ease-in duration-75',
    leaveToClass: 'opacity-0 scale-95',
  },
};

export type TDropdownConfigKeys = 'button' | 'wrapper' | 'dropdownWrapper' | 'dropdown' | 'enterClass' | 'enterActiveClass' | 'enterToClass' | 'leaveClass' | 'leaveActiveClass' | 'leaveToClass';

export default TDropdownConfig;
