import React from 'react'
import Link from 'next/link'
import { auth, signOut } from '../../../auth'
import { Button } from '../ui/button'

const Header = async () => {
    const session = await auth()
    return (
        <div className="flex justify-between container mx-auto py-4">
            <h1 className="font-bold text-xl">LMS</h1>
            {
                session ? (
                    <div className='flex items-center gap-3'>
                        <h1 className='font-mono text-xl'>{session.user.email}</h1>
                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <Button type="submit">Signout</Button>
                        </form>
                    </div>)
                    :
                    <Link href={'/signin'}><Button>Signin</Button></Link>
            }
        </div>
    )
}

export default Header

