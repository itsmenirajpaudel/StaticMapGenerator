import React from "react";

const CodeContent = function(props) {
    let elem = null;
    if (!props.invalidKey) {
        elem = (
            <div className="posts">
                <h1 className="content-subhead">Code</h1>
                <section className="post">
                    <p>
                        <small>
                            Treat the code like an image — you can use HTML or
                            CSS to display it.
                        </small>
                    </p>
                    <pre className="code">{props.model.url}</pre>

                    <div>
                        <h4> HTML </h4>
                        <pre className="code">
                            &lt;img width="600" src="
                            {props.model.url}" alt="Google Map of Albany,
                            NY"&gt;
                        </pre>
                    </div>

                    <div>
                        <h5> Map with link to google maps</h5>
                        <pre className="code">
                            &lt;a href=
                            {props.model.linkUrl}
                            >&lt;img src="
                            {props.model.url}" alt="Google Map of Albany,
                            NY"&gt;&lt;/a&gt;
                        </pre>
                    </div>

                    <div>
                        <h5> Map with link to Google Maps directions</h5>
                        <pre className="code">
                            &lt;a href=
                            {props.model.directionUrl}
                            >&lt;img src="
                            {props.model.url}" alt="Google Map of Albany,
                            NY"&gt;&lt;/a&gt;
                        </pre>
                    </div>

                    <div>
                        <h4> CSS </h4>
                        <pre className="code">
                            background-image: url(
                            {props.model.url}
                            );
                        </pre>
                    </div>
                </section>
            </div>
        );
    }

    return elem;
};

export { CodeContent };
