import * as React from 'react'
import styled from '@emotion/styled'
import styles from './Main.styles'
import { Text } from '@csssr/core-design'

const OriginMain= props =>
  <div className={props.className}>
 <Text type="regular" size="m">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Text>
  </div>

const Main = styled(OriginMain)`
  ${styles.base}
`

export { Main }
export default Main
