import React, { useEffect, useState } from "react"
import Nav from "./nav"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ pageContext, children, className = "page" }) => {
  const blog_name = "UofC Web Workshop"

  const [scroll, setScroll] = useState(0)
  const [scrollVisibility, setScrollVisibility] = useState(false)

  const handleScroll = event => {
    const body = document.body,
      html = document.documentElement

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const current = Math.round(
      ((window.scrollY + window.innerHeight) * 100) / height
    )
    setScroll(current)
    setScrollVisibility(window.scrollY !== 0 ? true : false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { title, description } = pageContext.frontmatter

  return (
    <>
      <Helmet>
        <title>
          {blog_name} - {title || ""}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <header className="site-header" role="banner">
        <div className="wrapper">
          <Link className="site-title" to="/">
            {blog_name}
          </Link>
          <Nav />
        </div>
        {className === "article" && scrollVisibility ? (
          <div className="progress-bar" style={{ width: scroll + "%" }} />
        ) : null}
      </header>
      <main className="page-content" aria-label="Content">
        <div className="wrapper">{children}</div>
      </main>
    </>
  )
}

export default Layout
