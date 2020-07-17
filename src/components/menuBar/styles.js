import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Home } from '@styled-icons/feather/Home'
import { Search } from '@styled-icons/feather/Search'
import { Sun } from '@styled-icons/feather/Sun'
import { Moon } from '@styled-icons/feather/Moon'
import { Grid } from '@styled-icons/feather/Grid'
import { List } from '@styled-icons/feather/List'
import { ArrowUp } from '@styled-icons/feather/ArrowUp'

const iconStyle = css`
  color: var(--text);
  transition: color 0.4s, background 0.4s;

  &:hover {
    color: var(--secondary);
  }
`

export const MenuBarContainer = styled.aside`
  align-items: center;
  background: var(--primary);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  @media ${props => props.theme.mediaQueries.lg} {
    border-top: 1px solid var(--border);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  }
`

export const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.li`
  color: var(--text);
  cursor: pointer;
  display: block;
  height: 30px;
  padding: 1.1rem;
  position: relative;
  width: 30px;

  &.display {
    @media ${props => props.theme.mediaQueries.lg} {
      display: none;
    }
  }

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 0.9rem;
  }
`

export const HomeIcon = styled(Home)`
  ${iconStyle}
`

export const SearchIcon = styled(Search)`
  ${iconStyle}
`

export const SunIcon = styled(Sun)`
  ${iconStyle}
`

export const MoonIcon = styled(Moon)`
  ${iconStyle}
`

export const GridIcon = styled(Grid)`
  ${iconStyle}
`

export const ListIcon = styled(List)`
  ${iconStyle}
`

export const ArrowUpIcon = styled(ArrowUp)`
  ${iconStyle}
`
