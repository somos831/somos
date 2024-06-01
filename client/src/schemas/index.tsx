import * as yup from "yup";

const getDateFormat = (date: Date) => {
    const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return date.toLocaleString('en-us', options)
}

yup.addMethod(yup.string, 'compareStartTime', function(startime, errMsg) {
    return this.test(`compare-start-time`, errMsg, function(value) {
        const { path, createError } = this;
        
        if (!value) return true

        const [starthourstr, startminstr] = startime.split(':')
        const [endhourstr, endminstr] = value.split(':')

        if (parseInt(starthourstr) > parseInt(endhourstr)) return createError({ path, message: `${errMsg} ${startime}` })
        else if (parseInt(startminstr) >= parseInt(endminstr)) return createError({ path, message: `${errMsg} ${startime}` })

        return true
    })
})

yup.addMethod(yup.date, 'fixNullDate', function() {
    return this.test(`fix-null-date`, function(value) {
        
        const isValid = value instanceof Date && !isNaN(value.getTime())

        if (!isValid) value = null

        console.log('isvalid?', isValid, value)

        return true
    })
})

export const EventsSchema = yup.object({
    title: yup.string().required('Event title is required'),
    category: yup.string().required('Event category is required'),
    startdate: yup.date().default(new Date()).typeError("Please enter a valid start date").required('Event start date is required'),
    starttime: yup.string(),
    endtime: yup.string().when('starttime', (starttime, schema) => {

        if (starttime[0]) return schema.compareStartTime(starttime[0], "Event end time must be later than")

        return schema
    }),
    description: yup.string(),
    provider: yup.string().required('Event provider is required'),
    url: yup.string(),
    location: yup.string().required('Event location is required'),
    street: yup.string(),
    city: yup.string(),
    state: yup.string(),
    zipcode: yup.string(),
    enddate: yup.date().nullable().default(null).when('startdate', (startdate, schema) => { 
        if (Array.isArray(startdate) && startdate.length > 0) { 
            const firstdate = startdate[0]
            const isValid = firstdate instanceof Date && !isNaN(firstdate.getTime())

            if (!isValid) return schema;
        }

        const date = new Date(startdate[0].toISOString().split('T')[0])

        return schema.min([date], `Event end date must be later or equal than ${getDateFormat(startdate[0])}`); 
    }),
    addinfo: yup.string(),
    addurl: yup.string(),
    price: yup.string(),
})