import { registerFormControls } from "@/config";
import CommonForm from "@/components/common/form";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({ title: data?.payload?.message });
        navigate("/login");
      } else {
        toast({ title: data?.payload?.message, variant: "destructive" });
      }
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create an Account
          </h1>
          <p className="mt-2 text-gray-600">
            Already have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </div>

        {/* Form */}
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          className="mt-6 space-y-4"
        />

        {/* Extra Links */}
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
