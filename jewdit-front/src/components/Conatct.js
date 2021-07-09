import { TextField } from '@material-ui/core'
import React from 'react'
import { useForm, Controller,} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginInline: theme.spacing(1),
    marginTop: theme.spacing(1),

    width: '35ch',
  },
  
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const defaultValues = {
  email: "",
  password: ""
};

export default function Contact() {
  const { handleSubmit,  control ,register } = useForm();
    const classes = useStyles();
    const onSubmit = (data) => console.log(data);

  return (
    <section class="contact" id="4" >


<h1> 
  אהבתם ?
  יש בקשות מיוחדות ? שלחו לי הודעה 
</h1>
<form onSubmit={handleSubmit(onSubmit)} class="contact__form" >

<Controller
            render={({ field }) => (
              <TextField {...field}
              label={'שם'}
              size={'small'}
              /> 
            )}
              control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label={'name'}
      rules ={{minLength: '2'}}
      {...register('name', { required: true })}
    />
<Controller
            render={({ field }) => (
              <TextField className={classes.textField}{...field}
              label={'הודעה'}
              multiline
              lineHeight={'normal'}
              rows={5}
              variant="outlined"
              
              /> 
            )}
              control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label={'msg'}
      variant="outlined"
      rules ={{minLength: '6'}}
      {...register('msg', { required: true })}
    />

    




</form >
  
  </section> 
  
  )
  }
