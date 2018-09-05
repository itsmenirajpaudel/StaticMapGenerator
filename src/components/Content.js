import React from "react";
import { CodeContent } from "./contents/CodeContent";
import { MapContent } from "./contents/MapContent";
import { Footer } from "./contents/Footer";

class Content extends React.Component {
    render() {
        let elem;
        if (this.props.apiKey)
            elem = (
                <CodeContent
                    invalidKey={this.props.invalidKey}
                    model={this.props.model}
                />
            );
        else elem = "";

        return (
            <div className="content pure-u-2-3 pure-u-md-2-3">
                <div>
                    <MapContent
                        onImageError={this.props.onImageError}
                        model={this.props.model}
                        invalidKey={this.props.invalidKey}
                        onImageLoad={this.props.onImageLoad}
                    />
                    {elem}
                    <Footer />
                </div>
            </div>
        );
    }
}

export { Content };
