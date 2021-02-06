import { css } from '@emotion/react'
import { Spacing, theme } from '../theme'
import { Box, BoxProps } from './Box'

export type FlexBoxProps = BoxProps & {
  flexDirection: 'row' | 'column'

  alignLeft?: boolean
  alignRight?: boolean
  alignCenter?: boolean
  alignTop?: boolean
  alignBottom?: boolean

  gap?: Spacing
}

function FlexBox(props: FlexBoxProps) {
  const {
    flexDirection,
    alignLeft,
    alignRight,
    alignTop,
    alignBottom,
    alignCenter,
    gap,
    ...boxProps
  } = props

  let horizontal = 'center'
  if (alignCenter) horizontal = 'center'
  if (alignLeft) horizontal = 'flex-start'
  if (alignRight) horizontal = 'flex-end'

  let vertical = 'center'
  if (alignCenter) vertical = 'center'
  if (alignTop) vertical = 'flex-start'
  if (alignBottom) vertical = 'flex-end'

  const justifyContent = flexDirection == 'row' ? horizontal : vertical
  const alignItems = flexDirection == 'row' ? vertical : horizontal

  const flexBoxStyle = css({
    display: 'flex',
    flexDirection,

    justifyContent,
    alignItems,

    gap: theme.spacings[gap],
  })

  return <Box {...boxProps} style={flexBoxStyle} />
}

export function Row(props: Omit<FlexBoxProps, 'flexDirection'>) {
  return <FlexBox {...props} flexDirection="row" />
}

export function Column(props: Omit<FlexBoxProps, 'flexDirection'>) {
  return <FlexBox {...props} flexDirection="column" />
}
