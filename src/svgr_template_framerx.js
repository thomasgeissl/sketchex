function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`
        import * as React from "react";
        export function ${componentName}(props) {
            return ${jsx}
        }
      `;
}
module.exports = template;
