import React from "react";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                width: 600,
                height: 300,
                maptype: "roadmap",
                format: "png",
                center: "Kathmandu,+Nepal",
                zoom: 13,
                scale: 1,
                key: ""
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.imageInfo = {
            baseUrl:
                "https://maps.googleapis.com/maps/api/staticmap?visual_refresh=true"
        };
        this.imageInfo.url = this.generateNew(this.state.model);
        this.imageInfo.linkUrl =
            "https://www.google.com/maps/place/Kathmandu,+Nepal/";
        this.imageInfo.directionUrl =
            "https://www.google.com/maps/dir//Kathmandu,+Nepal/";
    }

    generateNew(model) {
        let url =
            this.imageInfo.baseUrl +
            "&size=" +
            model.width +
            "x" +
            model.height;
        url += "&maptype=" + model.maptype;
        url += "&format=" + model.format;
        url += "&center=" + model.center;
        url += "&zoom=" + model.zoom;
        url += "&scale=" + model.scale;
        if (model.key) url += "&key=" + model.key;
        return url;
    }

    onInputChange(event) {
        const { id: field } = event.target;
        let { value } = event.target;
        if (field === "scale") {
            value = event.target.checked ? 2 : 1;
        }
        this.setState(prevState => {
            const obj = prevState.model;
            obj[field] = value;
            this.imageInfo.url = this.generateNew(obj);
            return {
                model: obj
            };
        });
    }

    render() {
        return (
            <div id="layout" className="pure-g">
                <Sidebar
                    onInputChange={this.onInputChange}
                    model={this.state.model}
                />
                <Content apiKey={this.state.model.key} model={this.imageInfo} />
            </div>
        );
    }
}

export { Map };
