import React from 'react'
import Layout from './Layout'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full h-16 border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-around'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span>
                by &nbsp;<Link href="www.google.com" className='underline underline-offset-2' target='_blank'>CodeBucks</Link>
            </div>
            <Link href="www.google.com" className='underline underline-offset-2' target='_blank'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer