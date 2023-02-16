import Login from '@/components/Login'
import UserDashboard from '@/components/UserDashboard'
import { useAuth } from '@/context/AuthContext'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  const {currentUser} = useAuth()
  return (
    <>
      <Head>
        <title>Todo List Apps</title>
        <meta name="desc" content="Created by ramen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login/>}
      {currentUser && <UserDashboard/>}
    </>
  )
}
