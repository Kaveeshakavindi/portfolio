import React from 'react'
import { FormData } from '@/app/contact/page'
import { error } from 'console'

export default function sendEmail(data : FormData) {
  console.log(data)

  const apiEndPoint = '/api/email'

  fetch(apiEndPoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((response) => {
    alert(response.message)
  })
  .catch((err) => {
    alert(err)
  })
}
