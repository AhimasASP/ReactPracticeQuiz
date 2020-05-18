import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-7beda.firebaseio.com/'
})