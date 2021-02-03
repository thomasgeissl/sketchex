
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import { WrapperSubsubgroup } from "./Subgroup/WrapperSubsubgroup";
                
          export function WrapperSubgroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"38px","top":"66px","width":"86px","height":"57px"}}>
          
                {props.Subsubgroup && <WrapperSubsubgroup style={{"position":"absolute","left":"0px","top":"0px","width":"86px","height":"57px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperSubgroup, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Subsubgroup:
        {
          title: "Subsubgroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              