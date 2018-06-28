import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Button } from "../../src";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Button", module);
stories
    .addDecorator(checkA11y)
    .addDecorator(withKnobs);

const EsempiComponent = () => (
    <section>
        <div className="my-1">
            <Button color="primary" className="mx-1">primary</Button>
            <Button color="primary" className="mx-1" active>primary active</Button>
            <Button color="primary" className="mx-1" outline>primary outline</Button>
            <Button color="primary" className="mx-1" disabled>primary disabled</Button>
        </div>
        <div className="my-1">
            <Button color="secondary" className="mx-1">secondary</Button>
            <Button color="secondary" className="mx-1" active>secondary active</Button>
            <Button color="secondary" className="mx-1" outline>secondary outline</Button>
            <Button color="secondary" className="mx-1" disabled>secondary disabled</Button>
        </div>
    </section>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DimensioniComponent = () => (
    <section>
        <div className="my-1">
            <Button color="primary" size="lg">Large Button</Button>
        </div>
        <div className="my-1">
            <Button color="primary" size="sm">Small Button</Button>
        </div>
        <div className="my-1">
            <Button color="primary" size="xs">Mini Button</Button>
        </div>
        <div className="my-1">
            <Button color="primary" block>Block level button</Button>
        </div>
    </section>
);
stories.add(
    "Dimensioni",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const EsempiInterattiviComponent = () => {
    const colors = [
        "primary",
        "secondary"
    ];
    const dimensions = ["xs", "sm", "md", "lg"];
    const color = select("Variazioni", colors, colors[0]);
    const outline = boolean("Outline", false);
    const dimension = select("Dimensioni", dimensions, dimensions[2]);
    const block = boolean("Block", false);
    const active = boolean("Attivo", false);
    const disabled = boolean("Disabilitato", false);
    const label = text("Label", "");

    return (
        <Button color={color} block={block} active={active} disabled={disabled} outline={outline} size={dimension}>
            {label ? label : "Bottone di Esempio"}
        </Button>
    );
};
stories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
