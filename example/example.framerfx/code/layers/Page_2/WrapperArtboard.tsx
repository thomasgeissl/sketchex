
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import { WrapperGroup } from "./Artboard/WrapperGroup";
                
          export function WrapperArtboard(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"371px","height":"382px"}}>
          
                {props.Group && <WrapperGroup style={{"position":"absolute","left":"106px","top":"95px","width":"163px","height":"178px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperArtboard, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Group:
        {
          title: "Group",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              