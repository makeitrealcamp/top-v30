import React from 'react'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const ProfilePage = (props) => {
  return (
    <div>profile: { props.dataUser.name }</div>
  )
}

export default authenticatedRoute(ProfilePage, { pathAfterFailure: '/characters' })