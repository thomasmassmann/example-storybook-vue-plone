import Logo from './Logo.vue';
import './Logo.scss';

export default {
  title: 'Components|Logo',
  component: Logo,
  parameters: {
    componentSubtitle: 'Displays a linked image that represents the website',
    options: { selectedPanel: 'storybook/a11y/panel' }
  }
};

export const SiteLogo = () => ({
  components: { Logo },
  template: '<logo></logo>'
});

SiteLogo.story = { name: 'Default Site Logo' };
