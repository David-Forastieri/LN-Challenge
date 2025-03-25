import React from 'react'
import TagList from "./TagList"

const Header = () => {
  return (
    <div className="lay-full-width">
      <div className="com-titleWithfollow hlp-marginBottom-15">
        <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
      </div>
      <TagList />
    </div>
  )
}

export default Header
