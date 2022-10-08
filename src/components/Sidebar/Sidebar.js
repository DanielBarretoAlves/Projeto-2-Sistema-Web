import React, { useState } from 'react'
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
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

import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
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

      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
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
