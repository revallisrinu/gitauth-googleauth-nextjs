import React from 'react'
import {auth} from "./auth"
import { redirect } from 'next/navigation'
import Link from 'next/link'

const page = async() => {

  const session=await auth()

  if (!session){
     redirect("api/auth/signin")
  }

  return (
    <div>
      <h1>welcome to Landing page</h1>
      <Link href='api/auth/signout'>
       <button>Logout</button>
      </Link>
    </div>
  )
}

export default page