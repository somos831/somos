import * as yup from "yup";

export const EventsSchema = yup.object({
    name: yup.string().required('Event name is required'),
    category: yup.string().required('Event category is required'),
    date: yup.date().typeError("Please enter a valid date").required('Event date is required'),
    starttime: yup.string(),
    endtime: yup.string(),
    description: yup.string(),
    provider: yup.string().required('Event provider is required'),
    url: yup.string(),
    location: yup.string().required('Event location is required'),
    street: yup.string(),
    city: yup.string(),
    state: yup.string(),
    zipcode: yup.string(),
})