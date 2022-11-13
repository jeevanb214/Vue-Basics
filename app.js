const app = Vue.createApp({
    data() {
        return {
            finishCourse: 'Need to Finish Vue Course',
            aboutVueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randNum = Math.random();
            if (randNum < 0.5)
                return 'Learn Vue!'
            else
                return 'Master Vue!'
        }
    }
});
app.mount('#user-goal'); // as we are using the id:user-goal from the HTML <section> ele we have full contrl on this