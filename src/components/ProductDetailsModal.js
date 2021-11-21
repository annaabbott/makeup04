import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }; 

function ProductDetailsModal({product,  handleClose}) {

    return (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={!!product}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={!!product}>
      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          {product?.name}
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          {product?.description}
        </Typography>
      </Box>
    </Fade>
  </Modal>
    )
}

export default ProductDetailsModal;