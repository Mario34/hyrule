import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const RootElm = styled.div`
  color: red;
`

const Layout: React.FC<React.PropsWithChildren> = () => (
  <RootElm>
    <h2>layout</h2>
    <Outlet />
  </RootElm>
)

export default Layout
