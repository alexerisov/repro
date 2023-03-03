import React, { useEffect } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "~components/shared/LoadingSpinner/LoadingSpinner";
import { PasswordField } from "~components/shared/PasswordField/PasswordField";

import { Button, Paper, TextField } from "@mui/material";

import { NextPageWithLayout } from "../../../pages/_app";

const loginValidationSchema = yup.object({
  username: yup.string().required("Логин не может быть пустым"),
  password: yup.string().required("Пароль не может быть пустым")
});

export const LoginPage: NextPageWithLayout = ({ redirectUrl }: any) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login", "/login", { shallow: true });
  }, []);

  const formik = useFormik<{
    username: string;
    password: string;
    submitError?: null;
  }>({
    initialValues: {
      username: "repro",
      password: "repro"
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.setSubmitting(true);
      try {
        const res = await signIn("credentials", {
          redirect: false,
          callbackUrl: redirectUrl || "/",
          username: values.username,
          password: values.password
        });
        if (res?.error) {
          formikHelpers.setFieldError("submitError", res.error);
          formikHelpers.setSubmitting(false);
        } else {
          formikHelpers.setFieldError("submitError", undefined);
          formikHelpers.setSubmitting(false);
        }
        if (res?.url) router.push(redirectUrl);
      } catch (e) {
        console.log(e);
      }
    }
  });

  return (
    <>
      <Paper square className="flex child:h-screen">
        <div className="flex flex-1 basis-1/3 flex-col items-center justify-between py-12 px-16">
          <form
            className="flex w-[30%] flex-col gap-6"
            onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              name="username"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={
                !!formik.errors.submitError ||
                (!!formik.errors.username && formik.touched.username)
              }
              helperText={formik.errors.username}
              label="Логин"
            />
            <PasswordField
              variant="outlined"
              name="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                !!formik.errors.submitError ||
                (!!formik.errors.password && formik.touched.password)
              }
              helperText={formik.errors.submitError || formik.errors.password}
              label="Пароль"
            />
            <span>login: repro</span>
            <span>password: repro</span>
            <span className="flex items-center justify-between">
              <Button
                type="submit"
                className="bg-primary"
                color="primary"
                variant="contained"
                disabled={formik.isSubmitting}>
                {formik.isSubmitting ? <LoadingSpinner /> : "Войти"}
              </Button>
            </span>
          </form>
          <div />
        </div>
      </Paper>
    </>
  );
};
