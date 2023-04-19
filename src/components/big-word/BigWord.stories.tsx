import { Meta, StoryObj } from '@storybook/react';
import BigWord from './BigWord';

export default {
  component: BigWord,
  title: "UI/BigWord"
} as Meta<typeof BigWord>;


export const Primary: StoryObj<typeof BigWord> = {
  args: {
    contentColor: "red",
    size: 10,
    content: "BIG BIG WORD",
    shadowColor: "blue"
  },
};