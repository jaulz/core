import { CSSClass, CSSClassesList } from './CSSClass';

export type WithVariantProps<P> = {
  classes?: CSSClass
  fixedClasses?: CSSClass
  variants?: Variants<P>
  variant?: string
  class?: string
} & P;

export interface Variants<P> {
  [key: string]: WithVariantProps<P> | undefined
}

export type ObjectWithClassName = {
  class?: string
};

export type ObjectWithClassesList = ObjectWithClassName & {
  classesList?: CSSClassesList
};

export type WithVariantPropsAndClassesList<P, ClassesKeys extends string> = WithVariantProps<P> & {
  classesList?: CSSClassesList<ClassesKeys>
};
export interface VariantsWithClassesList<P, ClassesKeys extends string> {
  [key: string]: WithVariantPropsAndClassesList<P, ClassesKeys> | undefined
}
