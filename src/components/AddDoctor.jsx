import React, { useState, useEffect } from "react";
import { addDoctor } from "./api";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Select
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icon";

function InitialFocus({ handleGet, setLoading, setError }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [spec, setSpec] = useState("");
  const [salary, setSalary] = useState("");

  console.log(id, name, hospital, spec, salary);
  const handleOnClick = (id, name, hospital, spec, salary) => {
    setLoading(true);
    console.log(id, name, hospital, spec, salary);

    addDoctor({
      id,
      name,
      hospital,
      spec,
      salary,
      status: false
    })
      .then(() => {
        handleGet();
      })
      .catch(() => setError(true))
      .finally(() => {
        alert("Succeed");
        setLoading(false);
      });
  };
  useState(() => {}, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Add Doctor</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctors</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Id</FormLabel>
              <Input
                onChange={(e) => setId(e.target.value)}
                ref={initialRef}
                name="name"
                placeholder="Id"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Doctor's Name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                name="name"
                ref={initialRef}
                placeholder="Doctor's name"
              />
            </FormControl>{" "}
            <br /> <br />
            <Menu>
              <MenuButton as={Button}>Hospital</MenuButton>
              <Select
                placeholder="Select Hospital"
                onChange={(e) => setHospital(e.target.value)}
              >
                <option value="Hospital A">Hospital A</option>
                <option value="Hospital B">Hospital B</option>
                <option value="Hospital C">Hospital C</option>
                <option value="Hospital D">Hospital D</option>
                <option value="Hospital E">Hospital E</option>
              </Select>
            </Menu>
            <Menu>
              <Menu>
                <MenuButton as={Button}>Specialization</MenuButton>
                <Select
                  placeholder="Select Specialization"
                  onChange={(e) => setSpec(e.target.value)}
                >
                  <option value="General A">General A</option>
                  <option value="General B">General B</option>
                  <option value="General C">General C</option>
                  <option value="General D">General D</option>
                  <option value="General E">General E</option>
                </Select>
              </Menu>
            </Menu>
            <FormControl mt={4}>
              <FormLabel>Salary</FormLabel>
              <Input
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
                type="number"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => handleOnClick(id, name, hospital, spec, salary)}
              colorScheme="blue"
              mr={3}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InitialFocus;
