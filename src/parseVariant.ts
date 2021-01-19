import { ObjectWithClassName, Variants, WithVariantProps } from './types/Variants'
import mergeClasses from './mergeClasses'

const getCustomPropsFromVariant = <P extends ObjectWithClassName>(
  variants?: Variants<P>,
  variant?: string
): WithVariantProps<P> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant]
  }

  return undefined
}

const parseVariant = <P extends ObjectWithClassName>(
  props: WithVariantProps<P>,
  globalConfiguration?: WithVariantProps<P>,
  defaultConfiguration?: WithVariantProps<P>
): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  }

  const customProps = getCustomPropsFromVariant(variants, variant)

  const mergedProps = {
    ...mainProps,
    ...customProps,
  }

  const { classes, fixedClasses, className, ...componentProps } = mergedProps

  const mergedClasses: string = mergeClasses(className, classes, fixedClasses)

  if (mergedClasses) {
    ;(componentProps as P).className = mergedClasses
  }

  return componentProps as P
}

export default parseVariant
