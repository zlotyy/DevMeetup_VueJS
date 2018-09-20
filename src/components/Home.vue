<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                        v-for="meetup in meetups" 
                        :src="meetup.imageUrl" 
                        :key="meetup.id"
                        @click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/08/13/03/01/new-york-1590175_960_720.jpg',
          id: 'asdaffassd',
          title: 'Meetup in New York'
        },
        {
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg',
          id: 'asdfasdvcf',
          title: 'Meetup in Paris'
        }
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>