import Homepage from './Homepage.vue';

export default {
  title: "Pages|Homepage",
};

export const Default = () => ({
  components: { Homepage },
  template: `
  <Homepage />
`
});
