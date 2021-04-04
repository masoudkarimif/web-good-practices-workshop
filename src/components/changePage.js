import React from "react"

export default ({ rule, title }) => {
  return (
    <a className="button redirect" href={`/rule-${rule}`}>
      {title || "Next Rule >"}
    </a>
  )
}
