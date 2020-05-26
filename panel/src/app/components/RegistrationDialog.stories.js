import { action } from "@storybook/addon-actions";
import Padding from "../../../storybook/theme/Padding.js";
import RegistrationDialog from "./RegistrationDialog.vue";

export default {
  title: "App | Dialogs / Registration Dialog",
  component: RegistrationDialog,
  decorators: [Padding],
};

export const regular = () => ({
  methods: {
    success: action("success"),
  },
  template: `
    <div>
      <k-button @click="$refs.dialog.open()" class="mb-8">Open</k-button>

      <k-text theme="help">
        Use: <b>K3-test</b> for a successful registration.
      </k-text>

      <k-registration-dialog
        ref="dialog"
        @success="success"
      />
    </div>
  `
});