import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Home } from '@styled-icons/feather/Home'
import { Search } from '@styled-icons/feather/Search'
import { Moon } from '@styled-icons/feather/Moon'
import { Grid } from '@styled-icons/feather/Grid'
import { ArrowUp } from '@styled-icons/feather/ArrowUp'

const iconStyle = css`
  color: ${props => props.theme.colors.dark.white};
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.dark.secondary};
  }
`

export const MenuBarContainer = styled.aside`
  align-items: center;
  background: ${props => props.theme.colors.dark.primary};
  border-left: 1px solid ${props => props.theme.colors.dark.border};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.li`
  color: ${props => props.theme.colors.dark.white};
  cursor: pointer;
  display: block;
  height: 30px;
  padding: 1.1rem;
  position: relative;
  width: 30px;
`

export const HomeIcon = styled(Home)`
  ${iconStyle}
`

export const SearchIcon = styled(Search)`
  ${iconStyle}
`

export const MoonIcon = styled(Moon)`
  ${iconStyle}
`

export const GridIcon = styled(Grid)`
  ${iconStyle}
`

export const ArrowUpIcon = styled(ArrowUp)`
  ${iconStyle}
`
