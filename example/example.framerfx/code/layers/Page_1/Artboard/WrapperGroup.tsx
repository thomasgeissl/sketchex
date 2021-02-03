
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgBackground } from "./group/Background";
                
                import {SvgRectangle } from "./group/Rectangle";
                
                import { WrapperSubgroup } from "./group/WrapperSubgroup";
                
          export function WrapperGroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"83px","top":"106px","width":"360px","height":"492px"}}>
          
          {props.Background && <SvgBackground style={{"position":"absolute","left":"0px","top":"0px","width":"360px","height":"492px"}} />
          }
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"41px","top":"32px","width":"139px","height":"140px"}} />
          }
                {props.subgroup && <WrapperSubgroup style={{"position":"absolute","left":"95px","top":"313px","width":"225px","height":"72px"}} />}
                
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
      }, Background:
        {
          title: "Background",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, Rectangle:
        {
          title: "Rectangle",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, subgroup:
        {
          title: "subgroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              