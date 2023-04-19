import { StoryObj } from '@storybook/react';
import BigWord from './BigWord';
import { withFormatting } from "../hoc/with-formatting/withFormatting";

export default {
  component: withFormatting(BigWord),
  title: "UI/FormattedBigWord",

};


export const Primary: StoryObj<typeof BigWord> = {
  args: {
    contentColor: "red",
    size: 10,
    content: "big_big_word",
    shadowColor: "blue",
    kerning: 10
  },

};

Primary.argTypes = {
  content: {
    description: "add @BR@ for line breaks"
  }
}