import React from 'react';

import VideoToFull from '../../components/videotofull';

export default {
  title: 'Components/videotofull',
  component: VideoToFull,
  args: {},
}

const Template = (args) => <VideoToFull {...args} />;

export const Story = Template.bind({});
Story.args = {};
