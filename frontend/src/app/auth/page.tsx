'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface AuthenticationFormData {
    phoneNumber: string;
    referralCode?: string;
}

interface OTPFormData {
    OTP: string;
}

const phoneNumberSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .required("شماره تلفن اجباری است")
        .matches(/^\d{11}$/, "شماره تلفن باید 11 رقمی باشد"),
    referralCode: yup
        .string()
        .optional()
        .matches(/^\d{6}$/, "کد معرف باید 6 رقمی باشد"),
});

const OTPSchema = yup.object().shape({
    OTP: yup
        .string()
        .required("کد تایید اجباری است")
        .matches(/^\d{6}$/, "کد تایید باید 6 رقمی باشد"),
});


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthenticationFormData>({
        resolver: yupResolver(phoneNumberSchema),
    });

    const onSubmit = (data: AuthenticationFormData) => {
        console.log(data);
        // Handle phone number and referral code submission
    };

    return (
        <>
            <h2 className='text-lg'>ثبت نام</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 w-full px-xl'>
                <input
                    type="text"
                    placeholder="شماره تلفن"
                    className="input input-bordered w-full "
                    {...register('phoneNumber')}
                />
                {errors.phoneNumber && <p className='text-error'>{errors.phoneNumber.message}</p>}

                <input
                    type="text"
                    placeholder="کد معرف"
                    className="input input-bordered w-full "
                    {...register('referralCode')}
                />
                {errors.referralCode && <p className='text-error'>{errors.referralCode.message}</p>}

                <button className="btn bg-primary text-neutral p-md w-full" type="submit">ورود</button>
            </form>
        </>
    )
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthenticationFormData>({
        resolver: yupResolver(phoneNumberSchema),
    });

    const onSubmit = (data: AuthenticationFormData) => {
        console.log(data);
        // Handle phone number submission
    };

    return (
        <>
            <h2 className='text-lg'>ورود</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 w-full px-xl'>
                <input
                    type="text"
                    placeholder="شماره تلفن"
                    className="input input-bordered w-full "
                    {...register('phoneNumber')}
                />
                {errors.phoneNumber && <p className='text-error'>{errors.phoneNumber.message}</p>}

                <button className="btn bg-primary text-neutral p-md w-full" type="submit">ورود</button>
            </form>
        </>
    );
}

const OTP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<OTPFormData>({
        resolver: yupResolver(OTPSchema),
    });

    const onSubmit = (data: OTPFormData) => {
        console.log(data);
        // Handle OTP submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 w-full px-xl'>
            <input
                type="text"
                placeholder="کد ارسال شده را وارد کنید"
                className="input input-bordered w-full "
                {...register('OTP')}
            />
            {errors.OTP && <p className='text-error'>{errors.OTP.message}</p>}

            <button className="btn bg-primary text-neutral p-md w-full" type="submit">ورود</button>
        </form>
    );
}

const Auth = () => {
    const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false)
    const [authStep, setAuthStep] = useState<"phoneNumber" | "OTP">("phoneNumber")

    return (
        <div className='flex flex-col items-center gap-8 w-full'>
            {authStep === "phoneNumber" ?
                (isUserRegistered ? <>
                    <Login />
                    <p className='text-primary text-sm' onClick={() => setIsUserRegistered(s => !s)}>
                        {isUserRegistered ? "برای ثبت نام اینجا کلیک کنید" : "برای ورود اینجا کلیک کنید"}
                    </p>
                </> :
                    <>
                        <SignUp />
                        <p className='text-primary text-sm' onClick={() => setIsUserRegistered(s => !s)}>
                            {isUserRegistered ? "برای ثبت نام اینجا کلیک کنید" : "برای ورود اینجا کلیک کنید"}
                        </p>
                    </>) :
                <OTP />
            }
        </div>
    );
}

export default Auth