import React from "react";

const MapContent = function(props) {
    return (
        <div className="posts">
            <h1 className="content-subhead">Map Preview</h1>
            <section className="post">
                <img src={props.model.url} alt="api key is required" />
            </section>
        </div>
    );
};

export { MapContent };
