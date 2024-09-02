const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: '34 Vue API',
            email: []
        };
    },
    beforeCreate(){
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(this.email);
                    this.email.push(resp.data.response);
                });
        }
        
    }
}).mount('#app');