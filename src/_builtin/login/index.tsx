import React from 'react'
import { Button, Divider, Input } from '@arco-design/web-react'
import { IconGithub, IconGoogle } from '@arco-design/web-react/icon'

export default function Login() {
  return (
    <>
      <div className='h-80px pl-20px w-screen flex items-center'>
        <IconGithub className='w-30px h-30px mr-10px' />
        <div className='font-500 text-size-16px'>Notion</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-12vh mb-24px font-700 text-size-50px">Log in</div>
        <div className="w-320px flex flex-col items-center">
          <Button className='mb-12px' type='secondary' long icon={<IconGithub />}>Continue with Github</Button>
          <Button className='mb-12px' type='secondary' long icon={<IconGoogle />}>Continue with Google</Button>
          <Divider />
          <div className="mb-8px text-size-12px text-zinc-4 text-left w-full">Email</div>
          <Input className='mb-14px' allowClear placeholder='Enter your email address...' />
          <Button type='secondary' status='danger' long>Continue with email</Button>
        </div>
      </div>
    </>
  )
}
