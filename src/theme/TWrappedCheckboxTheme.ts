import TCheckboxTheme from './TCheckboxTheme';

const TWrappedCheckboxTheme = {
  classes: {
    wrapper: 'flex items-center space-x-2',
    inputWrapper: 'inline-flex',
    label: '',
    input: TCheckboxTheme.classes,
  },
};

export const TWrappedCheckboxClassesListKeys = [
  'wrapper',
  'wrapperChecked',
  'inputWrapper',
  'inputWrapperChecked',
  'input',
  'label',
  'labelChecked',
] as const;

export default TWrappedCheckboxTheme;
