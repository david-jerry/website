"use client"

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function Approve() {
  const params = useParams<{ email: string; recipient: string, phone: string }>();
  const [approve, setApprove] = useState(false)
  const router = useRouter()

  const sendApproval = async () => {
    try {
      await fetch("/api/send-contact-email", {
        method: "POST",
        body: JSON.stringify({
          name: params['recipient'],
          email: params['email'],
          phone: params['phone'],
          message: `${params['recipient']} has Approved you adding their email to your mailing list`
        })
      })
      setApprove(true)
    } catch (error) {
      setApprove(false)
      router.push("/")
    }
  }
  useEffect(() => {
    sendApproval()
  }, [])

  return (
    approve &&
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="max-w-xs lg:max-w-md p-4 round-lg bg-primary/20 mx-auto">
        <h2 className="text-3xl">Approved</h2>
        <p>You have approved for your email to be added into my mailing list.</p>
      </div>
    </div>
  )
}
