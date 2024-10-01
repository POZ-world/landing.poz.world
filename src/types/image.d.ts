/* 
 * image.d.ts
 *     Created: 2024-09-26T17:21:17-04:00
 *    Modified: 2024-09-26T17:21:19-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */ 

/* eslint-disable import/no-default-export */
declare module '*.avif' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  const path: string;
  export default path;
}

declare module '*.svg?react' {
  import type React from 'react';

  interface SVGPropsWithTitle extends React.SVGProps<SVGSVGElement> {
    title?: string;
  }

  const ReactComponent: React.FC<SVGPropsWithTitle>;

  export default ReactComponent;
}

declare module '*.webp' {
  const path: string;
  export default path;
}
