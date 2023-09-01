import React from 'react'
import { BadgeDelta, Card, Metric, Text, Flex } from "@tremor/react";

const Carditems = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex justifyContent='between' alignItems='center'>
    <Text>Sales</Text>
    <BadgeDelta>
        +12.5%
    </BadgeDelta>  
    </Flex> 
    <Metric>$ 34,743</Metric>
    </Card>
  );
};

export default Carditems