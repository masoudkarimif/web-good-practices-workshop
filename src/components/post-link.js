import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <li>
  		<h3>
          <Link className="post-link" to={post.frontmatter.path} dangerouslySetInnerHTML={{__html:post.frontmatter.title}} />
		  </h3>
	    <h4 className="post-excerpt" dangerouslySetInnerHTML={{__html:post.frontmatter.excerpt}} />
      <p className="post-meta">{post.frontmatter.date}</p>
  </li>
)

export default PostLink
