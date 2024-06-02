import React, { useState } from 'react'
import * as yup from "yup";

import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { EventsSchema } from "../../../../schemas";

import TextFieldBase from "../../../../components/Inputs/TextFieldBase";
import CheckBox from '../../../../components/Inputs/CheckBox';
import Button from '../../../../components/Inputs/Button';
import ButtonText from '../../../../components/Inputs/ButtonText';
import InputFileSearch from '../../../../components/Inputs/InputFileSearch';

import ImgPreview from '../../../../components/ImgPreview';

import EventFormTitle from './EventFormTitle';

import styles from "./RegisterEventForm.module.css";
import Swal from 'sweetalert2';

import useEvents from '../../../../hooks/useEvents';

type FormFields = yup.InferType<typeof EventsSchema>

const STATE_SELECT = [
    {
        name: "AL",
        id: "AL"
    },
    {
        name: "AK",
        id: "AK"
    },
    {
        name: "AS",
        id: "AS"
    },
    {
        name: "AZ",
        id: "AZ"
    },
    {
        name: "AR",
        id: "AR"
    },
    {
        name: "CA",
        id: "CA"
    },
    {
        name: "CO",
        id: "CO"
    },
    {
        name: "CT",
        id: "CT"
    },
    {
        name: "DE",
        id: "DE"
    },
    {
        name: "DC",
        id: "DC"
    },
    {
        name: "FM",
        id: "FM"
    },
    {
        name: "FL",
        id: "FL"
    },
    {
        name: "Ge",
        id: "GA"
    },
    {
        name: "GU",
        id: "GU"
    },
    {
        name: "HI",
        id: "HI"
    },
    {
        name: "ID",
        id: "ID"
    },
    {
        name: "IL",
        id: "IL"
    },
    {
        name: "IN",
        id: "IN"
    },
    {
        name: "IA",
        id: "IA"
    },
    {
        name: "KS",
        id: "KS"
    },
    {
        name: "KY",
        id: "KY"
    },
    {
        name: "LA",
        id: "LA"
    },
    {
        name: "ME",
        id: "ME"
    },
    {
        name: "MH",
        id: "MH"
    },
    {
        name: "MD",
        id: "MD"
    },
    {
        name: "MA",
        id: "MA"
    },
    {
        name: "MI",
        id: "MI"
    },
    {
        name: "MN",
        id: "MN"
    },
    {
        name: "MS",
        id: "MS"
    },
    {
        name: "MO",
        id: "MO"
    },
    {
        name: "MT",
        id: "MT"
    },
    {
        name: "NE",
        id: "NE"
    },
    {
        name: "NV",
        id: "NV"
    },
    {
        name: "NH",
        id: "NH"
    },
    {
        name: "NJ",
        id: "NJ"
    },
    {
        name: "NM",
        id: "NM"
    },
    {
        name: "NY",
        id: "NY"
    },
    {
        name: "NC",
        id: "NC"
    },
    {
        name: "ND",
        id: "ND"
    },
    {
        name: "MP",
        id: "MP"
    },
    {
        name: "OH",
        id: "OH"
    },
    {
        name: "OK",
        id: "OK"
    },
    {
        name: "OR",
        id: "OR"
    },
    {
        name: "PW",
        id: "PW"
    },
    {
        name: "PA",
        id: "PA"
    },
    {
        name: "PR",
        id: "PR"
    },
    {
        name: "RI",
        id: "RI"
    },
    {
        name: "SC",
        id: "SC"
    },
    {
        name: "SD",
        id: "SD"
    },
    {
        name: "TN",
        id: "TN"
    },
    {
        name: "TX",
        id: "TX"
    },
    {
        name: "UT",
        id: "UT"
    },
    {
        name: "VT",
        id: "VT"
    },
    {
        name: "VI",
        id: "VI"
    },
    {
        name: "VA",
        id: "VA"
    },
    {
        name: "WA",
        id: "WA"
    },
    {
        name: "WV",
        id: "WV"
    },
    {
        name: "WI",
        id: "WI"
    },
    {
        name: "WY",
        id: "WY"
    }
]

const initValues:FormFields = { 
    title: '',
    category: '1',
    startdate: new Date(),
    enddate: null,
    starttime: '',
    endtime: '',
    description: '',
    provider: '',
    location_details : '',
    location: '',
    street: '',
    city: '',
    state: 'CA',
    zipcode: '',
    addinfo: '',
    addurl: '',
    price: '',
    locationurl: ''
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function prepareDateEventInfo(date:Date | null, time:string | undefined) {
    let info = ""

    if (date && !isNaN(date)) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        info = `${year}-${month}-${day}`
    }

    if (time && time != "") {
        const [hour, min] = time.split(':')

        info += ` ${hour}:${min}`
    }

    return info
}

