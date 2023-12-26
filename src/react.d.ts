import * as React from "react"

declare module "react" {
  interface FunctionComponent<P = {}> {
    displayName?: string
  }
}
