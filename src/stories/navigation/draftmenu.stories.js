import React from 'react';

import DraftMenu from '../../components/draftmenu';

export default {
  component: DraftMenu,
  args: {},
}

const Template = (args) => <DraftMenu {...args} />;

export const Story = Template.bind({});
Story.args = {};
