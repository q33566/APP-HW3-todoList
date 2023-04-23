import React, { useState } from 'react';
import { Slider, Box, Text, Center } from 'native-base';
let barValue:string = '';
const SliderBar = () => {
  const [Value, setValue] = useState(50);
  if(Value<40){
    barValue = "不急: ";
  }else if(Value<60){
    barValue = "急: ";
  }else{
    barValue = "緊急: ";
  }
  return (
    <Box  w="80%" mx="auto">
      <Box flexDirection= "row" justifyContent= "space-between">
        <Text>不急</Text>
        <Text>急</Text>
        <Text>緊急</Text>
      </Box>
      <Center>
      <Slider w="3/4" maxW="1000" defaultValue={70} minValue={0} 
      maxValue={100} colorScheme="indigo" step={10} onChange={v => setValue(v)}>
      <Slider.Track>
      <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
      </Slider>
      </Center>
    </Box>
  );
};

export {SliderBar, barValue};