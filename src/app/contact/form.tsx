/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import TextAreaComponent from '@/components/forms/CustomInput'
import InputComponent from '@/components/forms/Input'
import React, { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { sleep } from '@/utils/sleep';

export default function ContactForm() {
    const router = useRouter();

    const [emailInput, setEmailInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const [error, setError] = useState<string | undefined>();
    const [nameError, setNameError] = useState<string | undefined>();
    const [emailError, setEmailError] = useState<string | undefined>();
    const [phoneError, setPhoneError] = useState<string | undefined>();
    const [messageError, setMessageError] = useState<string | undefined>();

    const sendApproval = async () => {
        await fetch("/api/approve-email-listing", {
            method: "POST",
            body: JSON.stringify({
                name: nameInput,
                email: emailInput,
                phone: phoneInput,
            })
        })
    }

    const submitForm = async () => {
        try {
            await fetch("/api/send-contact-email", {
                method: "POST",
                body: JSON.stringify({
                    name: nameInput,
                    email: emailInput,
                    phone: phoneInput,
                    message: messageInput
                })
            })
            await sendApproval();
            setNameError('')
            setEmailError('')
            setPhoneError('')
            setMessageError('')
            toast.success("Your message has been sent successfully.")
            await sleep(3000)
            router.push("/")
        } catch (error) {
            setNameError('')
            setEmailError('')
            setPhoneError('')
            setMessageError('')
            toast.error("There was an error sending your message")
        }
    }

    const nameValidation = useDebouncedCallback(() => {
        if (nameInput.length > 0 && nameInput.length < 5) {
            setNameError("Your name must be longer than 5 characters")
            return;
        } else {
            setNameError(undefined)
        }
    }, 300)

    const emailValidation = useDebouncedCallback(() => {
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-z]{2,}$/;
        if (emailInput.length > 0) {
            if (emailInput.length < 1) {
                setEmailError("This is a required field")
            } else if (!regex.test(emailInput)) {
                setEmailError("This must be a valid email address")
                return;
            } else if (emailInput.length > 5 && !regex.test(emailInput)) {
                setEmailError("Invalid Email")
                return;
            } else {
                setEmailError(undefined)
            }
        }
    }, 300)

    const phoneValidation = useDebouncedCallback(() => {
        const phoneRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
        if (phoneInput.length > 0) {
            if (phoneInput.length < 1) {
                setPhoneError("This is a required field")
                return;
            } else if (!phoneRegex.test(phoneInput)) {
                setPhoneError("Phone numbers must be in this format: <plus sign><countrycode> <phone number>")
                return;
            } else if (!phoneRegex.test(phoneInput) && phoneInput.length > 5) {
                setPhoneError("Invalid Phone number")
                return;
            } else {
                setPhoneError(undefined)
            }
        }
    }, 300)

    const messageValidation = useDebouncedCallback(() => {
        if (messageInput.length > 0) {
            if (messageInput.length < 10) {
                setMessageError("Please provide a more detailed information")
            } else {
                setMessageError(undefined)
            }
        } else {
            setMessageError(undefined)
        }
    }, 300)


    const formValidation = useDebouncedCallback(() => {
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-z]{2,}$/;
        const phoneRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;

        if (nameInput.length > 5 && emailInput.length > 1 && phoneInput.length > 1 && regex.test(emailInput) && phoneRegex.test(phoneInput)) {
            setError(undefined)
        }
    }, 300)

    useEffect(() => {
        nameValidation();

        emailValidation();

        phoneValidation();

        messageValidation();

        formValidation();
    }, [emailInput,
        nameInput,
        phoneInput,
        messageInput,])

    return (
        <div className="dark:bg-light/20 bg-dark/10 hover:bg-dark/5 dark:hover:bg-light/5 p-3 lg:py-8 lg:px-6 rounded-xl bg-blur ">
            <form method='POST' action={submitForm} className="w-full p-0 gap-y-">
                {error !== undefined && <span className="relative w-full bg-red-300 py-2 px-6 text-center text-red-700 text-xs font-semibold rounded-lg flex">{error}</span>}
                <div>
                    <InputComponent autocomplete={false} setStateProp={setNameInput} type="text" id="id_name" name="name" text="Full Name" capitalize={false} focus={true} />
                    {nameError !== undefined && <span className="relative bg-red-300 py-2 px-6 w-full text-center text-red-700 text-xs font-semibold rounded-lg flex">{nameError}</span>}
                </div>

                <div>
                    <InputComponent autocomplete={false} setStateProp={setEmailInput} type="email" id="id_email" name="email" text="Email Address" capitalize={false} focus={false} />
                    {emailError !== undefined && <span className="relative bg-red-300 py-2 px-6 w-full text-center text-red-700 text-xs font-semibold rounded-lg flex">{emailError}</span>}
                </div>

                <div>
                    <InputComponent autocomplete={false} setStateProp={setPhoneInput} type="tel" id="id_phone" name="phone" text="Mobile Number" capitalize={false} focus={false} />
                    {phoneError !== undefined && <span className="relative bg-red-300 py-2 px-6 w-full text-center text-red-700 text-xs font-semibold rounded-lg flex">{phoneError}</span>}
                </div>

                <div>
                    <TextAreaComponent id={'message'} text={'message'} setStateProp={setMessageInput} />
                    {messageError !== undefined && <span className="relative bg-red-300 py-2 px-6 w-full text-center text-red-700 text-xs font-semibold rounded-lg flex">{messageError}</span>}
                </div>
                <button className="font-bold bg-primary text-dark py-2 px-6 rounded-lg hover:shadow hover:scale-105 duration-300 w-full ease-linear" type="submit">Submit</button>
            </form>
        </div>
    )
}
