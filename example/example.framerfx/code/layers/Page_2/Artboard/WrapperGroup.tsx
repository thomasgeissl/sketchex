
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgOval } from "./Group/Oval";
                
                import { WrapperSubgroup } from "./Group/WrapperSubgroup";
                
          export function WrapperGroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"106px","top":"95px","width":"163px","height":"178px"}}>
          
          {props.Oval && <SvgOval style={{"position":"absolute","left":"0px","top":"0px","width":"163px","height":"178px"}} />
          }
                {props.Subgroup && <WrapperSubgroup style={{"position":"absolute","left":"38px","top":"66px","width":"86px","height":"57px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperGroup, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Oval:
        {
          title: "Oval",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, Subgroup:
        {
          title: "Subgroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              