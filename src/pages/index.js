import React from "react";
import { css } from "@emotion/core"
import { Link, graphql } from 'gatsby';
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="wrap-post" css={css`
            border: solid 1px #ccc;
            margin-bottom: 30px;
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 1px 5px #ccc;
          `}>
            <div className="post_link" css={css`
              border-bottom: solid 1px #ccc;
              padding-bottom: 10px;
            `}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h4
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}
                </h4>
              </Link>
            </div>
            <div className="post_excerpt" css={css`
              padding-top: 10px;
              margin-bottom: 0;
            `}>
              <p>{node.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`