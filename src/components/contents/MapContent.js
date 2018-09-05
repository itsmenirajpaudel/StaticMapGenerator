import React from "react";

const MapContent = function(props) {
    return (
        <div className="posts">
            <h1 className="content-subhead">Map Preview</h1>
            <section className="post">
                <img
                    onError={props.onImageError}
                    onLoad={props.onImageLoad}
                    src={props.model.url}
                    alt="api key is either empty or invalid"
                />
            </section>
        </div>
    );
};

export { MapContent };
