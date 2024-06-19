// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const beforeBody: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-beforebody"><h1>Test</h1>{ children }</div>
}

beforeBody.afterDOMLoaded = clipboardScript
beforeBody.css = clipboardStyle

export default (() => beforeBody) satisfies QuartzComponentConstructor
