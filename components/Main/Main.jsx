import * as React from 'react'
import styled from '@emotion/styled'
import styles from './Main.styles'
import { Text, Link, Button, Grid, TextFieldRegular } from '@csssr/core-design'

const OriginMain = props =>
  <Grid withGuidelines>
    <div className={props.className}>
      <Text type="regular" size="l" className='header'>
        Log in
  </Text>
      <Text type="regular" size="s" className='subhead'>
        Don’t have an account?<Link type="list" size="s" > Sign up</Link>
      </Text>
      <TextFieldRegular id="email" label="EMAIL" className='email' />
      <TextFieldRegular id="pass" label="PASSWORD" className='pass' />
      <br />
      <Link type="list" size="s"> Frogot password? </Link>
      <Button
        kind="primary"
        disabled
        className='btn'
      >
        LOG IN
  </Button>
    </div>
  </Grid>
const Main = styled(OriginMain)`
  ${styles.base}
`

export { Main }
export default Main
