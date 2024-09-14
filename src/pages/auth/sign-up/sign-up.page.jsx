import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
    return (
        <main className='flex items-center justify-center min-h-screen container px-4'>
            <SignUp />
        </main>
    )
}

export default SignUpPage