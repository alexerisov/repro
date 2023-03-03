import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WithHeaderLayout } from "~components/shared/WithHeaderLayout/WithHeaderLayout";

import { Layout } from "./Layout";

export default {
  title: "Layouts/Layout",
  component: Layout
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => (
  <Layout pageTitle="Layout" pageDescription="Description">
    {args.children}
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div className="bg-yellow-200">Page content</div>
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  children: (
    <WithHeaderLayout>
      <div className="bg-yellow-200">Page content</div>
    </WithHeaderLayout>
  )
};

export const WithAbsoluteHeader = Template.bind({});
WithAbsoluteHeader.args = {
  children: (
    <WithHeaderLayout headerAbsolute>
      <div className="bg-yellow-200">Page content</div>
    </WithHeaderLayout>
  )
};
