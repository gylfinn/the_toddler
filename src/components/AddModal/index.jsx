import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import AddBoardForm from '../addBoardForm';

const AddModal = ({
  isOpen, closeModal, takePhoto, selectFromCameraRoll, formtype
}) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <TouchableOpacity>
      {formtype}
    </TouchableOpacity>
  </Modal>
);

export default AddModal;
