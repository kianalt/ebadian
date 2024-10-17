import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  headers: {
    origin: process.env.ORIGIN || process.env.NEXT_PUBLIC_ORIGIN,
  },
})

/* eslint-disable no-console */
const request = ({ method, url, data = null, params = null, headers = null }) =>
  axiosInstance({
    method,
    url,
    data,
    params,
    headers: {
      ...axiosInstance.headers,
      ...headers,
    },
  })
    .then(res => {
      if (typeof window !== 'undefined') {
        console.log(res)
      }
      return res
    })
    .catch(err => {
      console.error(err, err.response)
      if (err && err.response && err.response.status === 401) {
        if (localStorage.getItem('authToken')) {
          localStorage.removeItem('authToken')
          window.location.reload()
        }
      }

      if (
        err &&
        err.response &&
        err.response.status === 404 &&
        window.location.pathname !== '/404'
      ) {
        window.location.href = '/404'
      }
      throw err
    })
/* eslint-enable no-console */

const api = {}

// Blog
api.getBlogList = ({ urlParams, params }) =>
  request({
    method: 'get',
    url: `/blog/${urlParams.blogType}`,
    params,
  })

api.getBlogBySlug = ({ urlParams }) =>
  request({
    method: 'get',
    url: `/blog/${urlParams.blogType}/slug/${urlParams.slug}`,
  })

// BlogCategory
api.getBlogCategoryList = ({ urlParams }) =>
  request({
    method: 'get',
    url: `/blogcategory/${urlParams.blogType}`,
  })

// Comment
api.postComment = ({ data }) =>
  request({
    method: 'post',
    url: `/comment`,
    data,
  })

// Content
api.getContentList = ({ urlParams, params }) =>
  request({
    method: 'get',
    url: `/content/${urlParams.contentType}`,
    params,
  })

// Form
api.postForm = ({ urlParams, data }) =>
  request({
    method: 'post',
    url: `/form/${urlParams.formType}`,
    data,
  })

// Info
api.getInfoByName = ({ urlParams }) =>
  request({
    method: 'get',
    url: `/info/name/${urlParams.name}`,
  })

// Upload
api.postUploadFile = ({ urlParams, data }) =>
  request({
    method: 'post',
    url: `/upload/user/${urlParams.type}`,
    data,
  })

// User
api.postOtp = ({ data }) =>
  request({
    method: 'post',
    url: '/user/otp',
    data,
  })

api.postLogin = ({ data }) =>
  request({
    method: 'post',
    url: '/user/login',
    data,
  })

api.postRegister = ({ data }) =>
  request({
    method: 'post',
    url: '/user/register',
    data,
  })

api.getMe = () =>
  request({
    method: 'get',
    url: '/user/me',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })

export default api
