/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.scss"

import { useFormik } from "formik"
import * as Yup from "yup"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ product }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },

        // Validation
        validationSchema: Yup.object({
            name: Yup.string().max(20, "Name should not be longer than 20 charachters").required("Name is required"),
            email: Yup.string().email("Invalid Email address").required("email is required"),
            message: Yup.string().required("message is required")
        }),
        onSubmit: (values, { resetForm }) => {
            setIsSending(true)
            emailjs.sendForm('service_y4a4o9q', 'template_nvb77lx', form.current, 'AfEovHkTNppUrc1A2')
                .then((result) => {
                    toast.success('Message sent successfully'); // Show success notification
                    setIsSending(false)
                }, (error) => {
                    toast.error('Error sending message'); // Show error notification
                });

            resetForm({ values: "" })
        }

    })

    return (
        <div className='contact-form' >
            {!product && <h2>Send us a Message</h2>}
            {product && <h2>Enquire About {product?.name}</h2>}
            <form ref={form} className="form-control" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">
                    {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p> : <p>Your name <span>(required)</span></p>}
                    <input type="text" placeholder="enter your name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.name && formik.errors.name ? "input-error" : ""} />

                </label>
                <label htmlFor="Email">
                    {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : <p>Email <span>(required)</span></p>}
                    <input type="email" placeholder="example@gmail.com" name="email" value={formik.values.email} onChange={formik.handleChange} className={formik.touched.email && formik.errors.email ? "input-error" : ""} onBlur={formik.handleBlur} />
                </label>
                <label htmlFor="message">
                    {formik.touched.message && formik.errors.message ? <p className='error'>{formik.errors.message}</p> : <p>Message <span>(required)</span></p>}
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="type here..." className="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {product && <input type="hidden" name="product_name" value={product?.name} />}
                </label>
                <div className="btn-container">
                    <button className="send-email-btn" type='submit' disabled={!(formik.isValid && formik.dirty)}> {isSending ? 'Sending...' : 'Send Message'}</button>
                    {formik.errors.name || formik.errors.email || formik.errors.message ? <p className='error'>Please fill all input boxes!</p> : ""}
                </div>
            </form>
        </div>
    )
}

export default Form