import Vue from 'vue';
import Vuex from 'vuex';
import listings from '@/listings.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listings: listings.data,
    searchEvent: null,
    filteredEvents: null,
    selectedEvent: {},
  },
  mutations: {
    FILTERED_EVENTS(state, word) {
      if (!(word) || word === '{}') {
        state.searchEvent = null;
        state.filteredEvents = null;
      } else {
        state.searchEvent = word;
        state.filteredEvents = state.listings
          .filter((event) => event.title.toLowerCase().includes(word));
      }
      // const found = state.listings
      //     .filter((event) => event.title.toLowerCase().includes(word));
      //   state.filteredEvents = [state.filteredEvents, ...found];
    },
    FIND_EVENT(state, id) {
      if (id) {
        const found = state.listings.find((event) => event.id === parseInt(id, 10));
        Object.assign(state.selectedEvent, found);
      }
    },
  },
  actions: {
    FILTERED_EVENTS({ commit }, word) {
      commit('FILTERED_EVENTS', word);
    },
    FIND_EVENT({ commit }, id) {
      commit('FIND_EVENT', id);
    },
  },
  getters: {
    getEventData: (state) => state.listings,
    getFilteredEvents: (state) => state.filteredEvents,
    getFilteredEventCount: (state) => state.filteredEvents?.length,
    getEventCount: (state) => state.listings.length,
    getSelectedEvent: (state) => state.searchEvent,
  },
  modules: {
  },
});
