import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ContatoContainer = styled("div")();

const FormContainer = styled("form")();

const Contato = () => {
  return (
    <ContatoContainer>
      <FormContainer>
        <TextField
          label="Nome"
          variant="outlined"
          margin="normal"
          required
          style={{ width: "450px" }}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          margin="normal"
          required
          style={{ width: "450px" }}
        />
        <TextField
          label="Mensagem"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          required
          style={{ width: "450px" }}
        />
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Enviar
          </Button>
        </Box>
      </FormContainer>
    </ContatoContainer>
  );
};

export default Contato;
