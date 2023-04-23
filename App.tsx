import React from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import {SliderBar, barValue} from "./SliderBar";

const Example = () => {
  const instState = [{
    title: "請新增工作",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = title => {
    if (title === "") {
      toast.show({
        title: "請輸入代辦事項",
        //status: "warning"
      });
      return;
    }

    setList(prevList => {
      return [...prevList, {
        title: barValue + title,
        isCompleted: false
      }];
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };
  return (
    <Center w="100%">
      <Box maxW="300" w="100%">
        <Center>
        <Heading mb="2" size="md">
          TodoList
        </Heading>
        </Center>
        <SliderBar />
        <VStack space={4}>
          <HStack space={2}>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="請新增工作" />
            <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            addItem(inputValue);
            setInputValue("");
          }} />
          </HStack>
          <VStack space={2}>
            {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
                <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
              color: item.isCompleted ? "gray.400" : "coolGray.800"
            }} _dark={{
              color: item.isCompleted ? "gray.400" : "coolGray.50"
            }} onPress={() => handleStatusChange(itemI)}>
                  {item.title}
                </Text>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>);
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    