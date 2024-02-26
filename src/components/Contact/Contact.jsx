import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Text } from '../../context/Language';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  subject: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

import { styles } from '../../styles';

const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [sucMessage, setSucMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  return (
    <div id='contact' className='container mx-auto'>
      <div className='w-full flex flex-col justify-center items-center py-24 px-4 lg:px-0'>
        <h2 data-aos='fade-up-right' className={styles.sectionHeadText}>
          <Text tid='contact-title' />
        </h2>
        <p data-aos='fade-up-left' className={styles.sectionSubText}>
          <Text tid='contact-text' />
        </p>
        <Formik
          initialValues={{
            name: '',
            subject: '',
            email: '',
            message: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // same shape as initial values
            emailjs
              .send(serviceID, templateID, values, publicKey)
              .then(() => {
                setSucMessage(<Text tid='success' />);
                setTimeout(() => {
                  setSucMessage('');
                  setSubmitting(false);
                  resetForm();
                }, 3000);
              })
              .catch(() => {
                setErrMessage(<Text tid='error' />);
                setTimeout(() => {
                  setErrMessage('');
                }, 3000);
              });
          }}
        >
          {({ values, errors, touched }) => (
            <Form className='grid max-w-[1240px] w-full grid-cols-2 gap-x-4 gap-y-24 mt-24 px-2'>
              <div
                className='col-span-2 lg:col-span-1'
                data-aos='fade-up-right'
              >
                <div className='relative flex flex-col'>
                  <Field
                    type='text'
                    name='name'
                    id='user_name'
                    value={values.name}
                    className='bg-transparent border-b focus:outline-none peer/name'
                  />

                  <label
                    htmlFor='user_name'
                    className={`absolute left-0 bottom-0 peer-focus/name:bottom-8 peer-focus/name:text-xs peer-focus/name:text-gray-400${
                      values.name ? ' text-gray-400 text-xs bottom-8' : ''
                    }`}
                  >
                    <Text tid='name' />*
                  </label>
                </div>
                {errors.name && touched.name ? (
                  <div className='text-red-500 text-sm font-light mt-2'>
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className='col-span-2 lg:col-span-1' data-aos='fade-up-left'>
                <div className='relative flex flex-col'>
                  <Field
                    type='text'
                    className='bg-transparent border-b focus:outline-none peer/subject'
                    name='subject'
                    id='user_subject'
                  />

                  <label
                    htmlFor='user_subject'
                    className={`absolute left-0 bottom-0 peer-focus/subject:bottom-8 peer-focus/subject:text-xs peer-focus/subject:text-gray-400${
                      values.subject ? ' text-gray-400 text-xs bottom-8' : ''
                    }`}
                  >
                    <Text tid='subject' />*
                  </label>
                </div>
                {errors.subject && touched.subject ? (
                  <div className='text-red-500 text-sm font-light mt-2'>
                    {errors.subject}
                  </div>
                ) : null}
              </div>
              <div
                className='col-span-2 lg:col-span-1'
                data-aos='fade-up-right'
              >
                <div className='relative flex flex-col'>
                  <Field
                    type='email'
                    value={values.email}
                    className='bg-transparent border-b focus:outline-none peer/email'
                    name='email'
                    id='user_email'
                  />

                  <label
                    htmlFor='user_email'
                    className={`absolute left-0 bottom-0 peer-focus/email:bottom-8 peer-focus/email:text-xs peer-focus/email:text-gray-400${
                      values.email ? ' text-gray-400 text-xs bottom-8' : ''
                    }`}
                  >
                    <Text tid='email' />*
                  </label>
                </div>
                {errors.email && touched.email ? (
                  <div className='text-red-500 text-sm font-light mt-2'>
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className='col-span-2' data-aos='fade-up-right'>
                <div className='relative flex flex-col'>
                  <Field
                    as='textarea'
                    value={values.message}
                    id='message'
                    rows='3'
                    className='bg-transparent border-b w-full focus:outline-none peer/msg'
                    name='message'
                  />

                  <label
                    htmlFor='user_email'
                    className={`absolute left-0 bottom-0 peer-focus/msg:bottom-20 peer-focus/msg:text-xs peer-focus/msg:text-gray-400${
                      values.message ? ' text-gray-400 text-xs bottom-20' : ''
                    }`}
                  >
                    <Text tid='message' />*
                  </label>
                </div>
                {errors.message && touched.message ? (
                  <div className='text-red-500 text-sm font-light mt-2'>
                    {errors.message}
                  </div>
                ) : null}
              </div>
              <button
                data-aos='fade-up'
                className='col-span-2 violet-gradient py-3 hover:blue-gradient'
              >
                <Text tid='submit' />
              </button>
            </Form>
          )}
        </Formik>
        {sucMessage && (
          <p className='text-green-500 font-light text-sm'>{sucMessage}</p>
        )}
        {errMessage && (
          <p className='text-red-500 font-light text-sm'>{errMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
