const app = Vue.createApp({
    data() {
        return {
            finishCourse: 'Need to Finish Vue Course',
            aboutVueLink: 'https://vuejs.org/'
        };
    }
});
app.mount('#user-goal'); // as we are using the id:user-goal from the HTML <section> ele we have full contrl on this