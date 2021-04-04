import React from "react"

export default () => {
  return (
    <section style={{ paddingBottom: 30 }}>
      <h2 style={{ marginBottom: 0 }}>Bad Practice</h2>
      <button className="button button-red">Save</button>
      <button className="button button-green">Delete</button>
      <button className="button button-yellow">Submit</button>
      <h2 style={{ marginTop: 20, marginBottom: 0 }}>Good Practice</h2>
      <button className="button button-green">Save</button>
      <button className="button button-red">Delete</button>
      <button className="button button-blue">Submit</button>
    </section>
  )
}
