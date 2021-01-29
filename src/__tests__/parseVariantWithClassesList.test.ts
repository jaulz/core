import { parseVariantWithClassesList } from '../index'

describe('parse variants with classes list function', () => {
  it('returns the same object if no variants passed', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
    }

    expect(parseVariantWithClassesList(props, [])).toEqual(props)
  })

  it('returns the variant props if a variant is added', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    }
    expect(parseVariantWithClassesList(props, [])).toEqual(props.variants.alt)
  })

  it('returns the default configuration', () => {
    const props = {}
    const globalConfiguration = {}
    const defaultConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
    }

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration)
    ).toEqual({
      type: 'text',
      classesList: {
        wrapper: 'text-red-500 border p-3',
      },
    })
  })

  it('merge the variant props with the default props', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    }

    expect(parseVariantWithClassesList(props, [])).toEqual({
      ...props.variants.alt,
      ...{
        placeholder: props.placeholder,
      },
    })
  })

  it('use the props over the configuration', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
    }

    const configuration = {
      className: 'text-blue-500',
    }

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(props)
  })

  it('use the variant from the configuration', () => {
    const props = {
      variant: 'alt',
    }

    const configuration = {
      className: 'text-blue-500',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
    }

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(
      configuration.variants.alt
    )
  })

  it('use the configuration if no props sent', () => {
    const props = {}

    const configuration = {
      className: 'text-blue-500',
      type: 'text',
    }

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(configuration)
  })

  it('merges className and fixedClasses', () => {
    const props = {
      className: 'text-red-500',
      classes: {
        wrapper: ['border-red-500'],
      },
      fixedClasses: {
        wrapper: { 'border-2': true },
      },
    }

    const config = parseVariantWithClassesList(props, ['wrapper'])

    expect(config).toEqual({
      className: 'text-red-500',
      classesList: {
        wrapper: 'border-red-500 border-2',
      },
    })
  })

  it('merges fixedClasses and variant classes', () => {
    const props = {
      className: 'text-red-500',
      classes: {
        wrapper: ['border-red-500'],
      },
      fixedClasses: {
        wrapper: { 'border-2': true },
      },
      variants: {
        alt: {
          classes: {
            wrapper: 'border-blue-500',
          },
        },
      },
      variant: 'alt',
    }

    expect(parseVariantWithClassesList(props, ['wrapper'])).toEqual({
      className: 'text-red-500',
      classesList: {
        wrapper: 'border-blue-500 border-2',
      },
    })
  })

  it('uses the classes from the configuration', () => {
    const props = {
      variant: 'error',
    }

    const configuration = {
      classes: {
        wrapper: 'text-black',
      },
      variants: {
        error: {
          classes: {
            wrapper: 'text-red-500',
          },
        },
      },
    }

    expect(parseVariantWithClassesList(props, ['wrapper'], configuration)).toEqual({
      classesList: {
        wrapper: 'text-red-500',
      },
    })
  })

  it('handles undefined classes for a variant', () => {
    const props = {
      variant: 'error',
    }

    expect(parseVariantWithClassesList(props, ['wrapper'])).toEqual({
      classesList: {
        wrapper: '',
      },
    })
  })

  it('merges only the attributes that are defined from the variant', () => {
    const props = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
      variants: {
        error: {
          classes: {
            label: 'uppercase text-red-500',
            input: 'shadow',
          },
        },
      },
      variant: 'error',
    }

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'inputWrapper', 'label', 'input'])
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-red-500',
        input: 'shadow',
      },
    })
  })

  it('merges only the attributes that are defined from the variant and keep the fixed classes', () => {
    const props = {
      fixedClasses: {
        wrapper: 'flex items-center',
        inputWrapper: 'inline-flex',
        label: 'semibold',
        input: '',
      },
      classes: {
        wrapper: 'space-x-2',
        inputWrapper: '',
        label: 'uppercase text-gray-500',
        input: '',
      },
      variants: {
        error: {
          classes: {
            label: 'uppercase text-red-500',
            input: 'shadow',
          },
        },
      },
      variant: 'error',
    }

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'inputWrapper', 'label', 'input'])
    ).toEqual({
      classesList: {
        wrapper: 'space-x-2 flex items-center',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-red-500 semibold',
        input: 'shadow',
      },
    })
  })

  it('merges the only the new attributes to the global configuration', () => {
    const props = {
      classes: {
        input: 'border-1',
      },
    }

    const globalConfiguration = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    }

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration
      )
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    })
  })

  it('it merges the new attributes from the default configuration', () => {
    const globalConfiguration = {
      classes: {
        input: 'border-1',
      },
    }

    const defaultConfiguration = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    }

    expect(
      parseVariantWithClassesList(
        {},
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration,
        defaultConfiguration
      )
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    })
  })

  it('it merges the props with the the default configuration', () => {
    const props = {
      classes: {
        input: 'border-1',
      },
    }

    const defaultConfiguration = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    }

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        {},
        defaultConfiguration
      )
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    })
  })

  it('it merges the global configuration, the props, and the default configuration', () => {
    const props = {
      classes: {
        wrapper: 'flex items-center space-x-2',
      },
    }

    const globalConfiguration = {
      classes: {
        input: 'border-1',
      },
    }

    const defaultConfiguration = {
      classes: {
        wrapper: 'p-3',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    }

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration,
        defaultConfiguration
      )
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    })
  })
})
