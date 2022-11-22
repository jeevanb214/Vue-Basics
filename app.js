const app = Vue.createApp({
    data() {
        return {
            finishCourse: 'Need to Finish Vue Course',
            aboutVueLink: 'https://vuejs.org/',
            courseGoal1: 'Learn Vue1!', // these will acts as the global object, we can access in the method by 'this' keyword
            courseGoal2: 'Master Vue2!',
        };
    },
    methods: {
        outputGoal() {
            const randNum = Math.random();
            if (randNum < 0.5)
                return this.courseGoal1  //we can access global object by 'this' keyword
            else
                return this.courseGoal2
        }
    }
});
app.mount('#user-goal'); // as we are using the id:user-goal from the HTML <section> ele we have full contrl on this