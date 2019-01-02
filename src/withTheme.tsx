import React from 'react'
import { defaultTheme as basicTheme, BulmaTheme } from '@hungry/bulma-theme'
import { normalizeCSS } from '@hungry/bulma-normalize'
import { ThemeProvider } from 'styled-components'

const attachNormalize = normalizeCSS

export class BasicThemeProvider extends React.Component<{ theme?: BulmaTheme }> {
  public static displayName = 'BulmaThemeProvider'

  public render() {
    const {
      theme,
      children,
    } = this.props

    return (
      <ThemeProvider
        theme={(theme || basicTheme)}
      >
        {children}
      </ThemeProvider>
    )
  }
}

export class Theme {
  public static Provider = BasicThemeProvider
}

export { withTheme } from 'styled-components'
