import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zNCIK0Lrm2VATnf_vJCb93wXV7HxL2_LsBEJTAWlj8s',
    },
})