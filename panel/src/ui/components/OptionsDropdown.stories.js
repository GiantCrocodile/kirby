import OptionsDropdown from "./OptionsDropdown.vue";
import Padding from "../storybook/Padding.js";
import { action } from "@storybook/addon-actions";

export default {
  title: "UI | Dropdown / Options Dropdown",
  decorators: [Padding],
  component: OptionsDropdown
};

export const single = () => ({
  computed: {
    options() {
      return [
        { icon: "edit", text: "Edit", click: "edit" },
      ];
    }
  },
  methods: {
    option: action("option")
  },
  template: `
    <div class="flex justify-end bg-white">
      <k-options-dropdown
        :options="options"
        @option="option"
      />
    </div>
  `
});

export const multiple = () => ({
  ...single(),
  computed: {
    options() {
      return [
        { icon: "edit", text: "Edit", click: "edit" },
        { icon: "trash", text: "Delete", click: "delete" }
      ];
    }
  },
  template: `
    <div class="flex justify-end bg-white">
      <k-options-dropdown
        :options="options"
        @option="option"
      />
    </div>
  `
});

export const customIcon = () => ({
  ...multiple(),
  template: `
    <div class="flex justify-end bg-white">
      <k-options-dropdown
        :options="options"
        icon="settings"
        @option="option"
      />
    </div>
  `
});

export const lightTheme = () => ({
  ...multiple(),
  template: `
    <div class="flex justify-end bg-black text-white">
      <k-options-dropdown
        :options="options"
        icon="settings"
        theme="light"
        @option="option"
      />
    </div>
  `
});

export const alignLeft = () => ({
  ...multiple(),
  template: `
    <div class="flex justify-start bg-white text-black">
      <k-options-dropdown
        :options="options"
        align="left"
        icon="settings"
        @option="option"
      />
    </div>
  `
});

