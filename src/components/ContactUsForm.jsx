import {
 FormControlLabel,
 RadioGroup,
 TextField,
 Radio,
 Checkbox,
 Button,
} from '@mui/material';

const ContactUsForm = () => {
 return (
  <div className='w-[30rem] bg-white grid rounded mx-auto p-3 gap-3'>
   <div className='border-b border-slate-300 pb-3'>
    <span className='font-bold'>Contact US</span>
   </div>
   <div className='grid grid-cols-2 gap-3'>
    <TextField size='small' label='First Name' />
    <TextField size='small' label='Last Name' />
   </div>
   <TextField size='small' label='Email Address' />
   <span>Query Types :</span>
   <RadioGroup className='ms-3 -me-3'>
    <div className='grid grid-cols-2 gap-3'>
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
   <TextField multiline minRows={3} label='Message' />
   <FormControlLabel
    className='-my-1'
    value='2'
    control={<Checkbox />}
    label='I consent to being contacted by team'
   />
   <Button className='!bg-teal-600 !text-white'>Submit</Button>
  </div>
 );
};

export default ContactUsForm;
