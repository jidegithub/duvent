import Vue from 'vue';
import Vuex from 'vuex';
import listings from '@/listings.json';

Vue.use(Vuex);
// type EventType = {
//   id: number,
//   title: string
//   date: string
//   imageUrl: string,
//   imageAlt: string,
//   ticketAvailable: number
// }

// const removeAccentedChar = (character: string) => {
//   let char;
//   const mapAccentedHex = {
//     a: /[\xE0-\xE6]/g,
//     e: /[\xE8-\xEB]/g,
//     i: /[\xEC-\xEF]/g,
//     o: /[\xF2-\xF6]/g,
//     u: /[\xF9-\xFC]/g,
//     c: /\xE7/g,
//   };

//   Object.keys(mapAccentedHex).forEach((e) => {
//     const regularExpression = mapAccentedHex[e];
//     char = character.replace(regularExpression, e);
//   });

//   // for (const letter in mapAccentedHex) {
//   //   const regularExpression = mapAccentedHex[letter];
//   //   character = character.replace(regularExpression, letter);
//   // }

//   return char;
// };

// type StateType = {
//   listings: EventType []
//   searchEvent: null
//   filteredEvents: EventType []
// }

export default new Vuex.Store({
  state: {
    listings: listings.data,
    searchEvent: null,
    filteredEvents: null,
  },
  mutations: {
    FILTERED_EVENTS(state, word) {
      // const filter = new RegExp(word, 'i');
      // return state.filteredEvents = state.listings.filter((el) => el.title.match(filter)
      if (!(word) || word === '{}') {
        state.searchEvent = null;
        state.filteredEvents = null;
      } else {
        state.searchEvent = word;
        state.filteredEvents = state.listings
          .filter((event) => event.title.toLowerCase().includes(word));
        // this.Locations.filter(el => el.name.match(filter))
      }
    },
  },
  actions: {
    FILTERED_EVENTS({ commit }, word) {
      commit('FILTERED_EVENTS', word);
    },
  },
  getters: {
    getEventData: (state) => state.listings,
    getFilteredEvents: (state) => state.filteredEvents,
    getFilteredEventCount: (state) => state.filteredEvents?.length,
    getEventCount: (state) => state.listings.length,
  },
  modules: {
  },
});
