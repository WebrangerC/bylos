import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const NavBar: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
//  if (title) {
    return <h1 class={classNames(displayClass, "nav-bar")}>Test</h1>
//  } else {
//    return null
//  }
}

NavBar.css = `
.nav-bar {
  margin: 2rem 0 0 0;
}
`

export default (() => NavBar) satisfies QuartzComponentConstructor
