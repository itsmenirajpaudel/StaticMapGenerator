import React from "react";
import { SidebarForm } from "./sidebar/SidebarForm";
import { SidebarHeader } from "./sidebar/SidebarHeader";

const Sidebar = function(props) {
    return (
        <div className="sidebar pure-u-1-3 pure-u-md-1-3">
            <SidebarHeader />
            <SidebarForm
                onInputChange={props.onInputChange}
                model={props.model}
            />
        </div>
    );
};

export { Sidebar };
