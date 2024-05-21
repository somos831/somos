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

type FormFields = yup.InferType<typeof EventsSchema>

const categories = [
    { 
        id: "1",
        title: 'Sports'
    },
    { 
        id: "2",
        title: 'Conferences'
    },
    { 
        id: "3",
        title: 'Expos'
    },
    { 
        id: "4",
        title: 'Community'
    }
]

const STATE_SELECT = [
    {
        title: "AL",
        id: "AL"
    },
    {
        title: "AK",
        id: "AK"
    },
    {
        title: "AS",
        id: "AS"
    },
    {
        title: "AZ",
        id: "AZ"
    },
    {
        title: "AR",
        id: "AR"
    },
    {
        title: "CA",
        id: "CA"
    },
    {
        title: "CO",
        id: "CO"
    },
    {
        title: "CT",
        id: "CT"
    },
    {
        title: "DE",
        id: "DE"
    },
    {
        title: "DC",
        id: "DC"
    },
    {
        title: "FM",
        id: "FM"
    },
    {
        title: "FL",
        id: "FL"
    },
    {
        title: "Ge",
        id: "GA"
    },
    {
        title: "GU",
        id: "GU"
    },
    {
        title: "HI",
        id: "HI"
    },
    {
        title: "ID",
        id: "ID"
    },
    {
        title: "IL",
        id: "IL"
    },
    {
        title: "IN",
        id: "IN"
    },
    {
        title: "IA",
        id: "IA"
    },
    {
        title: "KS",
        id: "KS"
    },
    {
        title: "KY",
        id: "KY"
    },
    {
        title: "LA",
        id: "LA"
    },
    {
        title: "ME",
        id: "ME"
    },
    {
        title: "MH",
        id: "MH"
    },
    {
        title: "MD",
        id: "MD"
    },
    {
        title: "MA",
        id: "MA"
    },
    {
        title: "MI",
        id: "MI"
    },
    {
        title: "MN",
        id: "MN"
    },
    {
        title: "MS",
        id: "MS"
    },
    {
        title: "MO",
        id: "MO"
    },
    {
        title: "MT",
        id: "MT"
    },
    {
        title: "NE",
        id: "NE"
    },
    {
        title: "NV",
        id: "NV"
    },
    {
        title: "NH",
        id: "NH"
    },
    {
        title: "NJ",
        id: "NJ"
    },
    {
        title: "NM",
        id: "NM"
    },
    {
        title: "NY",
        id: "NY"
    },
    {
        title: "NC",
        id: "NC"
    },
    {
        title: "ND",
        id: "ND"
    },
    {
        title: "MP",
        id: "MP"
    },
    {
        title: "OH",
        id: "OH"
    },
    {
        title: "OK",
        id: "OK"
    },
    {
        title: "OR",
        id: "OR"
    },
    {
        title: "PW",
        id: "PW"
    },
    {
        title: "PA",
        id: "PA"
    },
    {
        title: "PR",
        id: "PR"
    },
    {
        title: "RI",
        id: "RI"
    },
    {
        title: "SC",
        id: "SC"
    },
    {
        title: "SD",
        id: "SD"
    },
    {
        title: "TN",
        id: "TN"
    },
    {
        title: "TX",
        id: "TX"
    },
    {
        title: "UT",
        id: "UT"
    },
    {
        title: "VT",
        id: "VT"
    },
    {
        title: "VI",
        id: "VI"
    },
    {
        title: "VA",
        id: "VA"
    },
    {
        title: "WA",
        id: "WA"
    },
    {
        title: "WV",
        id: "WV"
    },
    {
        title: "WI",
        id: "WI"
    },
    {
        title: "WY",
        id: "WY"
    }
]

const initValues:FormFields = { 
    name: '',
    category: '',
    date: '',
    starttime: '',
    endtime: '',
    description: '',
    provider: '',
    url: '',
    location: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
}

export default function RegisterEventForm(): React.ReactElement {

    const [img64Base, setImg64Base] = React.useState<string | undefined>(undefined)
    //const [inputFileRef, setInputFileRef] = React.useState<React.RefObject<HTMLInputElement> | null>(null)

    const [wholeDayEvent, setWholeDayEvent] = useState(false)
    const [onlineEvent, setOnlineEvent] = useState(false)

    const methods = useForm<FormFields>({
        defaultValues: initValues,
        resolver: yupResolver(EventsSchema), 
        mode: "onChange"
    });

    const onSubmit = (data:FormFields) => {

        Swal.fire({
            title: "We have received your event!",
            text: "After our team reviews the information, we'll make sure your event gets the visibility it deserves.",
            icon: "success"
        });

        console.log(data)
    }
    
    const handleWholeDayEvent = () => setWholeDayEvent(!wholeDayEvent)
    const handleOnlineEvent = () => setOnlineEvent(!onlineEvent)

    return (
        <article className={styles.formContainer}>
            <FormProvider {...methods}>
                <form className={styles.eventForm} onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.eventDetailsContainer}>
                        <EventFormTitle title="Event Details" />
                        <TextFieldBase id="name" title='Event name*' placeholder="Event name" fullwidth={true} />
                        <TextFieldBase id="provider" title='Event provider*' placeholder="Event provider" fullwidth={true} />
                        <div className={styles.inputGridContainer}>
                            <div className={styles.gridFullColumn} style={{ gridColumn: 'span 6' }}>
                                <TextFieldBase id="date" title='Event date*' placeholder="Event date" type="date" fullwidth={true} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 3' }}>
                                <TextFieldBase id="starttime" disabled={wholeDayEvent} title='Start time' placeholder="HH:MM" type="time" fullwidth={true} />
                            </div>
                            <div className={styles.gridHalfColumn} style={{ gridColumn: 'span 3' }}>
                                <TextFieldBase id="endtime" disabled={wholeDayEvent} title='End time' placeholder="HH:MM" type="time" fullwidth={true} />
                            </div>
                        </div>
                        <div style={{ width: '100%', paddingBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                            <CheckBox title="Whole day" checked={wholeDayEvent} onClick={handleWholeDayEvent} />
                        </div>
                        <div className={`${styles.categoryContainer} ${styles.gridFullColumn}`}>
                            <TextFieldBase id="category" title='Event category*' placeholder="Event category" fullwidth={true} type="select" values={categories} />
                        </div>
                        <TextFieldBase id="description" title='Event description' placeholder="Event description" type="textarea" fullwidth={true} />
                    </div>
                    <div className={styles.providerDetailsContainer}> 
                        <EventFormTitle title="Event Information" />
                        <ImgPreview fullwidth height={300} img64Base={img64Base} onCancelImg={() => { setImg64Base(undefined); document.getElementById("btn_upload_event_img").value = ""; }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }} >
                            <InputFileSearch id="btn_upload_event_img" handleFileBrowser={(fr, file) => {
                                setImg64Base(fr.result?.toString())
                                console.log(file)
                            }} />
                        </div>
                        <TextFieldBase id="url" title='Event url' placeholder="Event url" fullwidth={true} />
                        <EventFormTitle title="Event Location" />
                        <TextFieldBase id="location" title='Event location*' placeholder="Event location" fullwidth={true} />
                        <div style={{ width: '100%', paddingBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                            <CheckBox title="Online Event" checked={onlineEvent} onClick={handleOnlineEvent} />
                        </div>
                        <TextFieldBase id="street" title='Location street' placeholder="Street" disabled={onlineEvent} fullwidth={true} />
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