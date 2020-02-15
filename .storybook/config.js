import { addParameters, addDecorator, configure } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import customTheme from './customTheme';

addDecorator(withA11y);

addParameters({
  options: {
    selectedPanel: 'storybook/a11y/panel',
    theme: customTheme
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
