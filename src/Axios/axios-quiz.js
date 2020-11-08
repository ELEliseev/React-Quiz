import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-7c910.firebaseio.com/'
})