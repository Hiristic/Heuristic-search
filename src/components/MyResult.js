import { Image, useDisclosure, FormControl, Switch, FormLabel, Modal, ModalBody, ModalCloseButton, ModalHeader, Button, onOpen, isOpen, onClose, ModalOverlay, ModalContent, ChakraProvider, Box, Text } from "@chakra-ui/react";

export function MyResult({ result }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log('result', result)
    return (
        <Box p="5" borderWidth="1px" borderColor="#4FD1C5" m="30px">

            <Image url="bread.png"
                borderRadius="full"
                boxSize="150px"
            />
            <Text textAlign="center"> {result.produkt.raw} </Text>

            <Button onClick={onOpen} float="right" border="1px" borderColor="#4FD1C5">Ser mer</Button>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="22px">Information om:</Text> {result.produkt.raw} </ModalHeader>
                    <Box borderTop="1px" borderColor="#4FD1C5" m="10px" p="5px"><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="18px">Kategori:</Text> <Text fontSize="12px">{result.kategori.raw} </Text></Box>
                    <Box borderTop="1px" borderColor="#4FD1C5" m="10px" p="5px"><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="18px">Ingredienser: </Text> <Text fontSize="12px">{result.ingredienser.raw}</Text></Box>
                    <Box borderTop="1px" borderColor="#4FD1C5" m="10px" p="5px"><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="18px">Ingredienser List:</Text> <Text fontSize="12px">{result.ingredienser_list.raw}</Text></Box>
                    <Box borderTop="1px" borderColor="#4FD1C5" m="10px" p="5px"><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="18px">Kemikalier: </Text> <Text fontSize="12px">{result.kemikalier.raw} </Text></Box>
                    <Box borderTop="1px" borderColor="#4FD1C5" m="10px" p="5px"><Text color="#4FD1C5" fontFamily="Cormorant Garamond" fontSize="18px">Leverantor: </Text> <Text fontSize="12px">{result.leverantor.raw} </Text></Box>

                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default MyResult;