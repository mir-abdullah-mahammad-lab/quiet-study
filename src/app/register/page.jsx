'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { Button, Chip, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const RegisterPage = () => {
    const googleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })
        if (data) {
            redirect("/login")
        }
    }

     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataOfForm= Object.fromEntries(formData.entries())
    console.log(dataOfForm, 'data in submitted form ')
    // const {fullName,email, password,imageUrl} = dataOfForm

const { data, error } = await authClient.signUp.email({
    name: dataOfForm.name,
    email: dataOfForm.email,
    image:dataOfForm.image,
    password: dataOfForm.password,
    callbackURL: "/",
});
console.log(data, 'data after submission')

if(data){redirect("/login")}
}
    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <div>
                <Form className="flex w-96 flex-col gap-4 text-white" onSubmit={onSubmit} >
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"                      
                    >
                        <Label className='text-white'>Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>




                    {/* email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-white'>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Photo */}
                    <TextField
                        isRequired
                        name="image"
                        type="text"                      
                    >
                        <Label className='text-white'>Photo-URL</Label>
                        <Input placeholder="Enter URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-white'>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase,lowercase and number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>


            <>
                <div className='text-blue-600 flex flex-col gap-5'>
                    <Chip color='accent' className='text-center'>Or,Take Easy Step By</Chip>
                    <Button variant="tertiary" onClick={googleSignUp}><FcGoogle /> Sign-Up with Google</Button>
                </div>
            </>
        </div>
    )
};


export default RegisterPage;