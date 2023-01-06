import Pet from "../Pet";
import propTypes from "prop-types"

export default {
  title: "Pet",
  component: Pet,
  args,
};

const Template = (args) => <Pet {...args} />;

export const petComponent = Template.bind({});

petComponent.args = {
  name: "luna",
  animal: "dog",
  breed: "Havanese",
  images: "http://pets-images.dev-apis.com/pets/none.jpg",
  location: "Seattle",
  id: "1",
};