export default function RegisterEventForm(): React.ReactElement {

    const { categories } =useEvents()

    const [img64Base, setImg64Base] = React.useState<string | undefined>(undefined)
    const [showImgError, setShowImgError] = React.useState<boolean>(false)
    //const [inputFileRef, setInputFileRef] = React.useState<React.RefObject<HTMLInputElement> | null>(null)

    const [wholeDayEvent, setWholeDayEvent] = useState(false)
    const [onlineEvent, setOnlineEvent] = useState(false)
    //const [startDate, set]

    const methods = useForm<FormFields>({
        defaultValues: initValues,
        resolver: yupResolver(EventsSchema), 
        mode: "onChange"
    });

    const onSubmit = (data:FormFields) => {

        if (!img64Base) {
            setShowImgError(true)
            return; // EXIT IF WE DON'T HAVE AN IMAGE
        } 

        const location = {
            name: data.location,
            address: `${data.street}, ${data.city}, ${data.state}, ${data.zipcode}`,
            url: data.locationurl
        }

        

        const event = {
            title: data.title,
            description: data.description,
            start_date: prepareDateEventInfo(data.startdate, wholeDayEvent? "" : data.starttime),
            end_date: wholeDayEvent? "" : prepareDateEventInfo(data.enddate, data.endtime),
            //#TODO: ADD location_details:
            price: isNumeric(data.price)? parseFloat(data.price) : 0,
            additional_info: data.addinfo,
            additional_url: data.addurl,
            //#TODO: ADD contact_info
        }

        const organization = {
            name: data.provider
        } 

        const category = {
            id: data.category // TODO: CHECK If I can send Category ID
        }

        Swal.fire({
            title: "We have received your event!",
            text: "After our team reviews the information, we'll make sure your event gets the visibility it deserves.",
            icon: "success"
        });

        // TODO: ADD UPLOAD IMAGE

        console.log({
            location,
            event,
            organization,
            category
        })

        setShowImgError(false)
    }
    
    const handleWholeDayEvent = () => setWholeDayEvent(!wholeDayEvent)
    const handleOnlineEvent = () => setOnlineEvent(!onlineEvent)

    React.useEffect(() => {
        if (wholeDayEvent) {
            methods.reset({enddate: null, starttime: "", endtime: ""})
        }
    }, [wholeDayEvent, methods])

    return (
        <article className={styles.formContainer}>
            <FormProvider {...methods}>
                <form className={styles.eventForm} onSubmit={methods.handleSubmit(onSubmit, () => setShowImgError(true))}>
                    <div className={styles.eventDetailsContainer}>
                        <EventFormTitle title="Event Details" />
                        <TextFieldBase id="title" title='Event title*' placeholder="Event title" fullwidth={true} />
                        <TextFieldBase id="provider" title='Organization Name*' placeholder="Organization name" fullwidth={true} />
                        <div className={styles.inputGridContainer}>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 7' }}>
                                <TextFieldBase id="startdate" title='Start date*' placeholder="Start date" type="date" fullwidth={true} defaultvalue={initValues.startdate} minDate={new Date()} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 5' }}>
                                <TextFieldBase id="starttime" disabled={wholeDayEvent} title='Start time' placeholder="HH:MM" type="time" fullwidth={true} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 7' }}>
                                <TextFieldBase id="enddate" title='End date' placeholder="End date" type="date" fullwidth={true} disabled={wholeDayEvent} minDate={new Date()} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 5' }}>
                                <TextFieldBase id="endtime" disabled={wholeDayEvent} title='End time' placeholder="HH:MM" type="time" fullwidth={true} />
                            </div>
                        </div>
                        <div style={{ width: '100%', paddingBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                            <CheckBox title="Whole day" checked={wholeDayEvent} onClick={handleWholeDayEvent} />
                        </div>
                        <div className={styles.inputGridContainer}>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 6' }}>
                                <TextFieldBase id="price" title='Event Price' placeholder="Free" fullwidth={true} />
                            </div>
                        </div>
                        <TextFieldBase id="description" title='Event description' placeholder="Event description" type="textarea" fullwidth={true} />
                        <EventFormTitle title="Event Aditional Information" />
                        <TextFieldBase id="addinfo" title='Additional Info' placeholder="Additional info" fullwidth={true} />
                        <TextFieldBase id="addurl" title='Additional URL' placeholder="Additional url" fullwidth={true} />
                    </div>
                    <div className={styles.providerDetailsContainer}> 
                        <EventFormTitle title="Event Information" />
                        <ImgPreview fullwidth height={300} img64Base={img64Base} showErr={showImgError} onCancelImg={() => { setImg64Base(undefined); document.getElementById("btn_upload_event_img").value = ""; }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }} >
                            <InputFileSearch id="btn_upload_event_img" handleFileBrowser={(fr, file) => {
                                setImg64Base(fr.result?.toString())
                                console.log(file)
                            }} />
                        </div>
                        <TextFieldBase id="category" title='Event category*' placeholder="Event category" fullwidth={true} type="select" values={categories} />
                        <EventFormTitle title="Event Location" />
                        <TextFieldBase id="location" title='Location Name*' placeholder="Location name" fullwidth={true} />
                        <TextFieldBase id="locationurl" title='Location URL' placeholder="Location url" fullwidth={true} />
                        <TextFieldBase id="location_details " title='Location Details' placeholder="Location details" fullwidth={true} type="textarea" />
                        <div style={{ width: '100%', paddingBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                            <CheckBox title="Online Event" checked={onlineEvent} onClick={handleOnlineEvent} />
                        </div>
                        <TextFieldBase id="street" title='Location address' placeholder="Street" disabled={onlineEvent} fullwidth={true} />
                        <div className={styles.inputGridContainer}>
                            <div className={styles.gridFullColumn} style={{ gridColumn: 'span 5' }}>
                                <TextFieldBase id="city" title='City' placeholder="City" disabled={onlineEvent} fullwidth={true} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 3' }}>
                                <TextFieldBase id="state" title='State' placeholder="State" disabled={onlineEvent} fullwidth={true} type="select" values={STATE_SELECT} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 4' }}>
                                <TextFieldBase id="zipcode" title='Zipcode' placeholder="xxxxx" disabled={onlineEvent} fullwidth={true} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.providerFooterContainer} style={{ marginTop: '40px' }}>
                        <ButtonText text="Reset Form" onClick={() => {
                            methods.reset();
                            setOnlineEvent(false);
                            setWholeDayEvent(false);
                            setImg64Base(undefined);
                            setShowImgError(false)
                            document.getElementById("btn_upload_event_img").value = "";
                        }} />
                        <span className='non-mouse-event'>/</span>
                        <Button type="submit">Register Event</Button>
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}