"use client"

import { useParams } from 'next/navigation';
import React from 'react'

export default function Detail() {
  const params = useParams<{ slug: string }>();
  return (
    <div>
NEWS READS/PULICATIONS
    </div>
  )
}
