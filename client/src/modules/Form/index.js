import React from 'react'
import { useState } from "react";
import {useNavigate} from "react-router-dom"

import Input from "../../components/Input"
import Button from "../../components/Button"
const Form = ({
    isSignInPage=true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })
    // console.log('data :>>', data);
    const navigate=useNavigate()
    const handleSubmit = async(e) => {
        console.log('data :>> ', data);
        e.preventDefault()
        const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // const resData = await res.json()
        // console.log('data :>> ', resData);
        if(res.status === 400) {
            alert('Invalid credentials')
        }else{
            const resData = await res.json()
            if(resData.token) {
                localStorage.setItem('user:token', resData.token)
                localStorage.setItem('user:detail', JSON.stringify(resData.user))
                navigate('/')
            }
        }
    }
  return (
    <div className='bg-light h-screen flex items-center justify-center'>
        <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
        <div className=" text-xl font-light mb-14">{isSignInPage ? 'Sign In To Explore' : 'Sign up Now to get started'}</div>

        <form className="flex flex-col items-center w-full" onSubmit={(e) => handleSubmit(e)}>
        { !isSignInPage && <Input label="Full Name" name="name" placeholder="Enter Your Full Name" className="mb-6 w-[50%]" value={data.fullName} onChange={(e) => setData({...data,fullName: e.target.value})}/>}
        <Input label="Email Adress" name="email" type="email" placeholder="Enter Your Email" className="mb-6 w-[50%]" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
        <Input label="Password" name="password" type="password" placeholder="Enter Your Password" className="mb-14 w-[50%]" value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        <Button label={isSignInPage ? 'Sign In': 'Sign Up'} type='submit' className="w-1/2 mb-2" />
        </form>

        <div>{ isSignInPage ? "Don't have an Account? ":"Already have an account?"} <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up':'sign_in'}`)}>{isSignInPage ? 'Sign Up' : 'Sign In'}</span></div>
        </div>
    </div>
  )
}

export default Form