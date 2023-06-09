import { Box, Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useForm, Controller } from "react-hook-form";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  age: yup.number().required().positive().integer(),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
});

const HookForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                // name="firstName"
                error={!!(errors.firstName && errors.firstName.message)}
                helperText={errors.firstName && errors.firstName.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="firstName"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                // name="lastName"
                error={!!errors.lastName && !!errors.lastName.message}
                helperText={errors.lastName && errors.lastName.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="lastName"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                // name="lastName"
                error={!!errors.email && !!errors.email.message}
                helperText={errors.email && errors.email.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="email"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                // name="lastName"
                error={!!errors.age && !!errors.age.message}
                helperText={errors.age && errors.age.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="age"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                // name="lastName"
                error={!!errors.contact && !!errors.contact.message}
                helperText={errors.contact && errors.contact.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="contact"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                // name="lastName"
                error={!!errors.address && !!errors.address.message}
                helperText={errors.address && errors.address.message}
                sx={{ gridColumn: "span 2" }}
              />
            )}
            name="address"
            control={control}
            defaultValue=""
          />
        </Box>

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default HookForm;
