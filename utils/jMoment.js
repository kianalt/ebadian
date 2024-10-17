import jMoment from 'moment-jalaali'

// jalali initiate
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })

export default jMoment
