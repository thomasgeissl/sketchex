
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import { WrapperUppergroup } from "./Artboard3/WrapperUppergroup";
                
                import { WrapperLowergroup } from "./Artboard3/WrapperLowergroup";
                
                import { WrapperLowestgroup } from "./Artboard3/WrapperLowestgroup";
                
          export function WrapperArtboard3(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"471px","height":"635px"}}>
          
                {props.uppergroup && <WrapperUppergroup style={{"position":"absolute","left":"54px","top":"71px","width":"352px","height":"207px"}} />}
                
                {props.lowergroup && <WrapperLowergroup style={{"position":"absolute","left":"54px","top":"352px","width":"352px","height":"122px"}} />}
                
                {props.lowestgroup && <WrapperLowestgroup style={{"position":"absolute","left":"54px","top":"474px","width":"352px","height":"122px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperArtboard3, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, uppergroup:
        {
          title: "uppergroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, lowergroup:
        {
          title: "lowergroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, lowestgroup:
        {
          title: "lowestgroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              