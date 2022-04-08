<template>
  <v-app>
    <v-app-bar
      fixed
      dense
      color="primary"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>News App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <div v-for="(item, index) in news" :key="index" link>
      <v-row>
        <v-col cols="3">
          <v-navigation-drawer permanent absolute>
            <v-list dense rounded>
              <v-list-item v-for="(item, index) in news" :key="index" link>
                <v-list-item-content>
                  <v-list-item-title>{{ item.source.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="7" style="margin-top: 80px; padding-top: 24px">
          <!-- Content Here -->

          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.urlToImage"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ item.source.name }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ Date(item.publishedAt) }}</div>
              <div>{{ item.author }}</div>

              <div>{{ item.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </div>
    <v-main>
      <!-- <News /> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  computed: {
    news() {
      return this.$store.state.listNews;
    },
  },
  mounted() {
    this.$store.dispatch("fetchNews");
  },
  data() {
    return {
      drawer: true,
      items: [],
      mini: true,
    };
  },
  methods: {},
};
</script>
