import React from 'react'

const SideBar = ({ items = [] }) => {
  return(
    <div>
      {
        items.map(item => (
          <div key={item.href}>
            <a href={item.href} data-testid="sidebar-navigation">
              {item.title}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default SideBar
