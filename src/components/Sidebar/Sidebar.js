import React, { useContext, useState } from 'react'
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SSidebar,
  SSidebarButton,
} from './styles'

import { AiOutlineLeft } from 'react-icons/ai'
import {
  MdLogout,
  MdLibraryBooks,
  MdInsertDriveFile,
  MdOutlineMailOutline,
  MdToday,
} from 'react-icons/md'

import { ThemeContext } from './../../App'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>

      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
    </SSidebar>
  )
}

const linksArray = [
  {
    label: 'Duvidas',
    icon: <MdOutlineMailOutline />,
    to: '/duvidas',
  },
  {
    label: 'Materias',
    icon: <MdLibraryBooks />,
    to: '/materias',
  },
  {
    label: 'Testes',
    icon: <MdInsertDriveFile />,
    to: '/testes',
  },
  {
    label: 'Reforço',
    icon: <MdToday />,
    to: '/reforco',
  },
]

const secondaryLinksArray = [
  {
    label: 'Sair',
    icon: <MdLogout />,
    to: '/',
  },
]

export default Sidebar
