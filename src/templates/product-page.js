import React from "react"
const Page = ({ pageContext }) => {
  return <>
    <div dangerouslySetInnerHTML={{ __html: pageContext.htmls[0] }}></div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.htmls[1] }}></div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.htmls[2] }}></div>
  </>
}
export default Page