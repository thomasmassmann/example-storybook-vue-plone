import SkipToContent from './SkipToContent.vue';
import './SkipToContent.scss';

export default {
  title: "Components|Skip To Content",
  component: SkipToContent,
};

export const Default = () => ({
  components: { SkipToContent },
  template: `<div>
  <SkipToContent></SkipToContent>
  <main id="main">Main content</main>
</div>`
});
