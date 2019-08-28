import React from 'react'
import styled from '@emotion/styled'
import Main from '../components/Main'
const originPage = props =>
  <div className={props.className}>
    <Main />
  </div>

const Page = styled(originPage)`

  code {
    background-color: ${props => props.theme.colors.secondary.origin};
  }
`

export default Page
