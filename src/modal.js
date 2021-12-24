import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    useDisclosure,
    Flex,
    Spacer,
    Box
  } from '@chakra-ui/react'
import { Colonno, London , Selling, StMartin} from './weather'
import {IoAirplaneOutline,IoHomeOutline} from 'react-icons/io5'


export function Normal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} position={"absolute"} right={"20px"} bottom={"-70px"} padding={"40px"} opacity={"80%"}>
            <IoHomeOutline size={50} color='#000' />
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='full' color='blue'>
          <ModalOverlay />
          <ModalContent color="blue">
            <ModalBody bg="gray.700">
                <Flex bg='gray.700'>
                    <Box h='500px' w="400px" alignItems='center' padding={"10"}>
                       <London/>
                    </Box>
                    <Spacer/>
                    <Box h='500px' w="400px" alignItems='center' padding={"10"}>
                       <Selling/>
                    </Box>
                    </Flex>
                <Flex alignItems={"center"} justifyContent={"center"}>
                <Button colorScheme='blue' alignItems={"center"} onClick={onClose} padding={"30px"} fontSize={24}>
                            Close
                </Button>
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export function Holiday() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} position={"absolute"} left={"20px"} bottom={"-70px"} padding={"40px"} opacity={"80%"}>
            <IoAirplaneOutline size={50} color='#000' />
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='full' color='blue'>
          <ModalOverlay />
          <ModalContent color="blue">
            <ModalBody bg="gray.700">
                <Flex bg='gray.700'>
                    <Box h='500px' w="400px" alignItems='center' padding={"10"}>
                       <Colonno/>
                    </Box>
                    <Spacer/>
                    <Box h='500px' w="400px" alignItems='center' padding={"10"}>
                       <StMartin/>
                    </Box>
                    </Flex>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Button colorScheme='blue' alignItems={"center"} onClick={onClose} padding={"30px"} fontSize={24}>
                                Close
                    </Button>
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }