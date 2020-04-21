import Icon from "./Icon.vue";
import Padding from "../storybook/Padding.js";

export default {
  title: "UI | Media / Icon",
  decorators: [Padding],
  component: Icon
};

export const iconset = () => ({
  data() {
    return {
      icons: []
    }
  },
  mounted() {
    this.icons = Array.from(document.querySelectorAll('.k-icons symbol')).map(symbol => {
      return symbol.id.replace("icon-", "");
    });
  },
  template: `
    <k-auto-grid style="--gap: 1.5rem; --min: 30rem">
      <section>
        <k-auto-grid style="--gap: 1px; --min: 11rem">
          <figure
            v-for="icon in icons"
            :key="icon"
            class="bg-white flex items-center p-3"
          >
            <k-icon
              :type="icon"
              class="mr-2"
            />
            <figcaption class="text-sm text-gray">{{ icon }}</figcaption>
          </figure>
        </k-auto-grid>
      </section>

      <section>
        <k-auto-grid style="--gap: 1px; --min: 11rem" class="bg-dark">
          <figure
            v-for="icon in icons"
            :key="icon"
            class="bg-black flex items-center p-3 text-white"
          >
            <k-icon
              :type="icon"
              class="mr-2"
            />
            <figcaption class="text-sm text-gray-light">{{ icon }}</figcaption>
          </figure>
        </k-auto-grid>
      </section>

    </k-auto-grid>
  `,
});

export const colors = () => ({
  computed: {
    darkColors() {
      return [
        "black",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "aqua",
        "blue",
        "purple",
      ];
    },
    lightColors() {
      return [
        "white",
        "gray-light",
        "red-light",
        "orange-light",
        "yellow-light",
        "green-light",
        "aqua-light",
        "blue-light",
        "purple-light",
      ];
    }
  },
  template: `
    <div>
      <k-auto-grid style="--min: 6rem; --gap: 1.5rem" class="bg-white p-8 mb-6">
        <div
          v-for="color in darkColors"
          :key="color"
          class="text-center"
        >
          <k-headline size="small" class="mb-3">{{ color }}</k-headline>
          <k-icon
            :color="color"
            type="edit"
          />
        </div>
      </k-auto-grid>

      <k-auto-grid style="--min: 6rem; --gap: 1.5rem" class="bg-pattern p-8 mb-6 text-white">
        <div
          v-for="color in lightColors"
          :key="color"
          class="text-center"
        >
          <k-headline size="small" class="mb-3">{{ color }}</k-headline>
          <k-icon
            :color="color"
            type="edit"
          />
        </div>
      </k-auto-grid>
    </div>
  `,
});

export const sizes = () => ({
  template: `
    <div>

      <k-auto-grid style="--gap: 1.5rem">
        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="small"
            type="edit"
          />
          <figcaption class="text-sm text-gray">
            small (default)
          </figcaption>
        </figure>

        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="medium"
            type="edit"
          />
          <figcaption class="text-sm text-gray">
            medium
          </figcaption>
        </figure>

        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="large"
            type="edit"
          />
          <figcaption class="text-sm text-gray">
            large
          </figcaption>
        </figure>

      </k-auto-grid>
    </div>
  `,
});

export const emoji = () => ({
  template: `
    <k-auto-grid style="--min: 3rem">
      <k-icon :emoji="true" type="🤯" />
      <k-icon :emoji="true" type="😱" />
      <k-icon :emoji="true" type="❤️" />
      <k-icon :emoji="true" type="🎉" />
      <k-icon :emoji="true" type="🚀" />
      <k-icon :emoji="true" type="🤘" />
    </k-auto-grid>
  `,
});





