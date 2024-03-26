/// <reference types="react-scripts" />
declare module "*.svg" {
  import * as React from "react"

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

declare module "redux-persist/lib/storage"
