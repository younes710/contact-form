import {
 FormControlLabel,
 RadioGroup,
 TextField,
 Radio,
 Checkbox,
 Button,
 Snackbar,
 SnackbarContent,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ContactUsForm = () => {
 const [checkboxValidation, setCheckboxValidation] = useState(false);
 const [showSnackbar, setShowSnackbar] = useState(false);

 // * hook form
 const {
  register,
  watch,
  control,
  handleSubmit,
  setValue,
  formState: { errors },
 } = useForm({
  defaultValues: {
   firstName: '',
   lastName: '',
   email: '',
   message: '',
   confirm: false,
   types: '1',
  },
 });
 const confirmValue = watch('confirm');

 const handleFormSubmit = (data) => {
  confirmValue ? setCheckboxValidation(false) : setCheckboxValidation(true);
  if (confirmValue) {
   setShowSnackbar(true);
   setValue('confirm', false);
   setValue('types', '1');
   setValue('firstName', '');
   setValue('lastName', '');
   setValue('email', '');
   setValue('message', '');
  }
 };

 return (
  <div className='w-[minmax(0,30rem)] bg-white grid rounded mx-auto p-3 gap-3'>
   <div className='border-b border-slate-300 pb-3'>
    <span className='font-bold'>Contact US</span>
   </div>
   <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3'>
    <TextField
     required
     size='small'
     label='First Name'
     error={!!errors.firstName}
     helperText={errors.firstName?.message}
     {...register('firstName', { required: 'This field is required', min: 1 })}
    />
    <TextField
     required
     size='small'
     label='Last Name'
     error={!!errors.lastName}
     helperText={errors.lastName?.message}
     {...register('lastName', { required: 'This field is required', min: 1 })}
    />
   </div>
   <TextField
    required
    size='small'
    label='Email Address'
    error={!!errors.email}
    helperText={errors.email?.message}
    {...register('email', {
     required: 'This field is required',
     min: 1,
     pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address',
     },
    })}
   />
   <span>Query Types :</span>
   <Controller
    name='types'
    control={control}
    render={({ field }) => (
     <RadioGroup {...field} className='ms-3 -me-3'>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3'>
       <FormControlLabel
        className='w-full rounded border border-slate-300'
        value='1'
        control={<Radio />}
        label='General Enquiry'
       />
       <FormControlLabel
        className='w-full rounded border border-slate-300'
        value='2'
        control={<Radio />}
        label='Support Request'
       />
      </div>
     </RadioGroup>
    )}
   />
   <TextField
    required
    multiline
    minRows={3}
    label='Message'
    error={!!errors.message}
    helperText={errors.message?.message}
    {...register('message', { required: 'This field is required', min: 1 })}
   />
   <div className='flex flex-col'>
    <Controller
     name='confirm'
     control={control}
     render={({ field }) => (
      <FormControlLabel
       key={`confirm-${confirmValue || ''}`}
       className='-my-1'
       value='2'
       required
       control={<Checkbox {...field} defaultChecked={field.value} />}
       label={'I consent to being contacted by team'}
      />
     )}
    />
    {checkboxValidation && (
     <span className='text-red-600'>
      To submit this form, please consent to being contacted
     </span>
    )}
   </div>
   <Button
    className='!bg-teal-600 !text-white'
    onClick={handleSubmit(handleFormSubmit)}
   >
    Submit
   </Button>
   <Snackbar
    open={showSnackbar}
    autoHideDuration={5000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={() => setShowSnackbar(false)}
   >
    <SnackbarContent
     message={
      <div className='grid gap-3'>
       <div className='flex gap-3'>
        <CheckCircleOutlineIcon fontSize='small' />
        <span>Message Sent !</span>
       </div>
       <span>Thanks for completing the form. We'll be in touch soon !</span>
      </div>
     }
    />
   </Snackbar>
  </div>
 );
};

export default ContactUsForm;
