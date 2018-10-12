import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'http://9.s.dziennik.pl/pliki/8916000/8916853-nowy-jork-900-554.jpg',
        id: 'asdaffassd',
        title: 'Meetup in New York',
        date: '2018-09-22',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor alias mollitia distinctio corporis.',
        place: 'New York'
      },
      {
        imageUrl:
          'https://zwiedzamyparyz.pl/wp-content/uploads/2017/12/ciekawe-miejsca-paryz.jpg',
        id: 'asdfasdvcf',
        title: 'Meetup in Paris',
        date: '2018-09-25',
        description: 'Deleniti similique reiciendis asperiores temporibus reprehenderit neque omnis libero!',
        place: 'Paris'
      }
    ],
    user: {
      id: 'asdjioasd1',
      registeredMeetups: ['asdfasdvcf']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'qwerty123'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
