import React from "react";
import AlertDialog from "../components/tests/AlertDialog";
import FormtDialog from "../components/tests/FormDialog";
import CustomizedDialogs from "../components/tests/CustomizedDialogs.tsx";
import ConfirmationDialogRaw from "../components/tests/ConfirmationDialogRaw.tsx";
import FullScreenDialog from "../components/tests/FullScreenDialog.tsx";
import DraggableDialog from "../components/tests/DraggableDialog.tsx";
import CircularIndeterminate from "../components/tests/CircularIndeterminate.tsx";
import SkeltonsVariants from "../components/tests/SkeltonsVariants.tsx";
import SimpleAccordion from "../components/tests/SimpleAccordion.tsx";
import SnackBars from "../components/tests/SnackBars.tsx";
import PrimarySearchAppBar from "../components/tests/PrimarySearchAppBar.tsx";
// import RouterBreadcrumbs from "../components/tests/RouterBreadcrumbs.tsx";
import FixedBottomNavigation from "../components/tests/FixedBottomNavigation.tsx";
import ServerSidePersistence from "../components/tests/ServerSidePersistence.tsx";
import ReactSuspense from "../components/tests/ReactSuspense.js";
import SpeechRecognitionComponentReq from "../components/tests/SpeechRecognitionComponentReq.jsx";
import SpeechRecognitionComponentRes from "../components/tests/SpeechRecognitionComponentRes.jsx";

function TestsView({ isLogged }) {
  return (
    <div>
      <h1>Tela de testes de Componentes</h1>
      <p>Aqui está alguns compnentes testados:</p>

      <SpeechRecognitionComponentReq />
      <br />
      <SpeechRecognitionComponentRes />
      <br />
      <PrimarySearchAppBar />
      <br />
      <ReactSuspense />
      <br />
      <br />
      <AlertDialog />
      <br />

      <FormtDialog />
      <br />

      <br />
      <DraggableDialog />
      <br />
      <CustomizedDialogs />
      <br />
      <FullScreenDialog />
      <br />
      <ConfirmationDialogRaw />
      <br />
      <CircularIndeterminate />
      <br />
      <ServerSidePersistence />
      <br />
      <SkeltonsVariants />
      <br />
      <SnackBars />
      <br />
      <SimpleAccordion />
      <br />
      <FixedBottomNavigation />
      <br />
      {/* <RouterBreadcrumbs /> */}
    </div>
  );
}

export default TestsView;
