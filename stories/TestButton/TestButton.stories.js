import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { TestButton } from "../../src";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/TestButton", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <div>
      <TestButton/>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));