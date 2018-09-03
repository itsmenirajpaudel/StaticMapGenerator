import React from "react";
import { CodeContent } from "./contents/CodeContent";
import { MapContent } from "./contents/MapContent";
import { Footer } from "./contents/Footer";

class Content extends React.Component {
    render() {
        let elem;
        if (this.props.apiKey) elem = <CodeContent model={this.props.model} />;
        else elem = "";

        return (
            <div className="content pure-u-2-3 pure-u-md-2-3">
                <div>
                    <MapContent model={this.props.model} />
                    {elem}
                    <Footer />
                </div>
            </div>
        );
    }
}

export { Content };
