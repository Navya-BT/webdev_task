import React from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
    phone: yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
  firstName: yup
  .string("Enter your First Name")
  .max(40)
  .required('First Name is required'),
  message: yup
  .string()
  .max(100)
  .required()
});

 const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    //   password: '',
      firstName:'',
       message:'',
      phone:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values+"values");
      alert(JSON.stringify(values, null, 2)+  "Submited Successfully");
    },
  });

  return (
    <div style={{padding:"30px",marginTop:"30px"}}>
        <h2 style={{color:"#000"}}>Contact Form</h2>
      <form onSubmit={formik.handleSubmit}>
      <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          style={{paddingTop:"30px"}}
          variant="standard"
        />
       
         <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{paddingTop:"30px"}}
          variant="standard"
        />
         <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          style={{paddingTop:"30px"}}
          variant="standard"
        />
        {/* <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        /> */}
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          type="message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          style={{paddingTop:"30px"}}
          variant="standard"
        />
        <Button color="primary" variant="contained" size="large" fullWidth type="submit"  style={{marginTop:"30px"}}>
          Submit
        </Button>
      </form>
    </div>
  );
};
export default WithMaterialUI;