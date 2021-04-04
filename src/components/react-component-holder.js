import React from "react"

export default ({ children }) => {
  return (
    <section className="react-component-holder">
      <header className="react-component-holder-header">
        Interactive React Component
      </header>
      <div className="component-content">{children}</div>
    </section>
  )
}
