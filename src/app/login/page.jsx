'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Chip, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataOfForm= Object.fromEntries(formData.entries())
    console.log(dataOfForm, 'data in submitted form ')
    // const {fullName,email, password,imageUrl} = dataOfForm

const { data, error } = await authClient.signIn.email({
   email: dataOfForm.email,
    password: dataOfForm.password,
    callbackURL: "/",
});
// console.log(data, 'data after submission')

if(data){redirect("/")}
};


const handleGoogleSignIn =async()=>{
   const data = await authClient.signIn.social({
    provider: "google",
  });

  if(data){redirect("/")}
}
    return (
        <div className="m-40 p-10 border-4 flex flex-col gap-10 items-center justify-center shadow-2xl
        ">
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
                    <Label className="text-white">Email</Label>
                    <Input placeholder="adam@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                >
                    <Label className="text-white">Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
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
            <div className='text-blue-600 flex flex-col gap-5'>
                                <Chip color='accent' className='text-center'>Or</Chip>
                                <Button variant="tertiary" onClick={handleGoogleSignIn}><FcGoogle /> Sign-In with Google</Button>
                            </div>
        </div>
    );
};

export default LoginPage;